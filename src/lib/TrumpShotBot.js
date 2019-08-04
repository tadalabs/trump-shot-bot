import TwitterStreamAPI from 'twit';
import TelegramBotAPI from 'node-telegram-bot-api';

const realDonaldTrump = '25073877';

export default class TrumpShotBot {
  constructor(twitterConfig, telegramConfig) {
    this.twitter = twitterConfig;
    this.telegram = telegramConfig;
    this.streamer = new TwitterStreamAPI(this.twitter);
    this.bot = new TelegramBotAPI(this.telegram.token, {
      polling: false
    });
  }

  lol() {
    this.stream = this.streamer.stream('statuses/filter', {
      follow: [realDonaldTrump]
    });
    this.stream.on('tweet', this.onTweet.bind(this));
  }

  onTweet(tweet) {
    if (
      tweet &&
      tweet.user &&
      tweet.user.id &&
      tweet.user.id.toString() === realDonaldTrump
    )
      this.bot.sendMessage(
          this.telegram.chatId,
        `Do a shot (${tweet.text})`
      );
  }
}
