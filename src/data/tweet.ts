import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 1,
    user: user,
    body: 'Post example',
    image: 'https://images.wondershare.com/repairit/aticle/2021/08/twitter-header-photo-issues-1.jpg',
    likeCount: 200,
    commentCount: 20,
    retweetCount: 3,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 12, 1, 10, 0, 0)
}