import React from "react"
import Link from "next/link"

export default function Menu() {
  return (
    <nav>
      <p>Menu:</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/blogposts">Blog Posts</Link>
        </li>
      </ul>
    </nav>
  )
}
