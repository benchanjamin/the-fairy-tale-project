import React from 'react';
import Image from "next/image";


const imageKitLoader = ({ src, width, quality }) => {
    if(src[0] === "/") src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    let urlEndpoint = "https://ik.imagekit.io/mezdticvf";
    if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`
}

function HomeHero(props) {
    return (
        <section id="hero">
            <div className="container mx-auto relative">
                {/* Content Words */}
                <div
                    className="flex justify-center pt-[3rem] pb-[3rem] items-top mx-auto w-[80%] 3xl:w-[80%] md:pt-[7rem]">
                    <h1 className="text-lightBlack text-center text-[13px] md:text-[22px] 3xl:text-[50px] font-sans
                     tracking-[.04rem]">
                        <p>
                            Fairy tales and oral folk tales have been a mainstay of the children’s literature genre for many centuries. Specifically, across Western European traditions, the fairy tale genre became popular through the works of authors such as Madame d’Aulnoy and the Brothers Grimm. As cultures shift, the fairy tale is often adapted, including into other mediums.
                        </p>
                        <br/>
                        <p>
                            The Contemporary Fairy Tale Project aims to explore the contemporary fairy tale in a post-pandemic, 21st century moment. Through extensive research on fairy tales and folk tales in different historical and cultural contexts, undergraduate students Lara Katz, Charlotte Leane, Allison Peart, and Sierra Stern engaged critically with the fairy tale genre under the guidance of Kate Clairmont, Ph.D. Candidate in the Department of English. After researching, each student developed a creative writing project as a direct response both to the works they read and to collaborative group discussions.
                        </p>
                        <br/>
                        <p>
                            Using this creative mode enabled this group of students to think through the fairy tale differently, ultimately resulting in a re-conceptualization of a literary genre with several original works that each uniquely interpret the contemporary fairy tale. The goal of The Contemporary Fairy Tale Project is to provide holistically diverse stories reflective of and particularly suited to our times.
                        </p>
                        <br/>
                        <p>
                            This project was generously funded by a 2022 Humanities Council Flash Grant and supported by the David A. Gardner ’69 Magic Grant.
                        </p>
                        <br/>
                        <p>
                            Special thanks to Kathleen Crown and Ruby Marie Marsh at the Humanities Council and to Sarah Thody in the Department of English. All website design was implemented by Ben Chan, Major in Computer Science.

                        </p>
                    </h1>
                </div>
            </div>
            {/* Content Images */}
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 35%"} alt="Richard Doyle Illustration"
                           loader={imageKitLoader}
                           src="image1.jpg"
                    />
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">Illustration by Richard Doyle for John Ruskin’s The King of the
                                    Golden River (from the first edition, published by Smith, Elder & Co. in 1851)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-full md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 20%"} alt="Charles Ricketts & Charles Shannon Illustration"
                           loader={imageKitLoader}
                           src="image2.jpg"/>
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">Illustration by Charles Ricketts & Charles Shannon for Oscar
                                    Wilde’s A House of Pomegranates (from the first edition, published by James R.
                                    Osgoode McIlvaine, 1891)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden w-full md:block md:w-1/3 relative h-[55vh] group">
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"50% 0%"} alt="Walter Crane Illustration"
                           loader={imageKitLoader}
                           src="image3.jpg"/>
                    <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                        <div className="flex justify-center w-full">
                            <div className="font-normal">
                                <p className="text-sm">Illustration by Walter Crane for Mary de Morgan’s The Necklace of
                                    Princess Fiorimonde and Other Stories (from the first edition, published by
                                    Macmillan & Co. in 1880)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
