import Head from "next/head";
import HomeHero from "@components/HomeHero";

export default function TheEnchantress() {
    return (
        <>
            <Head>
                <title>The Enchantress</title>
            </Head>
            <HomeHero displayImages={false} >

            </HomeHero>
        </>
    )
}
