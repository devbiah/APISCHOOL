const express = require('express');
const { getAlunos, createAluno, updateAluno, deleteAluno } = require('../controllers/alunoController');

const router = express.Router();

router.get('/', getAlunos);
router.post('/', createAluno); 
router.put('/:id', updateAluno); 
router.delete('/:id', deleteAluno); 

module.exports = router;
