import { config } from "dotenv"
import { TwitterApi } from "twitter-api-v2"
config({ path: '../.env' })  // 👈 Go up one level to find the .env

console.log("Twitter keys loaded:", {
  TWITTER_API_KEY: process.env.TWITTER_API_KEY,
  TWITTER_API_SECRET: process.env.TWITTER_API_SECRET,
});

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

export async function createPost(status) {
    const newPost = await twitterClient.v2.tweet(status)

    return {
        content: [
            {
                type: "text",
                text: `Tweeted: ${status}`
            }
        ]
    }
}