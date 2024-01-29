const AlunosAprovados = alunos => alunos.filter(({
  nota
}) => nota >= 6).map(({
  nome
}) => nome);
const AlunosReprovados = alunos => alunos.filter(({
  nota
}) => nota < 6).map(({
  nome
}) => nome);
const alunos = [{
  nome: 'Caio',
  nota: 4.0
}, {
  nome: 'Agusto',
  nota: 9.0
}, {
  nome: 'Marcus',
  nota: 10
}, {
  nome: 'Lúcio',
  nota: 6.0
}, {
  nome: 'Nero',
  nota: 3.0
}, {
  nome: 'Trajano',
  nota: 7.5
}, {
  nome: 'Cômodo',
  nota: 1.0
}];
const alunosAprovados = AlunosAprovados(alunos);
const alunosReprovados = AlunosReprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovados);
console.log("\nAlunos reprovados:");
console.log(alunosReprovados);