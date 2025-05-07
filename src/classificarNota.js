// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  let notaConvertida = Number(nota);

  // Verifica se é um número válido entre 0 e 10
  if (isNaN(notaConvertida) || notaConvertida < 0 || notaConvertida > 10) {
    return "Nota inválida";
  }

  return notaConvertida >= 6 ? "Aprovado" : "Reprovado";
}



//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };