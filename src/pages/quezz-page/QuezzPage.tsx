// import './QuezzPage.module.scss';
// import './animations.module.scss';

export default function QuezzPage(): JSX.Element {

    // const loadScript = () => {
    //     const script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "../src/assets/fontawesome/js/all.js";
    //     script.id = "third-party-script-async";
    //     document.head.appendChild(script);
    // };
    //
    // useEffect(() => {
    //     loadScript();
    // });

    return <>
        <div className="logo">
            <h1>Quuez</h1>
        </div>
        <div className="start show">
            <div className="header">
                <h2>Aplicativo simples e isntuitivo para ajudar o desenvolvimento do aluno.</h2>
            </div>
            <div className="start-options">
                <span className="option-container" data-operand='+'>Adição</span>
                <span className="option-container" data-operand='-'>Subtração</span>
                <span className="option-container" data-operand='×'>Multiplicação</span>
                <span className="option-container" data-operand='÷'>divisão</span>
            </div>
            <div className="difficulty">
                <label>Escolha uma dificuldade:</label>
                <select id='difficulty'>
                    <option value="easy">Fácil</option>
                    <option value="average">Intermediário</option>
                    <option value="hard">Difícil</option>
                </select>
            </div>
            <div className="difficulty">
                <label>Escolha o número de questões:</label>
                <input id='totalQuestions' type="number" defaultValue="10" min='1' />
                </div>
            <div className="start-footer">
                <button type="button" id="start">Começar</button>
            </div>
        </div>
        <div className="question hide">
            <div className="header">
                <h2>Quanto é 2x8=?</h2>
            </div>
            <div className="options">
            </div>
            <div className="footer">
                <button type="button">Próxima Questão</button>
            </div>
        </div>
        <div className="result hide">
            <div className="header">
                <h2>Sua pontuação</h2>
            </div>
            <div className="options">
            </div>
            <div className="result-footer">
                <button id='restart' type="button" onClick={() => window.location.reload()}>Reiniciar</button>
            </div>
            <div className="grade"><p>A</p></div>
        </div>
        <div className="notify"/>
    </>;
}
