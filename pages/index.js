import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant in Taipei</title>
                <meta name='description' content='Best pizza in taipei' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Featured />
            <PizzaList />
        </div>
    )
}
