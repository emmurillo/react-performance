import Image from 'next/image'
import styles from '@/css/page.module.css'
import image from '@/images/optimized_image.webp'
import TitleComponent from '@/components/titleComponent'
import BodyComponent from '@/components/bodyComponent'

import styles from '@/css/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <Image src={image} alt="" width={1000} height={500} priority />
      <TitleComponent title='Title' />
      <BodyComponent />
    </main>
  )
}
