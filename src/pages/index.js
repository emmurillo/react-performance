import TitleComponent from '@/components/titleComponent'
import BodyComponent from '@/components/bodyComponent'

import styles from '@/css/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="https://images.pexels.com/photos/16361792/pexels-photo-16361792/free-photo-of-seagull-on-beach.jpeg" width={1000} height={500} alt="" />
      <TitleComponent title='Title' />
      <BodyComponent />
    </main>
  )
}
