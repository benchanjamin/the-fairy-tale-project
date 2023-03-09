import React from 'react';
import ImageHomeHero from "@components/ImageHomeHero/ImageHomeHero";
import TextHomeHero from "@components/TextHomeHero";


function HomeHero({displayImages}) {
    return (
        <section id="hero">
            <TextHomeHero/>
            {displayImages && <ImageHomeHero/>}
        </section>
    );
}

export default HomeHero;
