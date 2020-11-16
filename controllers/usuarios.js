const usuarios = require('../models').usuarios
const Sequelize = require('sequelize')

module.exports = {

    //Crear usuario
    create(req, res) {
        return usuarios
            .create({
                dni: req.body.dni,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                mail: req.body.mail,
                password: req.body.password
            })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error))
    },

    //Buscar un usuario
    findUser(req, res) {
        return usuarios
            .findOne({
                where: {
                    dni: req.body.dni
                }
            })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error))
    },

    //Iniciar sesión
    loginUser(req, res) {
        return usuarios
            .findOne({
                where: {
                    mail: req.body.mail,
                    password: req.body.password
                }
            })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error))
    }

}