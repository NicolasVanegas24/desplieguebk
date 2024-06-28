const express = require ('express');
const router = express.Router();
const usuarioCtrl = require ('../controllers/usuario.controller');

router.get('/login', usuarioCtrl.loginUsu);
router.get('/', usuarioCtrl.getUsu);
router.post('/', usuarioCtrl.createUsu);
router.get('/:id', usuarioCtrl.getUniqueUsu);
router.put('/:id', usuarioCtrl.editUsu);
router.delete('/:id', usuarioCtrl.deleteUsu)

module.exports = router;