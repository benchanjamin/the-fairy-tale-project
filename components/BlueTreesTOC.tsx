import React from 'react';
import {NavLink} from "@components/NavLink";

function BlueTreesTOC(props) {
    return (
        <div className="mx-auto mt-10">
            <NavLink href="/blue-trees/the-shadows-of-the-leaves"
                     className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                The Shadows of the Leaves
            </NavLink>
            <br/>
            <NavLink href="/blue-trees/the-princess's-handmaiden" className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                The Princess&apos;s Handmaiden
            </NavLink>
            <br/>
            <NavLink href="/blue-trees/what-cherry-said" className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                What Cherry Said
            </NavLink>
            <br/>
            <NavLink href="/blue-trees/the-enchantress" className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                The Enchantress
            </NavLink>
            <br/>
            <NavLink href="/blue-trees/the-deer" className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                The Deer
            </NavLink>
            <br/>
            <NavLink href="/blue-trees/bluestar" className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                Bluestar
            </NavLink>
            <br/>
            <NavLink href="/blue-trees/the-landscaper's-son" className="text-lightBlack hover:text-gray-100 duration-75 font-bold"
                     exact>
                The Landscaper&apos;s Son
            </NavLink>
            <br/>
        </div>
    );
}

export default BlueTreesTOC;
