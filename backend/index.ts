import express from 'express';
import 'dotenv/config';
import { log, splashscreen } from './tools/log';
import { addUrl, getRedirectCount, getUrl } from './tools/database';
import { isHttpsUri } from 'valid-url';
import { env } from 'process';
import rateLimit from 'express-rate-limit';
import { VERSION, VERSION_DATE } from './version';

const BASE_URL = env.BASE_URL;
const app = express();
app.use(express.json());

const addLimiter = rateLimit({
	windowMs: 60 * 1000,
	max: 30,
	standardHeaders: true,
	legacyHeaders: false,
});

app.get('/stats', async (req, res, next) => {
    const currentRedirectCount = await getRedirectCount();

    res.json({
        version: VERSION,
        releaseDate: VERSION_DATE,
        currentRedirectCount,
    });
});

app.get('/:id', async (req, res, next) => {
    const id: string = req.params.id;
    const url = await getUrl(id);

    if (!url) {
        res.status(400);
        res.json({ 'error': 'ID does not exist.' });

        return;
    }

    res.redirect(url);
});

app.post('/add', addLimiter, async (req, res, next) => {
    const { url } = req.body;

    if (!url || url.length > 2048 || !isHttpsUri(url)) {
        res.status(400);
        res.json({ 'error': 'URL not valid.' });

        return;
    }
    log(`Adding URL: ${url}`);

    const id = await addUrl(url);

    res.json({ 'url': `${BASE_URL}/${id}` });
});

const server = app.listen(80, async () => {
    splashscreen();

    log(`🚀 Server ready at: ${BASE_URL}`);
});