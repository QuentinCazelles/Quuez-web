import LandingPageHeader from "./LandingPageHeader";
import '../../assets/css/styles.css';
import '../../assets/plugins/elegant_font/css/style.css';
import '../../assets/fontawesome/js/all.js';
import '../../assets/plugins/bootstrap/css/bootstrap.min.css';
import LandingPageSubtitle from "./LandingPageSubtitle";
import LandingPageSections from "./LandingPageSections";
import {useEffect} from "react";
import LandingPageFooter from "./LandingPageFooter";

export default function LandingPage(): JSX.Element {

    const loadScript = () => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://buttons.github.io/buttons.js";
        script.id = "third-party-script-async";
        document.head.appendChild(script);
    };

    useEffect(() => {
        loadScript();
    });

    return <div className="landing-page">
            <div id="fb-root"/>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=994736563909741&autoLogAppEvents=1"/>
        <div className="page-wrapper">
            <LandingPageHeader />
            <section className="cards-section text-center">
                <LandingPageSubtitle />
                <LandingPageSections />
            </section>
            <LandingPageFooter />
        </div>
    </div>;
}
