import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState(" ");

  useEffect(() => {
    return () => {
      console.log("O componete foi finalziado");
    };
  });
  useEffect(() => {
    //console.log("O estado de nome está sendo aterado e materia C");
  }, [nome, materiaC]);

  const alteraNome = (evento) => {
    //console.log(evento.target.value);
    setNome((estadoAnterior) => {
      //console.log(estadoAnterior);
      return evento.target.value;
    });
  };

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;
    if (media >= 7) {
      return <p>Olá {nome} Você foi aprovado!</p>;
    } else {
      return <p>Olá {nome} Voce foi Reprovado</p>;
    }
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item} </li>
        ))}
      </ul>

      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota Matéria A"
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota Matéria B"
        onChange={({ target }) => setMateriaB(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota Matéria C"
        onChange={({ target }) => setMateriaC(parseInt(target.value))}
      />
      {renderizaResultado()}
    </form>
  );
};
export default Formulario;
