const ModelUser = require ('../models/model');

const usuarioCtrl = {};

// Iniciar sesión
usuarioCtrl.loginUsu = async (req, res) => {
    try {
        const { nomusu, password } = req.body;
        const respuesta = await ModelUser.findOne({ nomusu, password });

        if (respuesta) {
            res.send('Autenticacón Satisfactoria');
        } else {
            res.status(401).send('Error en la auenticación');
        }
    } catch (error) {
        res.status(500).send('Error en la auenticación');
    }
};

//Create
usuarioCtrl.createUsu = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
};

//Consultar
usuarioCtrl.getUsu = async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
};

//Consultar por ID
usuarioCtrl.getUniqueUsu = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
};

//Actualizar
usuarioCtrl.editUsu = async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta);
};

//Eliminar
usuarioCtrl.deleteUsu = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
};

module.exports = usuarioCtrl;