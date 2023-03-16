import {NavLink} from "@components/NavLink";
import Link from "next/link";

export default function BetterHeader() {
    return (
        <>
            <nav className="container relative mx-auto pt-6 h-[5vh] md:h-[10vh] p-6">

                <div className="flex-col items-start">
                    {/* Logo + Button */}
                    <div className="flex justify-between">
                        <h2 className="text-[14px] text-lightBlack text-left font-bold font-light pl-6 pr-6 font-sans">The
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

                    {/* Menu Items */}
                    {/*Home*/}
                    {/*Blue Trees*/}
                    {/*The Witchfinders*/}
                    {/*Dragon Days*/}
                    {/*The Fire Drill*/}
                    <div className="hidden items-center justify-between space-x-30 md:flex md:text-[18px] lg:text-[26px]
                    md:mt-[15px] pl-6 pr-6 tracking-wider font-semibold font-['Almendra']">
                        <NavLink href="/" exact
                                 className="text-lightBlack font-medium hover:text-gray-100 duration-75 ">Home</NavLink>
                        <NavLink href="/blue-trees" exact
                                 className="text-lightBlack font-medium hover:text-gray-100 duration-75">Blue
                            Trees</NavLink>
                        <NavLink href="/the-witchfinders" exact
                                 className="text-lightBlack font-medium hover:text-gray-100 duration-75">The
                            Witchfinders</NavLink>

                        <NavLink href="/dragon-days" exact
                                 className="text-lightBlack font-medium hover:text-gray-100 duration-75">Dragon
                            Days</NavLink>

                        <NavLink href="/the-fire-drill" exact
                                 className="text-lightBlack font-medium hover:text-gray-100 duration-75">The
                            Fire Drill</NavLink>

                    </div>


                    <div
                        id="menu"
                        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen
                        px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-lightBlack
                         font-['Lato']"
                    >
                        <div className="w-full py-3 text-center">
                            <Link href="/" className="block hover:text-softRed">Home</Link>
                        </div>
                        <div className="w-full py-3 text-center">
                            <Link href="/timeline" className="block hover:text-softRed">Blue Trees</Link>
                        </div>
                        <div className="w-full py-3 text-center">
                            <Link href="/map" className="block hover:text-softRed">The Witchfinders</Link>
                        </div>
                        <div className="w-full py-3 text-center">
                            <Link href="/about" className="block hover:text-softRed">Dragon Days</Link>
                        </div>
                        <div className="w-full py-3 text-center">
                            <Link href="/about" className="block hover:text-softRed">The Fire Drill</Link>
                        </div>
                    </div>
                </div>


            </nav>
        </>
    );
}
