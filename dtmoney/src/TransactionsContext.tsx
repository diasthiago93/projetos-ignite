import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  createAt: string;
  type: string;
}

// interface TransactionInput {
//   title: string;
//   category: string;
//   amount: number;
//   type: string;
// }

type TransactionInput = Omit<Transaction, "id" | "createAt">;

interface TransactionsProviderPropos {
  children: ReactNode;
}

interface TransactionContexData {
  transactions: Transaction[];
  createTransaction: (transactions: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContexData>(
  {} as TransactionContexData
);

export function TransactionsProvider({ children }: TransactionsProviderPropos) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionsInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionsInput,
      createAt: new Date(),
    });

    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
