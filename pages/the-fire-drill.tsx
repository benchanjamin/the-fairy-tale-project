import Head from 'next/head'
import HomeHero from "@components/HomeHero";

export default function TheFireDrill() {
    return (
        <>
            <Head>
                <title>The Fire Drill</title>
            </Head>
            <HomeHero displayImages={false}/>
        </>
    )
}
