import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/header'
import styles from '../styles/Home.module.css'
import Card from '../src/components/card'
import Main from '../src/components/main'
import { queryProductsMainPage } from '../src/services/PageServices'


export default function Home({list}) {
  
  console.log(list)
 
  return (
    <>
      <Head>
        <title>@Dye Vibe</title>
        <meta name="description" content="Loja de Roupas Customizadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}> 
      <Header image={"aqui"} />
      <section>
      <Main />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      </section>
      </div>
    </>
    )
}

Home.getInitialProps = async () => {
  const res = await queryProductsMainPage()
  return {
    list: res
  }
}


