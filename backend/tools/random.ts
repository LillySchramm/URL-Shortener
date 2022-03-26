import { env } from 'process';

const CHAR_POOL = env.CHAR_POOL || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const ID_SIZE = env.ID_SIZE || 6;

export function getRandomString() {
    let result = '';
    for ( let i = 0; i < ID_SIZE; i++ ) {
        result += CHAR_POOL.charAt(Math.floor(Math.random() * CHAR_POOL.length));
    }
    return result;
}