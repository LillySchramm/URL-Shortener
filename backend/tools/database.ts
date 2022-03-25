import { MongoClient } from 'mongodb';
import { env } from 'process';
import { log } from './log';
import { getRandomString } from './random';

const DATABASE_URL: string = env.DATABASE_URL || '';

const client = new MongoClient(DATABASE_URL);

export async function getUrl(id: string): Promise<string | undefined> {
    if (!id || id.length >= 255) {
        return undefined;
    }

    await client.connect();

    const collections = await client.db('eps-url').listCollections().toArray();

    if (!collections.find((_collection) => _collection.name === "redirects")) {
        return undefined;
    }

    const collection = client.db('eps-url').collection('redirects');
    const redirect = await collection.findOne({ id });

    return redirect ? redirect.url : undefined;
}

export async function addUrl(url: string): Promise<string> {
    await client.connect();

    const collection = client.db('eps-url').collection('redirects');
    const redirect = await collection.findOne({ url });

    if (redirect) {
        return redirect.id;
    }

    let id = '';
    do {
        id = getRandomString();
    } while(await collection.findOne({ id }));

    collection.insertOne({id, url});

    if (!await collection.indexExists('id_index')) {
        log('Looks like id_index has not been created yet. Creating.');
        await collection.createIndex('id', { name: "id_index" });
    }

    if (!await collection.indexExists('url_index')) {
        log('Looks like url_index has not been created yet. Creating.');
        await collection.createIndex('url', { name: "url_index" });
    }
    return id;
}
