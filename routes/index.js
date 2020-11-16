//Controllers
const usuariosController = require('../controllers/usuarios')
const rolController = require('../controllers/rol')
const rolUserController = require('../models/rol_usuarios')

module.exports = (app) => {
    
    app.get('/api', (_, res) => res.status(200).send({
		message: 'Estás en /routes/index.js',
    }));
    
    //Controlador usuario
    app.post('/api/users/crear', usuariosController.create)
    app.get('/api/users/buscar', usuariosController.findUser)
    app.get('/api/users/login', usuariosController.loginUser)

    //Controlador roles
    app.post('/api/rol/crear', rolController.create)
    app.get('/api/rol/find', rolController.findRol)
    app.get('/api/rol/list', rolController.listRol)

    //Controlador usuario-rol
    app.post('/api/roluser/crear', function(req, res) {rolUserController.create})
}