import Head from 'next/head'
import HomeHero from "@components/HomeHero";

export default function DragonDays() {
    return (
        <>
            <Head>
                <title>Dragon Days</title>
            </Head>
            <HomeHero displayImages={false}>
            </HomeHero>
        </>
    )
}
