// types

// intefaces auxilia no desenvolvimento para preparar ao longo do código
interface Animal {
  nome: string;
  tipo: "Terrestre" | "Aquático";
  executar_movimento( paraFrente: number): void;
}

interface Felino extends Animal {
  cor: string;
}

const animal: Animal = {
  nome: "Tigre",
  tipo: "Terrestre",
  executar_movimento: (paraFrente) => (`${animal.nome} andou ${paraFrente} metros`),
    
};



const felino: Felino = {
  nome: "Pantera",
  tipo: "Terrestre",
  cor: "Preto",
  executar_movimento: (paraFrente) => (`${felino.nome} andou ${paraFrente} metros`),
};

function soma(a: number, b: number) {
  return a + b;
}
