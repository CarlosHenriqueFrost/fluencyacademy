import Logo from "../Images/Logo.png";
import TurnAStudent from "../Images/TurnAStudent.png";
import USAIcon from "../Images/USAIcon.png";
import SpanishIcon from "../Images/SpanishIcon.png";
import FrenchIcon from "../Images/FrenchIcon.png";
import GermanyIcon from "../Images/GermanyIcon.png";
import ItalianIcon from "../Images/ItalianIcon.png";
import JapanIcon from "../Images/JapanIcon.png";
import ChineseIcon from "../Images/ChineseIcon.png";
import CoreanIcon from "../Images/CoreanIcon.png";
import ArrowToRight from "../Images/ArrowToRight.png";
import Check from "../Images/Check.png";
import Eye from "../Images/Eye.png";

import "../styles/Home.scss";

export function Home() {
  return (
    <div className="HomeContent">
      <main>
        <div className="Form">
          <img src={Logo} alt="Logo da Fluency Academy" />
          <form>
            <div className="FormInput">
              <input type="email" id="Email" />
              <img src={Check} alt="Icone de check verde" />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="FormInput">
              <input type="password" id="Password" />
              <img src={Eye} alt="Olho para mostrar e esconder a senha" />
              <label htmlFor="Password">Senha</label>
            </div>
            <button>
              ENTRAR AGORA
              <img
                src={ArrowToRight}
                alt="Seta apontando para a direita dentro de um botão"
              />
            </button>
            <button className="ForgotThePassword">Esqueci minha senha</button>
          </form>
        </div>
      </main>
      <aside>
        <div className="AsideContent">
          <div className="CountryFlags">
            <img src={USAIcon} alt="Bandeira dos Estados Unidos" />
            <img src={SpanishIcon} alt="Bandeira da Espanha" />
            <img src={FrenchIcon} alt="Bandeira da frança" />
            <img src={GermanyIcon} alt="Bandeira da Alemanha" />
            <img src={ItalianIcon} alt="Bandeira da Italia" />
            <img src={JapanIcon} alt="Bandeira do Japão" />
            <img src={ChineseIcon} alt="Bandeira da China" />
            <img src={CoreanIcon} alt="Bandeira da Corea do Sul" />
          </div>
          <h1>Você chegou à Maior academia de Fluência da América Latina!</h1>
          <div className="TurnAStudent">
            <p>
              <strong>Ainda não é nosso aluno?</strong>Venha fazer parte da
              Fluency Academy!
            </p>
            <button>
              Saiba como participar <strong>clicando aqui</strong>
            </button>
            <img
              src={TurnAStudent}
              alt="Foto com os professores da fluency Academy"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
