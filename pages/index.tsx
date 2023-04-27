import Head from 'next/head'
import HomeHero from "@components/HomeHero";
import React from "react";

export default function Index() {
    return (
        <>
            <Head>
                <title>Fairy Tale Project Home</title>
            </Head>
            <HomeHero displayImages={true}>
                <h2 className="font-bold text-[24px] mt-2">About The Contemporary Fairy Tale Project</h2>
                <br/>
                <p className="text-left">
                    Fairy tales and oral folk tales have been a mainstay of the children’s literature genre
                    for many centuries. Specifically, across Western European traditions, the fairy tale
                    genre became popular through the works of authors such as Madame d’Aulnoy and the
                    Brothers Grimm. As cultures shift, the fairy tale is often adapted, including into other
                    mediums.
                </p>
                <br/>
                <p className="text-left">
                    The Contemporary Fairy Tale Project aims to explore the contemporary fairy tale in a
                    post-pandemic, 21st century moment. Through extensive research on fairy tales and folk
                    tales in different historical and cultural contexts, Princeton University undergraduate students Lara Katz,
                    Theo L., Allison Peart, and Sierra Stern engaged critically with the fairy tale
                    genre under the guidance of Kate Clairmont, Ph.D. Candidate in the Department of
                    English at Princeton.
                    After researching, each student developed a creative writing project as a
                    direct response both to the works they read and to collaborative group discussions.
                </p>
                <br/>
                <p className="text-left">
                    Using this creative mode enabled this group of students to think through the fairy tale
                    differently, ultimately resulting in a re-conceptualization of a literary genre with
                    several original works that each uniquely interpret the contemporary fairy tale. The
                    goal of The Contemporary Fairy Tale Project is to provide holistically diverse stories
                    reflective of and particularly suited to our times.
                </p>
                <br/>
                <p className="text-left">
                    This project was generously funded by a 2022 Humanities Council Flash Grant.
                </p>
                <br/>
                <p className="text-left">
                    Special thanks to Kathleen Crown and Ruby Marie Marsh at the Princeton University Humanities Council and to
                    Sarah Thody in Princeton&apos;s Department of English. All website design was implemented by Ben
                    Chan, Major in Computer Science at Princeton.

                </p>

            </HomeHero>
        </>
    )
}
