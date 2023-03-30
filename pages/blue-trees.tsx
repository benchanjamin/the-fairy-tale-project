import Head from 'next/head'
import HomeHero from "@components/HomeHero";
import React from "react";
import {NavLink} from "@components/NavLink";
import BlueTreesTOC from "@components/BlueTreesTOC";

export default function BlueTrees() {
    return (
        <>
            <Head>
                <title>Blue Trees</title>
            </Head>
            <HomeHero displayImages={false}>

                <p className="text-left">My name is Allison Peart, and I&rsquo;m a class of 2024 anthropology major. My
                    collection of
                    stories,&nbsp;<span className="italic">Blue Trees</span>,&nbsp;was inspired by my research on fairy
                    tales from a variety of cultures
                    and regions. Beginning this project, I wanted to expose myself to fairy tales and folk tales that
                    had developed in contexts unfamiliar to me. Two of my main goals in doing so were to cultivate a
                    better idea of general themes in fairy tales and, hopefully, help my writing wriggle past the
                    boundaries of my own preconceptions. With these goals in mind, I read tales from the Pawnee Nation
                    of North America, Germany, Japan, Nigeria, Brazil, Serbia, the Maori&nbsp;of New Zealand, Egypt,
                    Celtic nations, the Arabian Peninsula, and Korea. Some of my favorite stories I researched
                    included &ldquo;The Bamboo Cutter and the Moon Child&rdquo; from 10th century Japan; &ldquo;The
                    Adventures of a Fisherman&rsquo;s Son,&rdquo; a Brazilian folktale; &ldquo;How the Moon was
                    Made,&rdquo; a Maori folktale; and &ldquo;A Bridegroom for Miss Mole,&rdquo; a Korean
                    folktale.&nbsp;</p>
                <p><br/></p>
                <p className="text-left">Furthermore, I must always give enduring praise and everlasting credit to Peter
                    S. Beagle, author
                    of&nbsp;<span className="italic">The Last Unicorn</span>,&nbsp;a novel that shaped the writer I am today, and which I consider to be
                    a prime example of a modern fairy tale. Finally, I send love to God, my father, mother, sisters, and
                    Contemporary Fairy Tale colleagues for always seeding and fostering the work of
                    creativity.&nbsp;</p>
                <p><br/></p>
                <p className="text-left">In writing my contemporary fairy tales, I initially began with an interest in
                    themes of gender,
                    romance, and heteronormativity, and wanted to write stories about emotional intelligence and the
                    power of friendship. Mainly, I hoped to write fairy tales promoting positive values for young boys,
                    since I found many of the messages about masculinity in my research unsuitable for the present day.
                    However, now that&nbsp;<span className="text-left">Blue Trees</span>&nbsp;is completed, I believe that the most direct transference
                    between my research and the final product has related more to broad discoveries about what the fairy
                    tale can do: how unexplained fantastical elements, symbols and ambiguity, modes of teaching, and
                    common constructs give it power.</p>
                <br/>
                <p className="text-left">Blue Trees has been a way for me to explore psychological complexity in the
                    fairy tale, since
                    traditionally that type of inner development is absent in the fairy tale. In Blue Trees, you may
                    find themes of self-love, self-discovery, isolation, devotion, kindness, and family. What I hope you
                    will find, however&mdash;and what I believe a contemporary fairy tale should offer&mdash;is a chance
                    to discover yourself.&nbsp;</p>
                <BlueTreesTOC/>
            </HomeHero>
        </>
    )
}
