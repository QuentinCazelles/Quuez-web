
export default function LandingPageHeader(): JSX.Element {

    return <header className="header text-center">
            <div className="container">
                <div className="branding">
                    <h1 className="logo">
                        <span aria-hidden="true" className="icon_check_alt icon"/>
                        <span className="text-highlight">Quu</span><span className="text-bold">ez</span>
                    </h1>
                </div>
                <div className="tagline">
                    <p>Quuez é um projeto para ajudar a melhorar o rendimento de alunos na sala de aula!</p>
                </div>
                <div className="social-container">
                    <div className="github-btn mb-2">
                        <a className="github-button" href="https://github.com/rhenanteix" data-size="large"
                           aria-label="Follow @rhenanteix on GitHub">Entre em contato aqui @rhenanteix</a>
                    </div>
                </div>
            </div>
        </header>;
}
