import React from 'react';
import Image from "next/image";

import {imageKitLoader} from "@utils/imagekitloader";

function ImageHomeHero(props) {
    return (
        <div className="flex flex-col md:flex-row -mt-32">
            <div className="hidden w-full md:block lg:w-1/3 relative h-[55vh] group">
                <Image layout={"fill"} objectFit="contain" objectPosition={"50% 50%"}
                       height={1000} width={1000}
                       alt="Walter Crane Illustration"
                       loader={imageKitLoader}
                       src="mirror_with_shadow.PNG"/>
            </div>
            <div className="hidden md:block w-full lg:w-1/3 relative h-[55vh] group">
                <Image layout={"fill"} objectFit="contain" objectPosition={"50% 50%"}
                       height={1000} width={1000}
                       alt="Charles Ricketts & Charles Shannon Illustration"
                       loader={imageKitLoader}
                       src="apple_diagonal.PNG"/>
            </div>
            <div className="w-full lg:w-1/3 relative h-[55vh] group">
                <Image layout={"fill"} objectFit="contain" objectPosition={"50% 50%"}
                       height={1000} width={1000}
                       alt="Richard Doyle Illustration"
                       loader={imageKitLoader}
                       src="sword_w_shadow.PNG"
                />
            </div>
        </div>
    );
}

export default ImageHomeHero;
