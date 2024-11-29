const Aluno = require('../models/Aluno');

exports.getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.status(200).json(alunos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar alunos', error: err.message });
  }
};

exports.createAluno = async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).json(aluno);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar aluno', error: err.message });
  }
};

exports.updateAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(aluno);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar aluno', error: err.message });
  }
};

exports.deleteAluno = async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Aluno removido com sucesso' });
  } catch (err) {
    res.status(400).json({ message: 'Erro ao remover aluno', error: err.message });
  }
};
