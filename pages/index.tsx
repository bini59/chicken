import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Chicken from '../components/chickenCard'
import styles from '../styles/index.module.sass'

const data = {
  chickens : ["뿌링클", "맛초킹"]
}

const Home: NextPage = () => {

  const [rank, setRank] = useState<JSX.Element[]>([])

  useEffect(() => {
    let temp:JSX.Element[] = []
    data.chickens.map((e, i) => {
      temp.push(
        <Chicken key={e} title={e} />
      )
    })
    setRank(temp)
  }, [])

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>치킨랭킹.com</h2>
      <section className={styles.rank_sec}>
        {rank}
      </section>
    </div>
  )
}

export default Home
