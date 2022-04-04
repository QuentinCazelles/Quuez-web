import {Link} from "react-router-dom";

export default function LandingPageSubtitle(): JSX.Element {

    return <>
    <h2 className="title">Vamos testar é rápido e fácil!</h2>
        <div className="intro">
            <div className="cta-container">
                <Link to="/quezz" className="btn btn-primary btn-cta" target="_blank">
                    <i className="fas fa-square-root-alt"/>Quiz Matemática
                </Link>
            </div>
        </div>
    </>;
}
