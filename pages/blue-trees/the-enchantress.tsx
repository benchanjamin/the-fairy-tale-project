import Head from "next/head";
import HomeHero from "@components/HomeHero";
import {NavLink} from "@components/NavLink";
import React from "react";
import BlueTreesTOC from "@components/BlueTreesTOC";

export default function TheEnchantress() {
    return (
        <>
            <Head>
                <title>The Enchantress</title>
            </Head>
            <HomeHero displayImages={false}>
                <h3 className="font-bold text-2xl">The Enchantress</h3>
                <br/>

                <p className="text-left">There once was a middle school student who was extremely stressed about her semester exams. She
                    hated to admit it, but she hadn&rsquo;t studied nearly as hard as she should have, and was
                    relatively sure she&rsquo;d failed at&nbsp;least&nbsp;half of them. Her mom was going to be furious.
                    The student pedaled harder, trying her best to think about something else. At this point, it was all
                    she could do.&nbsp;</p>
                <br/>
                <p className="text-left">She was riding home after taking her last exam, hoping she would beat the rain promised by the thick
                    wall of approaching darkness rolling over the horizon, when a distant figure appeared in the asphalt
                    path of her bike. From behind, the figure seemed to be sitting in a chair, near an oak&rsquo;s
                    thrashing shade, bent over their lap. The asphalt flashed, the girl&rsquo;s bike whistled as she
                    sped by. But when she reached the other side of the path, where it turned sharply to meet the
                    sidewalk that would take her the rest of the way home, she screeched her bike to a stop.&nbsp;</p>
                <br/>
                <p className="text-left">The figure she&rsquo;d passed had been an older woman, large and squat as a pile of dough, rocking
                    back and forth in a tattered black wheelchair laden with overflowing grocery bags. Hadn&rsquo;t the
                    girl&nbsp;promised&nbsp;herself she would do her best this year to follow her heart? While her head
                    whispered of drug addicts, offensive presumptions, and what her mother might say, the girl&rsquo;s
                    heart urged her to see if the woman was alright. &nbsp;She turned her bike around.&nbsp;</p>
                <br/>
                <p className="text-left">&ldquo;Excuse me,&rdquo; she called, slowing to a stop as her bike drew near the elderly
                    woman, &ldquo;are you okay?&rdquo;&nbsp;</p>
                <br/>
                <p className="text-left">The woman had been muttering something about not being used to &quot;these things&quot; anymore, but
                    when the girl spoke she stopped her rocking and looked up. Her hands were digging into her right
                    thigh; a soft mess of fat-stuffed striped leggings that looked far too tight. Her gnarled,
                    thick-sandaled feet were wrapped in fluffy yellow hospital socks; her face was wrenched in a grimace
                    that froze and softened when she caught sight of the young woman.&nbsp;</p>
                <br/>
                <p className="text-left">Beginning to doubt herself, the girl repeated, &ldquo;Are you okay? Are
                    you&mdash;er, trying to
                    stand?&rdquo;</p>
                <br/>
                <p className="text-left">The woman straightened, as best she could. Her short, fluffy ponytail was
                    copper colored, white at
                    the roots of her straight part. Round blue eyes rested in a tan face, its skin smoother than the
                    student had expected. Her gaze was sharp, her mouth a trembling line. &ldquo;Yes,&rdquo; she
                    said.&nbsp;</p>
                <br/>
                <p className="text-left">The girl climbed off her bike, started to rest it in the grass. &ldquo;Do you
                    need help? I can try to
                    help you.&rdquo;&nbsp;</p>
                <br/>
                <p className="text-left">But the woman shook her head. &ldquo;No, sweetie, there&rsquo;s nothing you can
                    do.&rdquo; She smiled
                    ruefully and sighed. &ldquo;My old legs are hurting me. I just have to wait it out.&rdquo;&nbsp;</p>
                <br/>
                <p className="text-left">&ldquo;Are you sure? I can . . .&rdquo; The student&rsquo;s eyes tracked the
                    wheelchair, the asphalt,
                    the grass, the roots of the oak, trying to find some way she could be of assistance.&nbsp;</p>
                <br/>
                <p className="text-left">&ldquo;No, no, nothing you can do. Thank you, though. I appreciate
                    it.&rdquo;&nbsp;</p>
                <br/>
                <p className="text-left">The student&rsquo;s face fell, but she didn&rsquo;t want to press
                    further. &ldquo;Well, I hope you
                    feel better, and have a good rest of your day.&rdquo; She picked her bike up off of the
                    grass.&nbsp;</p>
                <br/>
                <p className="text-left">&ldquo;Wait.&rdquo;</p>
                <br/>
                <p className="text-left">One leg over her bike seat, the student looked back.&nbsp;</p>
                <br/>
                <p className="text-left">The woman was smiling, and her eyes sparkled with the blue of a rainwashed
                    sky. &ldquo;You have a
                    nice day too, sweetheart,&rdquo; she called, waving as the girl smiled and sped away.&nbsp;</p>
                <br/>
                <p className="text-left">When the student reached the sidewalk, she paused for a moment to wave again at
                    the woman. But when
                    she looked back over her shoulder, the asphalt path was clear, the wheelchair, gone. Only a blue
                    speck graced the space near the oak, a tiny butterfly that soon lifted into the air and disappeared
                    against the darkening sky. &ldquo;Strange,&rdquo; she muttered. Then a clap of thunder roused her,
                    and she sped towards home, fearing the rain.&nbsp;</p>
                <br/>
                <p className="text-left">She was turning onto her neighborhood road when her bike jolted upwards as it
                    rolled over something
                    sharp, and she heard the telltale hiss of air rushing out of her front tire. At the same time,
                    thunder shook the air, and in the quickly-approaching clouds the girl saw a flash of lightning spear
                    the oncoming darkness. Frightened, the girl leapt off her bike and knelt at its side, hoping against
                    all odds that the tire would be alright.&nbsp;</p>
                <br/>
                <p className="text-left">It was flat. The girl rested her forehead against the tire spokes and felt
                    tears prickle her eyes as
                    the wind tossed her hair around her face. Walking home in a thunderstorm was the last thing she
                    wanted on a day like today.&nbsp;</p>
                <br/>
                <p className="text-left">Once more, thunder boomed, and the girl looked up, shuddering, to see how close
                    the clouds
                    were.&nbsp;</p>
                <br/>
                <p className="text-left">Instead of the clouds, however, her gaze caught on the dancing flight of the
                    butterfly, leaping and
                    spinning on the wind. It swooped low, and its wings glittered a rare, dazzling, vibrant blue.
                    Unheeding of the powerful wind, the butterfly landed on the seat of the girl&rsquo;s bike, flapping
                    its wings with a careless nonchalance.&nbsp;</p>
                <br/>
                <p className="text-left">&ldquo;Oh no! It&rsquo;s going to rain soon, little guy,&rdquo; said the girl,
                    holding out a finger
                    in worry, &ldquo;fly away somewhere safe.&rdquo;&nbsp;</p>
                <br/>
                <p className="text-left">The butterfly moved one of its antennae. Then, as if it understood her, the
                    butterfly lifted back
                    into the sky.&nbsp;</p>
                <br/>
                <p className="text-left">The girl watched it go, then sighed and stood to her feet. She might not be
                    able to beat the rain,
                    but perhaps she could hide under someone&rsquo;s porch awning until it passed. She took hold of the
                    handlebars and started to push the bike forward.&nbsp;</p>
                <br/>
                <p className="text-left">It rolled smoothly. &ldquo;What?&rdquo; cried the girl, leaning down to frown
                    at the front wheel.
                    Gasping, she squeezed the tire, felt it firm and full beneath her fingers. &ldquo;It&rsquo;s
                    fixed!&rdquo;&nbsp;</p>
                <br/>
                <p className="text-left">Grinning, the girl leapt back onto her bike and rode home, made it inside just
                    as the first raindrop
                    hit the pavement. She went happily to her room, where she quickly fell asleep. As she slept, the
                    bright blue butterfly darted past her bedroom window, and smiled to see the girl safely home,
                    kindness repaid.&nbsp;</p>
                <br/>
                <br/>
                <BlueTreesTOC/>
            </HomeHero>
        </>
    )
}
