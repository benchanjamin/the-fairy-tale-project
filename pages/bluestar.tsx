import Head from "next/head";
import HomeHero from "@components/HomeHero";

export default function Bluestar() {
    return (
        <>
            <Head>
                <title>Bluestar</title>
            </Head>
            <HomeHero displayImages={false} >

            </HomeHero>
        </>
    )
}
