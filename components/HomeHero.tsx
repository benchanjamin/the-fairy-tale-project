import React from 'react';
import ImageHomeHero from "@components/ImageHomeHero/ImageHomeHero";
import TextHomeHero from "@components/TextHomeHero";


function HomeHero({displayImages, children}) {
    return (
        <section id="hero">
            <TextHomeHero>
                {children}
            </TextHomeHero>
            {displayImages && <ImageHomeHero/>}
        </section>
    );
}

export default HomeHero;
