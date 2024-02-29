"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(({data}) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  const unusedJavascriptCodeBlock = () => {
    console.log('This code block is not used in the app')

    const unusedVariable1 = 'Unused Variable 1'
    const unusedVariable2 = 'Unused Variable 2'
    const unusedVariable3 = 'Unused Variable 3'
    const unusedVariable4 = 'Unused Variable 4'
    const unusedVariable5 = 'Unused Variable 5'
    const unusedVariable6 = 'Unused Variable 6'
    const unusedVariable7 = 'Unused Variable 7'
    const unusedVariable8 = 'Unused Variable 8'
    const unusedVariable9 = 'Unused Variable 9'
    const unusedVariable10 = 'Unused Variable 10'
    const unusedVariable11 = 'Unused Variable 11'
    const unusedVariable12 = 'Unused Variable 12'
    const unusedVariable13 = 'Unused Variable 13'
    const unusedVariable14 = 'Unused Variable 14'
    const unusedVariable15 = 'Unused Variable 15'
    const unusedVariable16 = 'Unused Variable 16'
    const unusedVariable17 = 'Unused Variable 17'
    const unusedVariable18 = 'Unused Variable 18'
    const unusedVariable19 = 'Unused Variable 19'
    const unusedVariable20 = 'Unused Variable 20'
  }


  return (
    <main className={styles.main}>

      <img src="/sample_image.jpg" width={1000} height={500} alt="" />

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <p>
        {data.map(({name}) => (<span> - {name}</span>))}
      </p>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
