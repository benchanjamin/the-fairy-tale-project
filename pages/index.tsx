import Head from 'next/head'
import HomeHero from "@components/HomeHero";

export default function Index() {
    return (
        <>
           <Head>
               <title>Fairy Tale Project Home</title>
           </Head>
            <HomeHero displayImages={true}/>
        </>
    )
}
