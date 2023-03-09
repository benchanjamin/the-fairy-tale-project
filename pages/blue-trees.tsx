import Head from 'next/head'
import HomeHero from "@components/HomeHero";

export default function BlueTrees() {
    return (
        <>
            <Head>
                <title>Blue Trees</title>
            </Head>
            <HomeHero displayImages={false}/>
        </>
    )
}
