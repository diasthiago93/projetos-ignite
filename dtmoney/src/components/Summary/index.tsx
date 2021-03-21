import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcmeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone de Entradas" />
        </header>
        <strong>1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcmeImg} alt="Icone de Saida" />
        </header>
        <strong>1000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone de Total" />
        </header>
        <strong>1000</strong>
      </div>
    </Container>
  );
}
