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

    // async buscarPacienteId(req,res){
    //     try{
    //         const id = await Paciente.findByPk();
    //         res.status(200).json(pacientes)
    //     }
    // catch (error) {
    //     res.status(500).json('Erro ao recuperar dados')
    // }
    // },
    async buscarPeloId(req, res){
        //logica normal: select * com where do id
        const idFilme = req.params['id'];
        try{
            const filme = await Filmes.findByPk(idFilme);
            if (filme){ // filme é diferente de undefined
                res.status(200);
                res.json(filme);
            }
            else{
                res.status(404);
                res.send("Filme de identificação "+idFilme+" não encontrado")
            }
        }
        catch(error){
            res.status=(500);
            res.send("Erro ao recuperar dados do banco")
        }
    },

}



routes.get('/pacientes', pacienteController.buscarPaciente)
routes.get('/pacientes/:id', pacienteController.buscarPacienteId)
routes.post('/pacientes', pacienteController.cadastrarPaciente)
routes.put('/pacientes/:id', pacienteController.alterarPaciente)
routes.delete('/pacientes/:id', pacienteController.deletarPaciente)


module.exports = pacienteController;