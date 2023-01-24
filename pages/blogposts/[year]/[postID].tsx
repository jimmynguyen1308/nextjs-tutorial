import React from "react"
import { GetStaticPropsContext } from "next"
import { useRouter } from "next/router"
import Menu from "@/components/Menu"
import BackButton from "@/components/BackButton"
import { PostProps } from ".."

interface PostIDProps {
  post: PostProps
}

export default function Post(props: PostIDProps) {
  const router = useRouter()
  const { post } = props
  const { year, postID } = router.query

  if (router.isFallback) {
    return <h1>Loading. Please wait...</h1>
  }

  return (
    <div>
      <h1>Post Title: {post.title}</h1>
      <p>ID: {postID}</p>
      <p>Year published: {year}</p>
      <Menu />
      <p>{post.body}</p>
      <BackButton />
    </div>
  )
}

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  // const data = await response.json()
  // const paths = data.map((post: PostProps) => {
  const response = await fetch("http://localhost:3000/api/posts")
  const data = await response.json()
  const paths = data.posts.map((post: PostProps) => {
    return {
      params: { postID: `${post.id}`, year: `2023` },
    }
  })

  return {
    paths,
    fallback: true,
    // Read more about fallback (true/false/blocking) at:
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-true
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-blocking
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params!.postID}`
  // )
  const response = await fetch(
    `http://localhost:3000/api/posts/${params!.postID}`
  )
  const data = await response.json()
  console.log(data)

  if (!data.post.id)
    return {
      notFound: true,
    }

  // return {
  //   props: {
  //     post: data,
  //   },
  // }
  return {
    props: data,
  }
}
