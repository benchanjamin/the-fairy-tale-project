import React from 'react';
import {NavLink} from "@components/NavLink";

function TheWitchFindersTOC(props) {
    return (
        <div className="mx-auto mt-10">
            <NavLink href="/ruby-tales/chapter-one"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 1
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-two"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 2
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-three"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 3
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-four"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 4
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-five"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 5
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-six"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 6
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-seven"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 7
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-eight"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 8
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-nine"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 9
            </NavLink>
            <br/>
            <NavLink href="/ruby-tales/chapter-ten"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Chapter 10
            </NavLink>
            <br/>
        </div>
    );
}

export default TheWitchFindersTOC;
