import React, { useState } from "react";

const Calculatrice = () => {
  const [chiffre, setChiffre] = useState("");
  const [chiffrePrecedent, setChiffrePrecedent] = useState("");
  const [operateur, setOp] = useState("");

  const handleClick = (num) => {
    setChiffre((prevChiffre) => (prevChiffre === "0" ? num.toString() : prevChiffre + num.toString()));
  };

  const handleClickSigne = (signe) => {
    if (chiffre !== "") {
      setOp(signe);
      setChiffrePrecedent(chiffre);
      setChiffre("");
    }
  };

  const evaluerExpression = (num1, num2, operateur) => {
    switch (operateur) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      default:
        return NaN;
    }
  };

  const calculerResultat = () => {
    if (operateur !== "" && chiffre !== "") {
      const num1 = parseFloat(chiffrePrecedent);
      const num2 = parseFloat(chiffre);
      if (!isNaN(num1) && !isNaN(num2)) {
        const resultat = evaluerExpression(num1, num2, operateur);
        setChiffre(resultat.toString());
        setOp("");
        setChiffrePrecedent("");
      } else {
        setChiffre("Erreur");
        setOp("");
      }
    }
  };

  return (
    <div>
      <div className="bloc">
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClickSigne("-")}>-</button>
      </div>
      <div className="bloc">
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClickSigne("+")}>+</button>
      </div>
      <div className="bloc">
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClickSigne("C")}>C</button>
      </div>
      <div className="bloc">
        <button onClick={() => handleClick(0)}>0</button>
      </div>
      <button onClick={calculerResultat}>=</button>
      <div>chiffre : {chiffre === "0" ? "" : chiffre}</div>
      <div>operateur : {operateur}</div>
    </div>
  );
};

export default Calculatrice;
