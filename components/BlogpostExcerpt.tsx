import React from "react"
import { useRouter } from "next/router"

interface BlogpostExcerptProps {
  name: string
  id: number
  year: number
  excerpt: string
}

export default function BlogpostExcerpt(props: BlogpostExcerptProps) {
  const { name, id, year, excerpt } = props
  const router = useRouter()

  const handleClick = (id: number, year: number) => {
    router.push(`/blogposts/${year}/${id}`)
    // router.replace(`/blogposts/${year}/${id}`)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{excerpt}</p>
      <button onClick={() => handleClick(id, year)}>See Post</button>
    </div>
  )
}
