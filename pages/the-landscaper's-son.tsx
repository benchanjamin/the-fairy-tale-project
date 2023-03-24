import Head from "next/head";
import HomeHero from "@components/HomeHero";

export default function TheLandscaperSSon() {
    return (
        <>
            <Head>
                <title>The Landscaper&apos;s Son</title>
            </Head>
            <HomeHero displayImages={false} >

            </HomeHero>
        </>
    )
}
