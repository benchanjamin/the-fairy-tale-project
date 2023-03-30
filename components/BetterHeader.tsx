import {NavLink} from "@components/NavLink";
import Link from "next/link";

export default function BetterHeader() {
    return (
        <>
            <div className="h-[5vh] p-6">
                <div className="flex justify-between">
                    <h2 className="text-[16px] text-lightBlack text-left font-bold font-light pl-6 pr-6 font-sans font-['cormorant-garamond']">The
                        Contemporary Fairy Tale Project</h2>
                    <button
                        id="menu-btn"
                        className="z-30 block md:hidden focus:outline-none hamburger"
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </div>
            <nav className="md:h-[6vh] hidden items-center justify-between space-x-30 md:flex md:text-[18px] lg:text-[26px]
                    md:mt-[15px] pl-12 pr-12 tracking-wider font-semibold font-['Almendra']">
                <NavLink href="/" exact
                         className="text-lightBlack hover:text-gray-100 duration-75 ">Home</NavLink>
                <NavLink href="/blue-trees" exact
                         className="text-lightBlack hover:text-gray-100 duration-75">Blue
                    Trees
                </NavLink>
                <NavLink href="/the-witchfinders" exact
                         className="text-lightBlack hover:text-gray-100 duration-75">The
                    Witchfinders
                </NavLink>

                <NavLink href="/ruby-tales" exact
                         className="text-lightBlack hover:text-gray-100 duration-75">
                    Ruby Tales
                </NavLink>
                <NavLink href="/arcadia" exact
                         className="text-lightBlack hover:text-gray-100 duration-75">
                    Arcadia
                </NavLink>
            </nav>
            <div>
                <div className="relative mx-auto ">
                    {/*<div className="flex-col items-start">*/}
                    {/* Logo + Button */}
                    <div
                        id="menu"
                        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen
                        px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-lightBlack
                         font-['Almendra']"
                    >
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/" className="block hover:text-softRed">Home</Link>
                        </div>
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/blue-trees" className="block hover:text-softRed">Blue Trees</Link>
                        </div>
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/the-witchfinders" className="block hover:text-softRed">The Witchfinders</Link>
                        </div>
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/ruby-tales" className="block hover:text-softRed">Ruby Tales</Link>
                        </div>
                        <div className="w-full py-3 text-center nav-mobile-menu">
                            <Link href="/arcadia" className="block hover:text-softRed">Arcadia</Link>
                        </div>
                    </div>
                </div>
                {/*</div>*/}
            </div>
        </>
    );
}
