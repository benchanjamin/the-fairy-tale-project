import Head from 'next/head'
import HomeHero from "@components/HomeHero";
import {NavLink} from "@components/NavLink";

export default function TheWitchfinders() {
    return (
        <>
            <Head>
                <title>The Witchfinders</title>
            </Head>
            <HomeHero displayImages={false}>
                <p className="text-left">I&rsquo;m Theo L., an English major with certificates in Computer Science and Linguistics. When I was
                    a child, some of my favorite books were Madeleine L&rsquo;Engle&rsquo;s&nbsp;A Wrinkle in Time,
                    Norton Juster&rsquo;s&nbsp;The Phantom Tollbooth, Phillip Pullman&rsquo;s&nbsp;The Golden Compass,
                    and Terry Pratchett&rsquo;s&nbsp;Discworld&nbsp;series. I&apos;ve always loved the more strange and
                    fantastical elements of children&rsquo;s stories, and I was captivated by the worlds these authors
                    created: they drew imaginative connections, often mixing the ordinary right in with fantastical
                    elements, yielding results that are sometimes funny, sometimes surreal, and sometimes profoundly
                    touching.</p>
                <p><br/></p>
                <p className="text-left">In my research, I traced the history of the fairy tale genre back to George MacDonald, considered by
                    many the first fantasy writer. I never read his 1867 story &ldquo;The Golden Key&rdquo; as a child,
                    but when I did as an adult I felt like I was meeting an old friend. It has everything I most love
                    about the genre &mdash; he drew on fairy tale symbolism, Christian mysticism, and tales from various
                    mythologies to create a strange and wonderful universe all of his own, in which floating fish cook
                    themselves for dinner every night and come alive again every day, ageless beings in faraway caves
                    control the motions of the cosmos with balls of colored yarn, and two brave children gifted a key by
                    fairies travel between worlds on a rainbow bridge in search of the door it unlocks.</p>
                <p><br/></p>
                <p className="text-left">My story, &ldquo;The Witchfinders,&rdquo; was inspired by all of these influences. I wanted to create
                    a world equally enchanting and frightening, strange and familiar. I wanted it to have the shifting,
                    dreamlike qualities of a fairy tale, where anything is possible and a talking cat is taken in
                    stride. However, even in a fanciful world apart from reality, the emotional core of a story has to
                    ring true: MacDonald, L&rsquo;Engle, Juster, Pullman, and Pratchett all speak frankly about
                    difficult themes of fairness, injustice, loss, death, and growing up. I believe that even though
                    children may have limited life experience with which to predict or make sense of the world, they are
                    still emotionally complex individuals who appreciate these kinds of stories. I hope that &ldquo;The
                    Witchfinders&rdquo; is able to live up to its inspirations, with nuanced themes and accessible but
                    challenging vocabulary, wrapped up in an imaginary world that will delight and intrigue young
                    readers.</p>

                <div className="mx-auto mt-10 -mb-7">
                    <NavLink href="a-girl-and-a-cat"
                             className="text-lightBlack font-medium hover:text-gray-100 duration-75"
                             exact>
                        Chapter 1: A Girl and a Cat
                    </NavLink>
                    <br/>
                    <NavLink href="downstairs" className="text-lightBlack font-medium hover:text-gray-100 duration-75"
                             exact>
                        Chapter 2: Downstairs
                    </NavLink>
                    <br/>
                    <NavLink href="penthesilea" className="text-lightBlack font-medium hover:text-gray-100 duration-75"
                             exact>
                        Chapter 3: Penthesilea
                    </NavLink>
                    <br/>
                    <NavLink href="in-the-magic-kitchen" className="text-lightBlack font-medium hover:text-gray-100 duration-75"
                             exact>
                        Chapter 4: In the Magic Kitchen
                    </NavLink>
                    <br/>
                    <NavLink href="witchfinding" className="text-lightBlack font-medium hover:text-gray-100 duration-75"
                             exact>
                        Chapter 5: Witchfinding
                    </NavLink>

                </div>

            </HomeHero>
        </>
)
}
