import TrumpShotBot from './lib/TrumpShotBot';
import TwitterStreamAPIConfig from './settings/twitter-stream-config';
import TelegramBotAPIConfig from './settings/telegram-api-config';

new TrumpShotBot(TwitterStreamAPIConfig, TelegramBotAPIConfig).lol();
