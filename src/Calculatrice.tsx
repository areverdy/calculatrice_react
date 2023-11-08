import { useCallback, useState } from "react"

const Calculatrice = () => {
    const [chiffre, setChiffre] = useState("")
    const [operateur, setOp] = useState("")
    
    const handleClick = useCallback((num: number) => {
        console.log(num);
        setChiffre((prevChiffre) => (prevChiffre === "0" ? num.toString() : prevChiffre + num.toString()));
    }, []);

    const handleClicksigne = useCallback((signe: string) => {
        console.log(signe);
        if (chiffre !== "") {
            setOp(signe);
            setChiffre("");
          }
        }, [chiffre]);

        const evaluerExpression = (expr: string): string => {
            try {
              return String(parseFloat(eval(expr).toFixed(10)));
            } catch (error) {
              return "Erreur";
            }
          };
        
          const calculerResultat = () => {
            if (operateur !== "" && chiffre !== "") {
              const expression = chiffre + operateur + chiffre;
              const resultat = evaluerExpression(expression);
              setChiffre(resultat);
              setOp("");
            }
          };

    return (
        <div>
            <div className="bloc">
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClicksigne("-")}>-</button>
            </div>
            <div className="bloc">
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>
            <button onClick={() => handleClick(6)}>6</button>
            <button onClick={() => handleClicksigne("+")}>+</button>
            </div>
            <div className="bloc">
            <button onClick={() => handleClick(7)}>7</button>
            <button onClick={() => handleClick(8)}>8</button>
            <button onClick={() => handleClick(9)}>9</button>
            <button onClick={()=> handleClicksigne("C")}>C</button>
            </div>
            <div className="bloc">
            <button onClick={() => handleClick(0)}>0</button>            
            </div>
            <button onClick={calculerResultat}>=</button>
            <div>chiffre : {chiffre === "0" ? "" : chiffre}</div>
            <div>operateur : {operateur}</div>
        </div>

    )
}

export default Calculatrice