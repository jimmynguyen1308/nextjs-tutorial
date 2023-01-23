import type { NextApiRequest, NextApiResponse } from "next"
import { PostProps } from "@/pages/blogposts"
import { posts } from "../posts.json"

type Data = {
  posts: Array<PostProps>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") res.status(200).json({ posts })
  else if (req.method === "POST") {
    const post = req.body.post
    const newPost: PostProps = {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
    }
    posts.push(newPost)
    res.status(201).json({ posts: [newPost] })
  }
}
