import { useContext } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcmeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const sumanry = transactions.reduce(
    (acc, transaction) => {
      if ((transaction.type = "deposit")) {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone de Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumanry.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcmeImg} alt="Icone de Saida" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumanry.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone de Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumanry.total)}
        </strong>
      </div>
    </Container>
  );
}
