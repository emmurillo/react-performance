"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(({ data }) => {
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
    <main>
      <img src="/sample_image.jpg" width={1000} height={500} alt="" />
      <p>
        {data.map(({ name }) => (<span> - {name}</span>))}
      </p>
    </main>
  )
}
