import '../styles/globals.css';
import BetterHeader from '../components/BetterHeader'

function MyApp({Component, pageProps}) {
    return (
        <>
            <BetterHeader/>
            <Component {...pageProps} />
            <div className="mx-auto mt-5 pb-4" id="footer">
                <div className="text-sm text-lightBlack text-center md:text-md font-['Almendra']">
                    This project was sponsored by a Flash Grant from the Princeton University Humanities Council
                </div>
                <div className="text-sm text-lightBlack text-center mt-2 md:text-md font-['Almendra']">
                    Copyright © 2023
                </div>
            </div>
        </>
    );
}

export default MyApp;
