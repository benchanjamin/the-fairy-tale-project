import React from 'react';
import {NavLink} from "@components/NavLink";

function TheWitchFindersTOC(props) {
    return (
        <div className="mx-auto mt-10">
            <NavLink href="/the-witchfinders/a-girl-and-a-cat"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 1: A Girl and a Cat
            </NavLink>
            <br/>
            <NavLink href="/the-witchfinders/downstairs"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 2: Downstairs
            </NavLink>
            <br/>
            <NavLink href="/the-witchfinders/penthesilea"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 3: Penthesilea
            </NavLink>
            <br/>
            <NavLink href="/the-witchfinders/in-the-magic-kitchen"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 4: In the Magic Kitchen
            </NavLink>
            <br/>
            <NavLink href="/the-witchfinders/witchfinding"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 5: Witchfinding
            </NavLink>
        </div>
    );
}

export default TheWitchFindersTOC;
