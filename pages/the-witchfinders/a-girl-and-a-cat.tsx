import Head from "next/head";
import HomeHero from "@components/HomeHero";
import Image from "next/image"
import React from "react";
import TheWitchFindersTOC from "@components/TheWitchFindersTOC";
import Link from "next/link";

export default function AGirlAndACat() {
    return (
        <>
            <Head>
                <title>Chapter 1: A Girl and a Cat</title>
            </Head>
            <div className="w-full w-1/3 relative h-[50vh] mx-auto mt-10 group">
                <Image
                    layout={"fill"}
                    objectFit={"contain"}
                       alt=""
                       src="/cover-version1.png"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-gray-700
                     opacity-0 group-hover:opacity-100 bg-opacity-90">
                    <div className="flex justify-center w-full">
                        <div className="font-normal">
                            <p className="text-sm font-['cormorant-garamond']">Original image created by Theo L.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <HomeHero displayImages={false}>
                <h2 className="font-bold">CHAPTER 1: A Girl and a Cat</h2>
                <br/>
                <p className="text-left"> For as long as she had known, Obelie had lived in a vast looming gray stone
                    building, in a field walled in with a high iron fence, in a school. The main impression she had of
                    the place was that it was always dark. The classrooms were gloomy, lit only by dingy candlelight,
                    and the empty, echoing hallways were always wreathed in shadow. It was easy to lose track of what
                    time of day it was in that building, or even whether it was day or night &mdash; instead her routine
                    was dictated by a series of bells, which summoned her and the other students to wake up, to eat, to
                    go to their next class, and to go to bed.</p>
                <br/>
                <p className="text-left"> Some of the students had been there much longer than her &mdash; a few had
                    been
                    there a very long time indeed, growing pale and moldering like the mushrooms that sprang from
                    between the flagstones of its half-lit halls &mdash; and to them she was still an outsider. They
                    refused to sit with her during meals, and invented nicknames for her that made her eyes sting with
                    held-back tears. The headmaster, a lean towering man named Mr. Maypole, was cruel and indifferent.
                    Obelie wrote letters to her parents begging them to take her away, but they never responded. With
                    time she learned to keep quiet and blend into the background, and so managed to avoid the worst of
                    it.</p>
                <br/>
                <p className="text-left"> The one glimpse of light in the routines of this place, by which Obelie marked
                    the
                    passage of time, was the one hour when they were let outside to play in the yard. While the other
                    children threw a ball back and forth or talked in groups, she would go up to the fence that marked
                    the edge of the school and sit beneath it on the grass. There, if she was lucky, she would get a
                    visit from her friend.</p>
                <br/>
                <p className="text-left"> It was an ordinary, slightly shabby gray cat, that would slip through the
                    wrought-iron bars of the fence and gather itself elegantly at her feet. Sometimes they would simply
                    sit together in silence. Sometimes she would confide in it, telling it about her day in whispered
                    tones. Sometimes it would nudge its wedge-shaped head against her hand and she would pet down its
                    back, soaking up the sensation of the sun&rsquo;s warmth and the cat&rsquo;s low purring. All too
                    soon, the hour would be up and the bell would ring that summoned her back inside. She would say her
                    goodbye &ndash; it seemed appropriate to do, even if it couldn&rsquo;t respond &ndash; and it would
                    stare back at her with intelligent green eyes before disappearing into the grass.</p>
                <p className="text-left"><br/></p>
                <p className="text-left"> One night, Obelie woke with a cough and went to the office to see a nurse. She
                    was
                    given a spoonful of foul-tasting oil and told to sit and wait while the nurse left. She swallowed it
                    dutifully and took a seat in a stiff-backed chair, swinging her legs and watching the clock. It had
                    stopped working at 2:35 some afternoon long ago. After a long time in the silent, empty room, she
                    began to look around restlessly.There was a large roll-top desk against the wall &ndash; Mr.
                    Maypole&rsquo;s, lid half-open. She could see inside it dimly hundreds of tiny cubbyholes filled
                    with papers and strange knick-knacks.</p>
                <br/>
                <p className="text-left">As she looked, she noticed with growing recognition a parcel of small envelopes
                    made of pale blue
                    paper, stuffed away in a cubbyhole. She hopped down off the chair, opened the lid of the desk on its
                    sticky hinges, and drew out the bundle of envelopes. Suddenly sick, she stared down at her own
                    handwriting, the neat address repeated over and over &ndash; all of her letters home, all
                    unopened.</p>
                <br/>
                <p className="text-left">At that instant the door opened, and she spun around to see the figure of Mr.
                    Maypole leaning over
                    her.</p>
                <br/>
                <p className="text-left">&ldquo;What are you doing looking through my desk?&rdquo; he demanded.</p>
                <br/>
                <p className="text-left">Obelie began something about having a cough, and was cut off by him snatching
                    the bundle from her
                    hands. &ldquo;A sneak and a thief! We don&rsquo;t tolerate such badly behaved children here. Back to
                    your dormitory at once!&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;They&rsquo;re mine!&rdquo; she finally managed to
                    shout. &ldquo;They&rsquo;re my letters! What
                    are they doing in your drawer? Did my parents get to read them?&rdquo;</p>
                <br/>
                <p className="text-left"> Mr. Maypole bent his long crane neck down to her level. &ldquo;Your
                    letters?&rdquo; he leered. &ldquo;Goodness no, young lady. Why would we mail your letters? All the
                    children just complain &ndash; and it wouldn&rsquo;t do to make the parents worried over nothing.
                    Now get along back to bed.&rdquo;</p>
                <br/>
                <p className="text-left">Obelie lay still in her bed looking up at the ceiling, hot tears sliding down
                    her
                    face. They hadn&rsquo;t responded to her letters because they never got them. Every plea she had
                    sent had gone straight into Mr. Maypole&rsquo;s desk to be shut away, unread. They had probably
                    forgotten about her.</p>
                <br/>
                <p className="text-left">No one is going to help me,she thought. Her eyes had begun to feel sore and
                    her mouth was dry and sticky. She sniffed once, hard, and willed herself to stop crying.Well
                    then, I will have to help myself.</p>
                <br/>
                <p className="text-left">Quietly, so as not to wake the girls sleeping in the cots on either side,
                    Obelie
                    put on her best dress and her warmest sweater. She checked its pockets &ndash; the extra sandwich
                    she had taken from lunch was still there, wrapped in its napkin. Good.</p>
                <br/>
                <p className="text-left">It was simple enough to escape. She had envisioned many nights as she lay awake
                    in
                    bed how she would tiptoe to the window, slip off her sweater, lay it across the largest glass pane,
                    and rap once sharply so that the glass shards would fall with a muffled tinkling sound into the
                    waiting wool without cutting her hand. It worked exactly as she had imagined. Had it disturbed
                    anyone? She turned back one last time to scan the room: a student turned over in bed, another
                    coughed, but none woke. Satisfied, she hauled herself up onto the window ledge and jumped, landing
                    slightly crookedly in the bushes just below. Her ankle throbbed &ndash; she shook it and kept going.
                    The yard loomed out in front of her, cool damp grass brushing her legs. The imposing iron gate that
                    was the only entrance to the school rose before her across the lawn, and she started toward it. Just
                    a little further, just a little further, and-</p>
                <br/>
                <p className="text-left">It was locked. Obelie rattled the gates as loudly as she dared, but they would
                    not give
                    way. The fence around them was firmly built too, and intimidatingly high. She knew she could not
                    climb it; she made a half-hearted attempt anyway, but the metal bars were cold and slick and there
                    was nowhere for her hands to find purchase. Despair heavy in the pit of her stomach, she sat down in
                    the wet grass in front of the gate and stared numbly through the bars into the woods beyond. There
                    was nowhere to go &ndash; a dead end.</p>
                <TheWitchFindersTOC/>
            </HomeHero>
        </>
    )
}
