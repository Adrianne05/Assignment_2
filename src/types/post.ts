import type { ImageSourcePropType } from "react-native";

export type ExplorePost = {
  id: string;
  image: ImageSourcePropType;
  username: string;
  audio: string;
  caption: string;
  likes: number;
  comments: number;
  reposts: number;
  shares: number;
};

export type FeedPost = Pick<ExplorePost, "id" | "image" | "username" | "audio">;
