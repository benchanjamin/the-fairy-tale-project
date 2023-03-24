import Head from "next/head";
import HomeHero from "@components/HomeHero";

export default function WhatCherrySaid() {
    return (
        <>
            <Head>
                <title>What Cherry Said</title>
            </Head>
            <HomeHero displayImages={false} >

            </HomeHero>
        </>
    )
}
