import type { NextApiRequest, NextApiResponse } from "next"
import { PostProps } from "@/pages/blogposts"
import { posts } from "../posts.json"

type Data = {
  post: PostProps | undefined
  message?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { postID } = req.query
  if (req.method === "GET") {
    const post = posts.find((post: PostProps) => post.id.toString() === postID)
    if (post) res.status(200).json({ post })
    else res.status(404).json({ post, message: "No post found" })
  } else if (req.method === "DELETE") {
    const deletedPost = posts.find(
      (post: PostProps) => post.id.toString() === postID
    )
    const index = posts.findIndex(
      (post: PostProps) => post.id.toString() === postID
    )
    posts.splice(index, 1)
    res.status(200).json({ post: deletedPost, message: "Post deleted" })
  }
}
