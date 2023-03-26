import HomeHero from "@components/HomeHero";
import Head from "next/head";
import Image from "next/image";
import React from "react";


export default function InTheMagicKitchen() {
    return (
        <>
            <Head>
                <title>Chapter 4: In the Magic Kitchen</title>
            </Head>
            <div className="w-full md:w-1/3 relative h-[60vh] mx-auto mt-10" style={{borderRadius: '40%', overflow: 'hidden'}}>
                <Image
                    layout={"fill"}
                    objectFit={"contain"}
                    alt=""
                    src="/static/miles with mop.JPG"
                />
            </div>
            <HomeHero displayImages={false}>
                <h2 className="font-bold">CHAPTER 4: In the Magic Kitchen</h2>
                <br/>


                <p className="text-left"> The next morning they came downstairs to the kitchen and encountered a lank,
                    nervous young man with glasses filling a tray of cream puffs.</p>
                <br/>
                <p className="text-left"> &ldquo;This is Miles, my assistant,&rdquo; Pen explained. &ldquo;He comes in in
                    the mornings and helps around the bakery. These are Obelie and Kester &mdash; they&rsquo;re going to
                    be staying with us.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;Nice to meet you,&rdquo; Obelie said, and &ldquo;How do you
                    do,&rdquo; Kester echoed when they had been introduced, both as polite as can be. Miles shot several
                    feet into the air with a yelp, dropping the cream puffs.</p>
                <br/>

                <p className="text-left"> When he came down again, he was staring at Kester with wide eyes.</p>
                <br/>

                <p className="text-left"> &ldquo;Your cat&mdash; your cattalks?&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;You work at a magic bakery,&rdquo; Obelie replied reasonably.</p>
                <br/>

                <p className="text-left"> &ldquo;And it&rsquo;s rude to stare,&rdquo; added Kester, preening. He was always
                    punctilious about these sorts of things. Miles ran his fingers through his hair several times so
                    that it stood up, and said &ldquo;Well I never&hellip;,&rdquo; and that seemed to settle that.</p>
                <br/>

                <p className="text-left"> The days passed quickly. The four of them would wake up early, Pen and Miles would
                    start up the oven fires, and Obelie and Kester would watch as they made their enchanted pastry. At a
                    quarter to nine, when the whole store was filled with the smell of baking, she would run to the door
                    and flip the sign to OPEN, and then the customers would stream in and the day would begin. Obelie
                    soon found that the school and the letters and Mr. Maypole seemed nothing more than a bad dream. She
                    could not remember when she had been this happy.</p>
                <br/>

                <p className="text-left"> Most of the magic was stored in the jams. She watched Pen boil down the fruit in a
                    large heavy pot, stirring in sugar and strange powders and herbs from the back garden. She would hum
                    over it, and sometimes explain what she was doing, so that Obelie began to learn what each
                    did &mdash; rose-hips for love, rosemary for cleverness, sage for wisdom, thyme for courage. It
                    would simmer on the stove all day, thickening and absorbing the powers of the herbs. When it was
                    done, it was stored in neat glass jars, sealed airtight. Obelie helped to label them and wipe the
                    sticky trails off the sides. The jam then went into the pastries to give them their various effects.
                    The strawberry jam could be smeared onto tarts; the raspberry could be sandwiched between layers of
                    a cake; the orange marmalade decorated tiny marzipans and filled sandwich cookies.</p>
                <br/>

                <p className="text-left"> Obelie soon came to recognize the customers from the town, and they became fond of
                    her. There was old Mr. Ayres who got the green marzipans for his arthritis, and Mrs. Ayres who came
                    in occasionally to pick them up for him when he was away. Miss Harris the schoolteacher was always
                    friendly, and sometimes when she got a dozen cupcakes for her class she even gave Obelie one of
                    them. Henry the blacksmith&rsquo;s apprentice would always generate chatter when he came into the
                    shop &mdash; he was considered the most handsome young man in Walton-on-Tye, and (although Obelie
                    personally couldn&rsquo;t understand the fuss) the young women would fix their hair and blush and
                    whisper to each other when he came in to pick up lemon tarts for his mother, and Miles would dive
                    behind the counter.</p>
                <br/>

                <p className="text-left"> One morning as Obelie was laying out the marzipans in rows to put into the display
                    case, she noticed that some were missing. They were supposed to have twenty-one, three rows of
                    seven, but the last row came up four short. Puzzled, she went back into the kitchen to check in case
                    some had been left behind. There were no more &mdash; she had all of them.</p>
                <br/>

                <p className="text-left"> &ldquo;Kester, have you been eating the marzipans?&rdquo;</p>
                <br/>

                <p className="text-left"> He bunched up his whiskers. &ldquo;I would never eat those things,&rdquo; he
                    declared, looking slightly insulted. &ldquo;Almond is bad for a cat&rsquo;s digestion.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;Then where could they have gone?&rdquo;</p>
                <br/>

                <p className="text-left"> The next day, there were three more missing, and four more the day after that. It
                    seemed Pen had not yet noticed, but Obelie was growing increasingly suspicious. That night, she took
                    her quilt and pillow down into the kitchen and slept on the floor beside the ovens. She was
                    determined to find out who had been taking the marzipans.</p>
                <br/>

                <p className="text-left"> Early in the morning, before the sun was up, she was woken by a quiet, sneaky
                    shuffling. The day&rsquo;s work didn&rsquo;t begin until six, she thought to herself &mdash; there
                    was no reason for anyone to be in the kitchen. There was a figure, she saw, in the dark, leaning
                    over the cooling tray. She sprang from her bed and grabbed the thief &mdash; and found herself face
                    to face with a very flustered Miles.</p>
                <br/>

                <p className="text-left"> &ldquo;Wouch! You&rsquo;re pulling my hair,&rdquo; he cried. She released him, and
                    four little marzipans, done up in blue and red bows, fell out onto the table.</p>
                <br/>

                <p className="text-left"> &ldquo;You&rsquo;ve been stealing from Pen!&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;I know, I know!&rdquo; He wrung his hands. &ldquo;I&rsquo;m sorry,
                    I&rsquo;ll do anything, only&hellip; please don&rsquo;t tell her?&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;Why would you take from her?&rdquo; she demanded. &ldquo;You can bake as
                    well as she can &mdash; you could make all the desserts you wanted for yourself!&rdquo;</p>
                <br/>

                <p className="text-left"> He adjusted his glasses sheepishly. &ldquo;Yes, but I&rsquo;m not a witch. The
                    ones I make on my own just come out regular old marzipans. I can&rsquo;t do magic.&rdquo;</p>
                <br/>

                <p className="text-left"> She sat down at the table, settling Kester into her lap. Both gazed across at him
                    solemnly. &ldquo;I think you&rsquo;d better explain.&rdquo;</p>
                <br/>

                <p className="text-left"> He sighed and drew up the other chair.</p>
                <br/>

                <p className="text-left"> &ldquo;I don&rsquo;t think you&rsquo;d understand &mdash; how old are
                    you?&rdquo;</p>
                <br/>

                <p className="text-left"> Obelie shot him a hard look. &ldquo;I&rsquo;m ten. I understand more than
                    you&rsquo;d think.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;Well. It&rsquo;s Henry.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;You like him.&rdquo;</p>
                <br/>

                <p className="text-left"> He blushed. &ldquo;Yes. He&rsquo;s&hellip; very clever. And handsome. And
                    I&rsquo;m- well look at me!&rdquo; he gestured with a gangly arm. &ldquo;Everyone in all of
                    Walton-on-Tye admires him. He could have his pick &mdash; why would he ever choose me?&rdquo;</p>
                <br/>

                <p className="text-left"> The red and blue marzipans lay on the table between them. Rosehips for love, she
                    remembered, and thyme for courage.</p>
                <br/>

                <p className="text-left"> &ldquo;So you&rsquo;ve been using Pen&rsquo;s magic?&rdquo;</p>
                <br/>

                <p className="text-left"> He put his head in his hands. &ldquo;It&rsquo;s the only way I can get up the
                    nerve to talk to him! Otherwise I get so muddled up around him I can barely put two words in the
                    right order.&rdquo;</p>
                <br/>

                <p className="text-left"> Obelie thought about this for a moment. She had been prepared to be harsh with the
                    marzipan thief, but seeing Miles like this, he was so ordinary and pathetic that she felt quite
                    sorry for him. &ldquo;You&rsquo;re not so bad &mdash; when you comb your hair properly,&rdquo; she
                    replied, more gently. &ldquo;And you can be very funny when you&rsquo;re joking with Miss Harris or
                    old Mr. Ayres. But you realize, sneaking around like this you&rsquo;ve made yourself look very
                    silly.&rdquo;</p>
                <br/>

                <p className="text-left"> He sighed. &ldquo;I have, haven&rsquo;t I?&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;Pen will be upset if she finds out you&rsquo;re repaying her kindness like
                    this.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;But you won&rsquo;t tell her?&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;If you promise never to do it again&hellip; no.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;Thank you &mdash; I swear it!&rdquo; He leapt up, shaking her hand. The
                    clock chimed six. They heard Pen coming down the stairs, and he hurried off to start the ovens for
                    the day.</p>
                <br/>

                <p className="text-left"> Obelie and Kester shared a look. Love, it seemed to her, makes adults behave quite
                    ridiculously.</p>
                <br/>

                <p className="text-left"> &ldquo;I&rsquo;m going out,&rdquo; Pen announced. &ldquo;I have to make
                    a &mdash; help me with my coat dear? &mdash; a house call. You and Miles can keep the ovens going,
                    and I&rsquo;ve left instructions with him for the dough starters. I should be back by tomorrow
                    evening.&rdquo;</p>
                <br/>

                <p className="text-left"> She bundled into her too-large coat, the blue felt hat with the artificial daisies
                    crammed down over her hair in an unusual hurry. She made a solemn figure as she disappeared down the
                    street into the twilight, and for the first time in a long time Obelie began to worry.</p>
                <br/>

                <p className="text-left"> That worry grew when, in two days&rsquo; time, she did not return. Obelie and
                    Miles kept the bakery running as usual, but every customer who came in asked where Pen had gone and
                    when she would be back. As a third and then a fourth day passed, they had to admit that they did not
                    know.</p>
                <br/>

                <p className="text-left"> On the fifth day, Obelie made up her mind.</p>
                <br/>

                <p className="text-left"> &ldquo;I have to go looking for her,&rdquo; she announced that morning, coming
                    down the stairs to the kitchen.</p>
                <br/>

                <p className="text-left"> Miles looked up with alarm. &ldquo;Pen? She&rsquo;s a witch &mdash; she can look
                    after herself. She probably just got delayed.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;What if she doesn&rsquo;t come back?&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;She said she&rsquo;d be back,&rdquo; he reminded, a note of doubt creeping
                    into his voice. &ldquo;She promised.&rdquo;</p>
                <br/>

                <p className="text-left"> &ldquo;She should have been back three days ago.&rdquo; A sudden feeling of cold
                    passed over her, even next to the blazing ovens, and she shivered. Kester nosed up against her
                    leg. &ldquo;Something&rsquo;s happened.&rdquo;</p>
                <br/>

                <p className="text-left"> Miles took a deep breath and nodded. &ldquo;Alright. I&rsquo;ll come with
                    you.&rdquo;</p>
                <br/>

                <p className="text-left">  And so, after shutting up the bakery for the evening, Obelie wrote out a
                    sign: &ldquo;Pen&rsquo;s Pastries: closed until we find Pen&rdquo; (Miles checked her spelling) and
                    posted it in the window. They packed a large carpet bag full of sandwiches, and a thermos of
                    lemonade. Then they set out.</p>
            </HomeHero>
        </>
)
}
