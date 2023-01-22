import * as React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import UseTotal from "../../hooks/useTotal";

const Balance = ({ title }: { title: string }) => {
  const { transactions } = useContext(GlobalContext);
  const total = UseTotal({ transactions });

  return (
    <>
      <h4>{title}</h4>
      <h1>{total}</h1>
    </>
  );
};

export default Balance;