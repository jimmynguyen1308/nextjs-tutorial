import React from "react"
// import { GetServerSidePropsContext } from "next"
import Menu from "@/components/Menu"
import BlogpostExcerpt from "@/components/BlogpostExcerpt"

export interface PostProps {
  userId: number
  id: number
  title: string
  body: string
}

interface BlogpostIntroProps {
  posts: Array<PostProps>
}

export default function BlogpostIntro(props: BlogpostIntroProps) {
  const { posts } = props
  return (
    <div>
      <h1>Blogposts Intro</h1>
      <Menu />
      <br />
      <p>Highlighted Posts (Total: 100):</p>
      {posts &&
        posts.map((post: PostProps) => (
          <BlogpostExcerpt
            key={post.id}
            name={post.title}
            id={post.id}
            year={2023}
            excerpt={post.body.slice(0, 50) + "..."}
          />
        ))}
    </div>
  )
}

// Read more about how and when to use getStaticProps vs. getServerSideProps:
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

export async function getStaticProps() {
  // Retrieve the first 6 records from the API using fetch()
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const response = await fetch("http://localhost:3000/api/posts")
  const data = await response.json()
  return {
    // props: {
    //   posts: data.slice(0, 10),
    // },
    props: {
      posts: data.posts.slice(0, 10),
    },
  }
}

/* // Get Server Side Props 
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params, req, res, query } = context
  console.log(query)
  console.log(req.headers.cookie)
  res.setHeader("Set-Cookie", ["name=Posts"])
  // const { user } = params
  const response = await fetch(`http://localhost:3000/api/posts`)
  const data = await response.json()

  return {
    props: data,
  }
}
*/
