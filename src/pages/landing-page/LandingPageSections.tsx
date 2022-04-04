
export default function LandingPageSections(): JSX.Element {

    return <div id="cards-wrapper" className="cards-wrapper row">
        <div className="item item-green col-lg-4 col-6">
            <div className="item-inner">
                <div className="icon-holder">
                    <i className="icon fa fa-paper-plane"/>
                </div>
                <h3 className="title">Desenvolvimento do Aluno</h3>
                <p className="intro">Além da tarefa de casa, os alunos vao poder usar o Quuez como uma atividade extra
                    diária, para aprimorar ainda mais as tarefas do dia-a-dia</p>
            </div>
        </div>

        <div className="item item-blue col-lg-4 col-6">
            <div className="item-inner">
                <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_datareport_alt"/>
                </div>
                <h3 className="title">Análise de desempenho</h3>
                <p className="intro">O professor vai poder ver o desempenho do seu aluno e também criar novos quizes</p>
            </div>
        </div>

        <div className="item item-orange col-lg-4 col-6">
            <div className="item-inner">
                <div className="icon-holder">
                    <span aria-hidden="true" className="icon icon_gift"/>
                </div>
                <h3 className="title">Gameficado</h3>
                <p className="intro">O aluno finalizando cada quiz, recebe uma pontuação, aumentando de nível e assim
                    podendo trocar seus pontos em premios</p>
            </div>
        </div>
    </div>;
}
