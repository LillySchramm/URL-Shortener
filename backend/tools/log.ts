import moment from 'moment';
import { env } from 'process';
const LOG_PREFIX = 'EPS-URL';

const CLI_LOGO =
`
###############################################

 _____ ____  ____            _   _ ____  _
| ____|  _ \\/ ___|          | | | |  _ \\| |
|  _| | |_) \\___ \\   _____  | | | | |_) | |
| |___|  __/ ___) | |_____| | |_| |  _ <| |___
|_____|_|   |____/           \\___/|_| \\_\\_____|


VERSION: 0.0.3                       26.03.2022

###############################################
`;

export function log(message: any): void {
    console.log(`${moment().format('hh:mm:ss')}: [${LOG_PREFIX}] ${message}`);
}

export function splashscreen(): void {
    for(const line of CLI_LOGO.split('\n')) log(line);
}
