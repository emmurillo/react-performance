"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

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

  return (
    <main>
      <Image src="/sample_image.webp" width={1000} height={500} alt="" priority loading='eager' />
      <p>
        {data.map(({name}) => (<span> - {name}</span>))}
      </p>
    </main>
  )
}
