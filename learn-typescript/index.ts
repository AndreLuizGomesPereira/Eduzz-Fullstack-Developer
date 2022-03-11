// intefaces para classificar
interface Animal {
  nome: string;
  tipo: "Terrestre" | "Aquático";
  domestico: boolean;
  executar_movimento(paraFrente: number): void;
}

interface Felino extends Animal {
  cor: string;
}

interface Canino extends Animal {
  porte: "pequeno" | "medio" | "grande";
}

// types para realizar junções
type Domestico = Felino | Canino;

const animal: Domestico = {
  domestico: true,
  nome: "Cachorro",
  tipo: "Terrestre",
  porte: "medio",
  executar_movimento: (paraFrente) =>
    `${animal.nome} andou ${paraFrente} metros`,
};

/* const animal: Animal = {
  nome: "Tigre",
  tipo: "Terrestre",
  executar_movimento: (paraFrente) =>
    `${animal.nome} andou ${paraFrente} metros`,
};

const felino: Felino = {
  nome: "Pantera",
  tipo: "Terrestre",
  cor: "Preto",
  executar_movimento: (paraFrente) =>
    `${felino.nome} andou ${paraFrente} metros`,
};
 */