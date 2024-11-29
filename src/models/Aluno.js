const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  matricula: { type: String, unique: true, required: true },
  turma: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Aluno', AlunoSchema);
