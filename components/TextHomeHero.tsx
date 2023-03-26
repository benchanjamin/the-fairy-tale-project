import React from 'react';

function TextHomeHero({children}) {
    return (
        <div className="container mx-auto relative">
            {/* Content Words */}
            <div
                className="flex justify-center pt-[3.5rem] pb-[3rem] items-top mx-auto w-[80%] 3xl:w-[80%]">
                <h1 className="text-lightBlack text-center text-[13px] md:text-[20px] 3xl:text-[50px] font-['cormorant-garamond']
                     tracking-[.04rem] ">
                    {children}
                </h1>
            </div>
        </div>
    );
}

export default TextHomeHero;
