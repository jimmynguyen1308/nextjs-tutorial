import type { NextApiRequest, NextApiResponse } from "next"
import { PostProps } from "@/pages/blogposts"
import { posts } from "../../posts.json"

type Data = {
  posts: Array<PostProps> | undefined
  message?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userID } = req.query
  const userPosts = posts.filter(
    (post: PostProps) => post.userId.toString() === userID
  )
  if (userPosts) res.status(200).json({ posts: userPosts })
  else res.status(404).json({ posts: userPosts, message: "No user found" })
}
