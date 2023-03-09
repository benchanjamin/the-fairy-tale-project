import Head from 'next/head'
import Image from 'next/image'
import HomeHero from "@components/HomeHero";

export default function index() {
    return (
        <>
           <Head>
               <title>Fairy Tale Project Home</title>
           </Head>
            <HomeHero/>
        </>
    )
}
