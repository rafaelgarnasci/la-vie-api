const {Paciente} = require("../model")



const pacienteController ={
    async buscarPaciente(req,res){
        try{
            const pacientes = await Paciente.findAll();
            res.status(200).json(pacientes)
        }
    catch (error) {
        res.status(500).json('Erro ao recuperar dados')
    }
    },

    async buscarPacienteId(req,res){
        try{
            const {id} = req.params;


            const pacienteId = await Paciente.findByPk(id);

            if (pacienteId == null) {
                res.status(404).json("Id não encontrado");
            }
            res.status(200).json(pacienteId)

        } catch (error) {
        res.status(404).json('Erro ao recuperar dados')
    }
    },

    async cadastrarPaciente(req,res){
        try{
           const {nome, email, idade} = req.body;
           const novoPaciente = await Paciente.create({
               nome,
               email,
               idade
           });
           res.status(201).json(novoPaciente)

        } catch (error) {
        res.status(400).json('Erro ao cadastrar paciente')
    }
    },

    async alterarPaciente(req,res) {
        try {
            const {id} = req.params;
            const {nome, email, idade} = req.body;

            await Paciente.update({
                nome,
                email,
                idade
            },
                {
                    where: {
                        id
                    }
                }
            );
                const alterarPaciente = await Paciente.findByPk(id);
                if (pacienteId == null) {
                    res.status(404).json("Id não encontrado");
                }
                res.status(200).json(alterarPaciente);

        } catch (error) {
            res.status(400).json("Erro ao alterar paciente")
        }
    },

    async deletarPaciente(req,res) {
        try {
            const {id} = req.params;
            const pacienteId = await Paciente.findByPk(id);
            if (pacienteId == null) {
                res.status(404).json("Id não encontrado");
            };

            await Paciente.destroy({
                where: {
                    id
                }
            });
            res.status(204)

        } catch(error) {
            res.status(404).json("id não encontrado")
        }
    }

}

// routes.get('/pacientes', pacienteController.buscarPaciente)
// routes.get('/pacientes/:id', pacienteController.buscarPacienteId)
// routes.post('/pacientes', pacienteController.cadastrarPaciente)
// routes.put('/pacientes/:id', pacienteController.alterarPaciente)
// routes.delete('/pacientes/:id', pacienteController.deletarPaciente)


module.exports = pacienteController;