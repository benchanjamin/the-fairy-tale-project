import Head from "next/head";
import HomeHero from "@components/HomeHero";
import {NavLink} from "@components/NavLink";
import React from "react";
import BlueTreesTOC from "@components/BlueTreesTOC";

export default function TheDeer() {
    return (
        <>
            <Head>
                <title>The Deer</title>
            </Head>
            <HomeHero displayImages={false}>
                <h3 className="font-bold text-2xl">The Deer</h3>
                <br/>

                <p className="text-left">Not so long ago, a woman was driving down a highway that cut through the stony insides of hills.
                    The woman&rsquo;s car swerved from side to side, for she was blinded by despair. She felt that
                    the only thing worse than her misfortunes would be if the very sky came crashing down on
                    her.</p>
                <br/>
                <p className="text-left">A great bang, a squeal of tires, a wheel wrenched out of shocked hands. The woman&rsquo;s car
                    flew off the road. Once it came to a stop, she scrambled&mdash;cursing, bleeding, but
                    intact&mdash;out of her dented car, terrified to discover what she had hit.</p>
                <br/>
                <p className="text-left">A deer lay in the dying grass by the side of the road, soft white underbelly exposed to the lilac
                    gray sky.</p>
                <br/>
                <p className="text-left">It had one great, terrible antler rising up out of its small, regal head. Where the other antler
                    should have been was a bloody, matted mess of tawny fur, but that was the only blood the woman
                    could see. Otherwise, the deer&rsquo;s body seemed unharmed, though it remained splayed
                    awkwardly on the ground, motionless except for the rising and falling of its chest.</p>
                <br/>
                <p className="text-left">The woman stared. She reached for her phone, to google what you were supposed to do if you hit a
                    deer but failed to kill it. She found a number to call, and was listening to the dial tone for
                    an answer, when the deer lifted its head, made a low, wooden moaning sound, and looked her in
                    the eyes.</p>
                <br/>
                <p className="text-left">&ldquo; . . . antler.&rdquo;</p>
                <br/>
                <p className="text-left">The woman must have hit her head harder than she thought.</p>
                <br/>
                <p className="text-left">&ldquo;Where is my antler?&rdquo; the deer repeated.</p>
                <br/>
                <p className="text-left">The woman&rsquo;s phone dropped to the grass. She craned her neck around, but from
                    horizon-to-horizon, there was no other sign of human life but the fog her car&rsquo;s exhaust
                    pipes were spewing into the brittle air. Reluctantly, the woman turned her eyes back to the
                    deer. &ldquo;Um . . . what?&rdquo;</p>
                <br/>
                <p className="text-left">The deer turned onto its knobby, graceful knees, then stood, in a slow, wobbling dance of rising.
                    There was no imprint in the grass where its body had been. The woman felt sick, and started to
                    get back into her car.</p>
                <br/>
                <p className="text-left">The woman locked her door and screamed. The deer was in front of her windshield.</p>
                <br/>
                <p className="text-left">&ldquo;You cannot leave,&rdquo; it said, its strange groaning voice cutting through the
                    glass, &ldquo;You have taken my antler. We cannot be separated until I am made whole
                    again.&rdquo;</p>
                <br/>
                <p className="text-left">Breathing shallow and fast, the woman scrambled back out of her car, keeping a wide distance
                    between herself and the deer. She bent down, started waving her arms and hands through the long,
                    dry grass. The deer watched her silently. Finally, the woman found it, not in the grass,
                    something like a gray, fuzzy hand clawing up from under the tire streaks on the road. The woman
                    picked it up, and brought it to the deer. &ldquo;There,&rdquo; she huffed, eyes wide, dropping
                    the antler at the deer&rsquo;s hooves and wiping her hands on the seat of her
                    pants. &ldquo;Okay. Okay, I&rsquo;m sorry. I&rsquo;m going now. Okay?&rdquo;</p>
                <br/>
                <p className="text-left">The deer stared at her.</p>
                <br/>
                <p className="text-left">Taking that for a yes, the woman got in her car with a shudder, started the sputtering engine,
                    and turned back onto the road. The miniature accident had cleared her mind, somewhat&mdash;or,
                    rather, replaced one set of doldrum thoughts with another&mdash;and she drove much more
                    carefully up the remaining stretch of road, through a thinly wooded and thickly-housed forest,
                    and up the long driveway that led to the large but dilapidated farm-style house she shared with
                    no one. She got out of the car, trudged up her porch steps.</p>
                <br/>
                <p className="text-left">The deer was blocking the front door. &ldquo;I told you,&rdquo; it said, &ldquo;not until I am
                    made whole again can we be separated.&rdquo;</p>
                <br/>
                <p className="text-left">The woman walked back down the steps, got back in her car, and drove away as fast as she
                    could.</p>
                <br/>
                <p className="text-left">But when she returned home two days later, after one uncomfortable night on a nearby
                    motel&rsquo;s itchy mattress, and another slightly more restful one on a pullout couch in her
                    ex-pastor&rsquo;s moss-green study, the deer was waiting for her on the porch, right where
                    she&rsquo;d left it.</p>
                <br/>
                <p className="text-left">The woman charged up the stairs, past the deer, and into her house as quickly and silently as she
                    could. Still, when she turned around from locking the door behind her, the deer was standing by
                    her dinner table.</p>
                <br/>
                <p className="text-left">The woman slung her shoulder bag onto the dinner table with a solid
                    thunk. &ldquo;Fine,&rdquo; she conceded, shoulders sagging as she held the deer&rsquo;s quiet
                    gaze. &ldquo;What do you want? I gave you back your antler. I don&rsquo;t understand why
                    you&rsquo;re following me.&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;You cannot leave me until&mdash;&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;Until &lsquo;you are made whole,&rsquo;&rdquo; interrupted the woman, &ldquo;yeah. Got it.
                    But I gave you your antler, so what&rsquo;s the problem?&rdquo;</p>
                <br/>
                <p className="text-left">The deer said nothing. The woman noticed that it still only had one antler.</p>
                <br/>
                <p className="text-left">&ldquo;Well?&rdquo;</p>
                <br/>
                <p className="text-left">The deer did not respond. The woman muttered her annoyance under her breath and went to bed.</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">In the middle of the night, a nightmare tore the woman out of sleep. She staggered half-blind
                    from her bed, down the stairs, into the kitchen, gulped water straight from the tap. The fake
                    hardwood floor of the kitchen sent shivers up her bare feet.</p>
                <br/>
                <p className="text-left">&ldquo;Are you alright?&rdquo;</p>
                <br/>
                <p className="text-left">The woman choked, pulled back from the flowing tap, and straightened up to fumble for the kitchen
                    light switch. Her eyes adjusted, and, coughing, she met the deer&rsquo;s gaze as it glowed at
                    her from the other side of the kitchen. &ldquo;Wouldn&rsquo;t you like to know,&rdquo; she
                    grumbled.</p>
                <br/>
                <p className="text-left">The deer&rsquo;s eyes were cold and calm and terrible as moons. In their flat blinklessness,
                    shining out from the sad, asymmetrical silhouette formed by the deer&rsquo;s maimed head, they
                    seemed to take on a shadow of disapproval.</p>
                <br/>
                <p className="text-left">The woman sighed. She reached for a glass, thought better of it. Grabbed a bowl instead, filled
                    it with water, and shuffled into the living room. &ldquo;Here,&rdquo; she said, setting the bowl
                    at the deer&rsquo;s hooves.</p>
                <br/>
                <p className="text-left">The deer lowered its head to the bowl and drank.</p>
                <br/>
                <p className="text-left">The woman sank onto the couch. Its ancient, bellflower-dotted cushions welcomed her with the
                    familiar, all-encompassing, suffocating warmth of strong, weathered arms. If she turned her
                    head, closed her eyes, it almost smelled like . . . The woman tucked the corners of her flannel
                    bathrobe beneath her hips, crossed her arms over her chest, and watched the deer.</p>
                <br/>
                <p className="text-left">She could hear the rhythmic glug, glug, glug of water passing through the deer&rsquo;s hollow
                    neck and into its probably empty stomach. The woman frowned, then went back into the kitchen,
                    returning with an untouched plastic carton of blackberries. &ldquo;They&rsquo;re a little old,
                    but no mold . . .&rdquo; She set them on the floor beside the water.</p>
                <br/>
                <p className="text-left">They stayed like that for a while, the woman and the deer, the calm silence broken only by the
                    gentle sounds of the deer eating, and the low, constant hum of the woman&rsquo;s fridge. The
                    warm kitchen light mingled with the porchlight coming in through the front door&mdash;the woman
                    had forgotten to turn it off. Over the bent curve of the deer&rsquo;s sleek neck, the black face
                    of the television watched the woman watch the deer.</p>
                <br/>
                <p className="text-left">&ldquo;Netflix?&rdquo; proposed the woman, just as the deer swallowed a last blackberry and
                    asked &ldquo;What woke you up?&rdquo;</p>
                <br/>
                <p className="text-left">An uncomfortable silence. The woman cleared her throat. &ldquo;I heard, um . . . Well. Love is
                    Blind is supposed to be pretty good. Funny.&rdquo;</p>
                <br/>
                <p className="text-left">The deer made a soft whistling huff. &ldquo;I prefer anime, but I&rsquo;m down to try something
                    new.&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;No, no! Anime is&mdash;&rdquo; the woman blushed, cleared her throat, suddenly
                    embarrassed.</p>
                <br/>
                <p className="text-left">The deer was definitely laughing now. It stepped towards the couch, lowered its polished leather
                    nose to the remote that lay gathering dust on the coffee table. Looked up at the woman with sly,
                    dark, dancing, sideways eyes&mdash;the woman wasn&rsquo;t sure how a deer could make that
                    expression.</p>
                <br/>
                <p className="text-left">&ldquo;Ever heard of Beastars?&rdquo;</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">The next morning, the woman ate breakfast on the floor of her living room&mdash;it was too
                    difficult for the deer to eat off the dining table.</p>
                <br/>
                <p className="text-left">&ldquo;So,&rdquo; said the woman, around a mouthful of lukewarm oats, &ldquo;if the old antler
                    isn&rsquo;t going to fix you, how do we &lsquo;make you whole?&rsquo;&rdquo;</p>
                <br/>
                <p className="text-left">The deer lifted its head, gazed solemnly at the woman. The blood matting the fur over its right
                    eye had dried to a dark brown. &ldquo;Make a wish.&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;A wish?&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;Yes. What you want most, deep in your heart.&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;What I&mdash;&rdquo; the woman set her spoon down, uncomfortable. &ldquo;What does that
                    have to do with anything?&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;You asked me what must be done.&rdquo;</p>
                <br/>
                <p className="text-left">The woman frowned. &ldquo;I wish you were whole.&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;It doesn&rsquo;t work like that.&rdquo;</p>
                <br/>
                <p className="text-left">The woman frowned harder&mdash;the movement filled her dumpling face with many small
                    dimples. &ldquo;I wish I could take another bite of my oatmeal.&rdquo;</p>
                <br/>
                <p className="text-left">&ldquo;No.&rdquo;</p>
                <br/>
                <p className="text-left">The woman scowled. Her small eyes jumped around the room, looking for something that could be
                    made into a wish. Her gaze caught on the tangle of brown and green outside the kitchen
                    window. &ldquo;Alright. I wish . . .&rdquo; the woman stuck her tongue in her cheek. &ldquo;I
                    guess I wish my garden was in better shape.&rdquo;</p>
                <br/>
                <p className="text-left">The deer tilted its head. One of its coal-tipped, velvet ears flicked ever so slightly, as if it
                    were listening to something far away. Then it blew a snort of surprise. Its long lashes lowered
                    as it studied the woman&rsquo;s carefully stoic face. &ldquo;Yes . . . that works.&rdquo;</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">They labored in the overgrown garden behind the woman&rsquo;s house. Cold autumn rain fell softly
                    down, turning the plants to shivering jewels and the soft ground to clinging muck. The woman
                    grunted as she pulled at the base of a stubborn, invasive vine that was trying to choke one of
                    her tomato plants. The oversized rain boot supporting most of the woman&rsquo;s two hundred and
                    eighteen pounds squelched, then slipped suddenly in the mud. The woman&rsquo;s hands slid on the
                    slick green of the weedstalk, and she lost her grip and fell backwards onto the sodden ground.
                    The impact forced the air out of her lungs in a great oof.</p>
                <br/>
                <p className="text-left">The woman stared as the gray sky rushed down to meet her. That&rsquo;s what she got, she
                    supposed, for holding onto his boots, trying to do his work. She shivered, wiped rain out of her
                    eyes with the back of her hand, kept laying there, flat against the ground, until her bones felt
                    fragile with cold. When she finally summoned the motivation to push herself back up, she found
                    the deer inspecting the tomato vines, nosing along the ground.</p>
                <br/>
                <p className="text-left">The woman scoffed. &ldquo;You won&rsquo;t be able to&mdash;&rdquo;</p>
                <br/>
                <p className="text-left">The deer bared its neat rows of teeth, chewed delicately at the base of the weed for no more than
                    a few seconds before the demonic plant surrendered its hold, and the tomato plant sprung
                    joyfully free. The deer gathered the weed in its mouth, stepped lightly forward, dropped it over
                    the woman&rsquo;s upturned boot.</p>
                <br/>
                <p className="text-left">&ldquo;You were saying?&rdquo;</p>
                <br/>
                <p className="text-left">The woman plucked the collapsed vine off of her foot, and tossed it away into the grass. Holding
                    the deer&rsquo;s triumphant gaze, she tilted her head back, lifted her chin. &ldquo;Could you do
                    the potatoes, too?&rdquo; <br/>
                    <br/>
                    Later, after chucking her mud-encrusted rain boots into the bin, the woman was coming out of the
                    shower. She found the deer standing in front of the mirror over the sink, inspecting the site of
                    its wound. &ldquo;What are you doing?&rdquo; asked the woman, reaching around the deer for her
                    towel. &ldquo;Here&mdash;let me.&rdquo; She ran the sink, wet a corner of her towel, started to
                    clean the blood from the deer&rsquo;s face.</p>
                <br/>
                <p className="text-left">The deer stood patiently. When the woman finished, it stretched its head to the
                    mirror. &ldquo;See that?&rdquo;</p>
                <br/>
                <p className="text-left">The woman followed the deer&rsquo;s gaze, squinted. Something white and round, emerging from the
                    mess of acorn-ash-chestnut-soot hairs over the deer&rsquo;s right temple. The woman stepped
                    back. &ldquo;You mean, the wish&mdash;&rdquo;</p>
                <br/>
                <p className="text-left">The deer gave a happy chirping bark and pranced out of the bathroom. The woman watched it go with
                    narrowed eyes, feeling something stir in her chest that she hadn&rsquo;t for a long, long time.
                    She placed a hand over the location of the feeling, pressed down, blinking fast.</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">&ldquo;You&rsquo;re still here.&rdquo; The woman said, feigning nonchalance when she found the
                    deer grazing by the porch a few hours later, on her way out, to the grocery store.</p>
                <br/>
                <p className="text-left">The deer regarded her quietly.</p>
                <br/>
                <p className="text-left">&ldquo;I thought&mdash;&rdquo;</p>
                <br/>
                <p className="text-left">The deer watched as the woman glowered, stomped heavily down the porch steps, jangling keys tight
                    in her fist, then stood for a long while without opening the door to her car.</p>
                <br/>
                <p className="text-left">
                    The harshness left her voice. Something soft and wavering took its place. &ldquo;The wish. I
                    just, I thought you might . . .&rdquo;</p>
                <br/>
                <p className="text-left">The deer went to her side. Pressed its flank against her hip. Unconsciously, the woman leaned
                    into the touch. Their merging shadow reflections made a strange, misshapen picture in the matte,
                    rusted surface of her car. The woman couldn&rsquo;t quite tell where she ended and the deer
                    began, though she could feel its body heat bleeding through the skin of her jeans, seeping into
                    her bones.</p>
                <br/>
                <p className="text-left">&ldquo;Three,&rdquo; the deer said softly. &ldquo;Three wishes. Make another.&rdquo;</p>
                <br/>
                <p className="text-left">The woman wasn&rsquo;t happy at the second wish waiting eagerly behind the door she tentatively
                    opened within her mind. But she&rsquo;d already come this far. &ldquo;Do you think you . . .
                    could fit in the car?&rdquo;</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">The deer could not fit in the car, but it told the woman not to worry about it. And sure enough,
                    when the woman eased her car to a stop at the crest of the steep, brown slope rising up behind
                    the local church, the deer was waiting for her.</p>
                <br/>
                <p className="text-left">It followed the woman down the other side of the lightly-wooded hill, through modestly crunching
                    leaves and past thin, scraping bushes. A few steps past the base of the hill, the woman stopped
                    beneath an especially tall elm. In its height, the tree seemed to curve over them. The woman
                    placed the palm of her hand against the rough, lichen-covered bark, and closed her eyes.</p>
                <br/>
                <p className="text-left">&quot;I haven&apos;t come back here in a long time,&quot; she said. &quot;It used to be our
                    spot.&quot;</p>
                <br/>
                <p className="text-left">The deer waited.</p>
                <br/>
                <p className="text-left">&quot;I wish I&mdash;&quot; all of a sudden the woman whipped around, eyes wide, at first, before
                    they narrowed in accusation. &quot;Wait. Wait. All I wanted was to see this place
                    again&mdash;what are you doing to me?&quot; Her voice was strained and hoarse.</p>
                <br/>
                <p className="text-left">Wind blew, carrying leaves in a jumping dance across the ground, shaking the limbs of the trees.
                    Amidst that dancing movement, the deer stood still, lightly immoveable, as if it made no imprint
                    on the ground at all. It calmly held the woman&apos;s gaze.</p>
                <br/>
                <p className="text-left">&quot;I do nothing. It is your wish to make, or not to make.&quot;</p>
                <br/>
                <p className="text-left">The woman swallowed a pained sound and turned back to the tree. Her shoulders hunched up towards
                    her ears before dropping back. After a long while, the wind carried her words back to the
                    deer&apos;s waiting ears.</p>
                <br/>
                <p className="text-left">&quot;I wish I could forget.&quot;</p>
                <br/>
                <p className="text-left">The woman clenched her teeth, held her breath, bracing herself for a searing cleansing of her
                    mind.</p>
                <br/>
                <p className="text-left">But the deer shook its delicate head and pawed at the ground. &ldquo;No, that&rsquo;s not
                    right.&rdquo; It nosed at the flannel over one of the woman&rsquo;s shoulder blades, as if
                    trying to feel the thudding of the woman&rsquo;s heart. &ldquo;Something else.&rdquo;</p>
                <br/>
                <p className="text-left">The breath stuttered in the woman&rsquo;s throat. She felt a weight slide off of her, and the
                    light curiosity of hope took its place. She closed her eyes again and spoke carefully, each word
                    a thought in the making, a blind reaching for what was true. &ldquo;I wish . . . &rdquo; she
                    began slowly, forging desire out of the unknown, &ldquo;I wish . . .&rdquo;</p>
                <br/>
                <p className="text-left">The leaves of the elm fluttered in the wind.</p>
                <br/>
                <p className="text-left">When the woman turned around, amber sunlight was gleaming on a short protrusion of growth
                    sprouting from the deer&rsquo;s head. The half-formed antler, thick and rounded at the top,
                    looked strong and youthful as new growth, as the buds on the branch whose sap has begun to warm
                    in spring sunlight. The woman reached out, ran the tips of her fingers over the warm, ash-gray
                    fuzz covering the newborn antler. It was soft as velvet beneath her touch. Slowly, her lips
                    parted in the beginnings of a smile.</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">The days flew by, full of light and laughter. One night, near Christmas, the woman was singing in
                    the kitchen, mixing cocoa and hot water in a mug she had made with her own two hands. She went
                    to the pantry, reached for the bag of marshmallows on the uppermost shelf.</p>
                <br/>
                <p className="text-left">The woman took out three marshmallows. She frowned, put one back in the bag, then plopped two
                    into her hot chocolate. &ldquo;Perfect,&rdquo; she said.</p>
                <br/>
                <p className="text-left">The deer was watching the woman from the other side of the kitchen, where the woman had given it
                    sticks of peppermint to lick. &ldquo;What is your third wish?&rdquo;</p>
                <br/>
                <p className="text-left">The woman drank a long sip of her cocoa, sighing with pleasure. She gave the deer a languid
                    smile. &ldquo;I have everything I need,&rdquo; she said.</p>
                <br/>
                <p className="text-left">The deer grunted, but bent its head back to the candy.</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">On New Year&rsquo;s eve, the deer found the woman sitting on her back porch under an old quilt,
                    watching the stars and nursing herbal tea. &ldquo;What is your third wish?&rdquo; it asked, and
                    if there was frustration lacing its voice, the woman pretended not to hear. The new antler was
                    almost the height of the old antler now, and it seemed to glow impatiently in the soft light of
                    the moon.</p>
                <br/>
                <p className="text-left">&ldquo;I have no wish,&rdquo; answered the woman, though her smile seemed to waver. &ldquo;I have
                    everything I need.&rdquo;</p>
                <br/>
                <p className="text-left">The deer went back inside.</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">One morning, the woman awoke to birdsong outside her window, and knew that spring had come. She
                    ignored the quiet, frenzied, anxious jitter that sprang to life in her chest and pulled on a
                    dress and her favorite sweater. Humming loudly, she twirled in the mirror, admiring her
                    reflection.</p>
                <br/>
                <p className="text-left">The sun streamed in so beautifully through the window, falling across the woman&rsquo;s bed like
                    strips of liquid gold. But the woman did not want to go back to bed. Fresh, sweet air slipped
                    underneath the window eaves, drew the woman downstairs, through the kitchen, and into her front
                    yard. She gazed up at the glorious sky, breathed deeply of the newness of the world.</p>
                <br/>
                <p className="text-left">The woman hugged herself tight, and spun in a joyous circle in the yard, faster and faster, until
                    she fell backwards, bursting into laughter. The grass was soft and green beneath her, and the
                    clouds streaking across the sky mirrored the leaping bounds of her spirit.</p>
                <br/>
                <p className="text-left">The deer&rsquo;s head appeared in the woman&rsquo;s line of vision, blocking out the sun.</p>
                <br/>
                <p className="text-left">&ldquo;I have everything I need,&rdquo; started the woman, rolling away from the deer and jumping
                    to her feet, &ldquo;I am done with wishing. Done.&rdquo; She ran inside.</p>
                <br/>
                <p className="text-left">But the deer was standing at the stairs to the woman&rsquo;s bedroom.</p>
                <br/>
                <p className="text-left">&ldquo;I told you,&rdquo; said the woman, easing around the deer, &ldquo;I have no third wish.
                    Leave me alone.&rdquo;</p>
                <br/>
                <p className="text-left">The deer was waiting for her, next to her bed.</p>
                <br/>
                <p className="text-left">&ldquo;Get out!&rdquo; cried the woman, &ldquo;I&rsquo;m happy! Let me be happy. Get out of here,
                    and don&rsquo;t ever come back.&rdquo;</p>
                <br/>
                <p className="text-left">The woman closed her eyes so she would not see the deer leave, but she heard its quiet hoofsteps
                    grow softer and softer nonetheless.</p>
                <br/>
                <p>***</p>
                <br/>
                <p className="text-left">That night, the woman could not sleep. She gazed unseeing into the blackness over her bed, her
                    eyes blinded by tears.</p>
                <br/>
                <p className="text-left">She turned onto her side. The deer was standing by the bedroom window, outlined in glowing
                    moonlight. Both of its antlers were the same height now, each tall and strong as ancient
                    trees.</p>
                <br/>
                <p className="text-left">The deer came gracefully to the side of the bed and lowered its head to the woman&rsquo;s hand.
                    The woman wiped her eyes and stroked between the deer&rsquo;s eyes. Its gaze was dark and
                    quietly luminous.</p>
                <br/>
                <p className="text-left">&ldquo;I don&rsquo;t want to,&rdquo; whispered the woman. &ldquo;Don&rsquo;t make me.&rdquo;</p>
                <br/>
                <p className="text-left">The deer nudged its head into the woman&rsquo;s hand. A low, calming sound came from its throat.
                    It climbed onto the bed, knelt at the woman&rsquo;s side, and gazed at her.</p>
                <br/>
                <p className="text-left">The woman sighed. The heat emanating from the deer&rsquo;s body enveloped her with all the warmth
                    of an embrace, and she felt herself easing, relaxing, against her will. Her eyes started to
                    close. A yawn stretched her jaw. She snuggled closer to the deer, curling up. And her ease
                    brought forth the wish.</p>
                <br/>
                <p className="text-left">&ldquo;I wish,&rdquo; mumbled the woman, &ldquo;I wish . . .&rdquo; Her breath caught as she
                    realized what she was saying. She pleaded silently with the deer, but it only gazed down at her,
                    impassive, waiting. Its antlers loomed over her, glowing like the moon. The woman wrenched her
                    eyes shut.</p>
                <br/>
                <p className="text-left">&ldquo;I wish that you were real.&rdquo;</p>
                <br/>
                <p className="text-left">The woman held her breath. Keeping her eyes closed, she reached an arm out, feeling for the deer.
                    Her arm fell through air, to the undisturbed covers.</p>
                <br/>
                <p className="text-left">The woman yawned and fell asleep. <br/>
                </p>
                <BlueTreesTOC/>
            </HomeHero>
        </>
    )
}
