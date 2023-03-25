import Head from 'next/head'
import HomeHero from "@components/HomeHero";

export default function TheFireDrill() {
    return (
        <>
            <Head>
                <title>The Fire Drill</title>
            </Head>
            <HomeHero displayImages={false}>
                <p className="text-left">My name is Sierra, and I&rsquo;m an English Major in the Class of &rsquo;24,
                    pursuing certificates in Creative Writing and African American Studies. In my studies at Princeton,
                    my interests lie primarily in Black genre fiction, or stories that center or interpret Blackness
                    through supernatural, fantastical, or surreal means. &nbsp;</p>
                <br/>
                <p className="text-left">My mini screenplay, entitled &ldquo;Arcadia,&rdquo; is a modern retelling of the
                    Greek myth of Atalanta that substitutes the godly magic of the original story for modern witchcraft.
                    In &ldquo;Arcadia,&rdquo; set in the suburban Californian town of the same name, star debater Melvin
                    falls for Addy, a local track and field star, who agrees to go out with him if he can beat her in a
                    footrace. In the original story of Atalanta, set in the Greek kingdom of Arcadia, Melanion
                    ultimately bests the famed racer Atalanta by distracting her with a set of shiny golden apples,
                    gifted to him by the goddesses of Mount Olympus. In my retelling, Melvin is assisted by Delia,
                    Addy&rsquo;s track rival and an amateur witch, who exploits Addy&rsquo;s fear of insects to secure
                    Melvin&rsquo;s victory. In another Greek myth featuring Atalanta, she and a group of male heroes
                    attempt to take on the vicious Calydonian boar. However, Meleager, prince of Calydon, has a secret
                    of his own &mdash; his lifeline is tied to a piece of firewood. When the wood burns completely,
                    Meleager will die. In &ldquo;Arcadia,&rdquo; I combine these myths, and Melvin embodies both
                    Melanion and Meleager.</p>
                <br/>
                <p className="text-left">In creating this project, I was inspired by movies like&nbsp;A Cinderella
                    Story&nbsp;starring Hillary Duff,&nbsp;She&rsquo;s the Man&nbsp;with Amanda Bynes, and other movies
                    from the early to mid-2000s that attempt to reconcile centuries-old fairytales and classics with
                    contemporary circumstances and characters. When I was little, I was captivated by Greek mythology
                    and the idea of magic as central to once-widespread religious frameworks. Perhaps because these
                    stories were more central to my childhood than classical fairy tales, I found myself wishing not to
                    live among princes or mermaids, but instead to relive the adventures of the Greek heroes.&nbsp;</p>
                <br/>
                <p className="text-left">Despite being a myth, the story of Atalanta is alive with fairy tale potential. In&nbsp;A Cinderella
                    Story,&nbsp;the drought in Los Angeles&rsquo;s San Fernando Valley is used as an allegory for the
                    central romance &mdash; when the two finally kiss, a downpour of rain comes down, marking the end of
                    uncertainty and despair. I was also inspired by classical fairy tales like &ldquo;The Necklace of
                    Princess Fiorimonde,&rdquo; &ldquo;Cinderella,&rdquo; and &ldquo;Hansel and Gretel,&rdquo; which use
                    the idea of witches or inexplicably magical beings to rapidly reverse the fates and stakes of their
                    characters. I&rsquo;m particularly interested in the idea of modern magic and spirituality, and how
                    a movement of internet spiritualism and witchcraft championed by young women through social media
                    may be reviving our collective belief in the supernatural. Rather than treating this movement with
                    cynicism, I wanted to imagine a world in which girls use magic for their own empowerment, although
                    not always for the right reasons.&nbsp;</p>
                <br/>
                <p className="text-left">In my mind, a contemporary fairy tale considers the place that magic, symbols,
                    and &ldquo;happily ever afters&rdquo; have in our modern world &mdash; if witches existed, would
                    they exercise their powers indiscriminately, or would they use them to get ahead in their pursuit of
                    high school glory, romance, or success on a much larger scale? Though race is not the central focus
                    of &ldquo;Arcadia,&rdquo; my decision to endow Delia with powers while saddling Melvin and Addy, the
                    story&rsquo;s black protagonists, with supernatural weaknesses, was intentional. What constitutes
                    a &ldquo;happily ever after&rdquo; when happiness derived from marriage or the nuclear family unit
                    is no longer the final destination for so many people? The moralistic fairy tale has always rung
                    somewhat false to me, preaching that patience, kindness, and other virtues breed fortune over time.
                    In reality, certain people will be rewarded while others will suffer, and a contemporary fairy tale
                    does not turn a blind eye to this reality. Rather, using classical devices, it speculates a more
                    perfect world, or in the case of my story, attempts to externalize, on a personal scale, invisible
                    institutions that stand in the way of fairy tale endings.&nbsp;</p>
            </HomeHero>
        </>
    )
}
