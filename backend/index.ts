import express from 'express';
import 'dotenv/config';
import { log, splashscreen } from './tools/log';
import { addUrl, getUrl } from './tools/database';
import { isHttpsUri } from 'valid-url';
import { env } from 'process';

const BASE_URL = env.BASE_URL;
const app = express();
app.use(express.json());

app.get('/:id', async (req, res, next) => {
    const id: string = req.params.id;
    const url = await getUrl(id);

    if (!url) {
        res.status(400);
        res.json({ "error": "ID does not exist." });

        return;
    }

    res.redirect(url);
});

app.post('/add', async (req, res, next) => {
    const { url } = req.body;

    if (!url || url.length > 2048 || !isHttpsUri(url)) {
        res.status(400);
        res.json({ "error": "URL not valid." });

        return;
    }
    log(`Adding URL: ${url}`);

    const id = await addUrl(url);

    res.json({ "url": `${BASE_URL}/${id}` });
});

const server = app.listen(3000, async () => {
    splashscreen();

    log(`🚀 Server ready at: http://localhost:3000`);
});