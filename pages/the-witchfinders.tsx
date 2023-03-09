import Head from 'next/head'
import HomeHero from "@components/HomeHero";

export default function TheWitchfinders() {
    return (
        <>
            <Head>
                <title>The Witchfinders</title>
            </Head>
            <HomeHero displayImages={false}/>
        </>
    )
}
