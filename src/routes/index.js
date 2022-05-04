const express = require('express');
const pacienteController = require("../controller/atendimentoController")
const psicologoController = require("../controller/psicologoController")
const atendimentoController = require("../controller/atendimentoController")

const routes = express.Router();

routes.get('/pacientes', pacienteController.buscarPaciente)
routes.get('/pacientes/:id', pacienteController.buscarPacienteId)
routes.post('/pacientes', pacienteController.cadastrarPaciente)
routes.put('/pacientes/:id', pacienteController.alterarPaciente)
routes.delete('/pacientes/:id', pacienteController.deletarPaciente)

routes.get('/psicologo', psicologoController.buscarPsicologo)
routes.get('/psicologo/:id', psicologoController.buscarPsicologoId)
routes.post('/psicologo', psicologoController.cadastrarPsicologo)
routes.put('/psicologo/:id', psicologoController.alterarPsicologo)
routes.delete('/psicologo/:id', psicologoController.deletarPsicologo)

routes.get('/atendimentos', atendimentoController.buscarAtendimento)
routes.get('/atendimentos/:id', atendimentoController.buscarAtendimentoId)
routes.post('/atendimentos', atendimentoController.cadastrarAtendimento)


module.exports = routes;