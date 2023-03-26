import Head from 'next/head'
import HomeHero from "@components/HomeHero";

export default function RubyTales() {
    return (
        <>
            <Head>
                <title>Ruby Tales</title>
            </Head>
            <HomeHero displayImages={false}>
                <p className="text-left">My name is Lara Katz, and I am a member of Princeton&rsquo;s Class of 2024, majoring in Comparative
                    Literature. My academic interests include gender and sexuality in Ancient Greek poetry, surrealist
                    fiction, and the environmental humanities.</p>
                <br/>
                <p className="text-left">My contemporary fairy tale,&nbsp;Ruby Tales, focuses on reversing tropes and expectations around
                    gender in historical fairy tales. Clich&eacute;s of damsels in distress, undying heterosexual love
                    at first sight, and solo male heroes break down&mdash;and permit reformation&mdash;when the gendered
                    structures which govern them are sidelined. Twenty-first century societal treatments of gender are
                    not absent from&nbsp;Ruby Tales, but Aeon&rsquo;s necessarily fluid, innately degendered perspective
                    strips their point-of-view (POV) from the fundamental assumption that gender&nbsp;must exist and
                    define their whole identity&nbsp;as a conscious being.</p>
                <br/>
                <p className="text-left">Sexuality, relationships, first impressions, life paths, etc. are all defined, to varying degrees, by
                    gender. But because dragons do not have physical sex, and arguably also no gender, or their gender
                    is self-defined without any preconceived notions, their POVs are inherently fantastical. At least in
                    twenty-first century Western society, our POVs are unavoidably intertwined with gender.</p>
                <p className="text-left">Some fairy tales which inspired me include David Mitchell&rsquo;s&nbsp;Slade
                    House&nbsp;(character-driven, episodic long-form fairy tale), Kim Fu&rsquo;s &ldquo;In This
                    Fantasy&rdquo; (a kaleidoscopic method of narrowing in on a character), and Nnedi
                    Okorafor&rsquo;s&nbsp;Lagoon&nbsp;(a modern world in which human-adjacent creatures try to find
                    their ways). Beyond this project, I intend to continue writing and revising my fairy tale and search
                    for more literary influences.</p>
                <br/>
                <p className="text-left">Placing this uniquely perspectived character into the middle of a congested human society might have
                    communicated the above ideas most efficiently, but I felt that such an abrupt narrative and
                    character &ldquo;crowding&rdquo; at the beginning of the story might feel unnerving to our
                    post-/mid-pandemic society. Instead, I chose to delay this crush of society, which is posed as
                    furthering a higher purpose, until time&mdash;too much and too close&mdash;had been spent between a
                    small number of characters.&nbsp;</p>
                <br/>
                <p className="text-left">By pressing together in a small space Aeon and Morv, two characters who hardly know each other, while
                    also removing Aeon&rsquo;s mother figure, I intend to highlight the forces at work greater than
                    these characters themselves, as well as emphasize how &nbsp;the presence and absence of other people
                    can influence one&rsquo;s unique life experience. Perhaps it is not the government nor disease which
                    draws Aeon&rsquo;s mother away and pushes Aeon and Morv together. Rather,
                    the &ldquo;Dragonhood&rdquo; is an equally manipulative and morally ambiguous force which pays too
                    close attention to the characters and their day-to-day decisions, particularly regarding where they
                    go and with whom they interact, even when they are very isolated. When they choose to enter the
                    crush of society, Aeon and Morv must not only disobey the Dragonhood but also endanger their
                    lives&mdash;which they willingly do for the sake of their interpersonal relationships.&nbsp;</p>
                <br/>
                <p className="text-left">Lastly, as a background narrative, Aeon, like all kids, babies, &ldquo;quaranteens&rdquo; etc.,
                    during the pandemic, grows up. They must face puberty head-on as though it is an alien in itself,
                    and they also must do so without a parental figure&mdash;like many other children during the
                    pandemic&mdash;and without the presence of the like-bodied coevals from whom they are isolated.</p>
            </HomeHero>
        </>
    )
}
