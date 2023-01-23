import Head from "next/head"
import Menu from "@/components/Menu"
import styles from "@/styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}> */}
      <main className={styles.main}>
        <h1>Home Page</h1>
        <Menu />
      </main>
    </>
  )
}
