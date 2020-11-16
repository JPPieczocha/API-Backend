const Sequelize = require('sequelize')
const rol_usuarios = require('../models').rol_usuarios
const rol = require('../models').rol
const usuarios = require('../models').usuarios

module.exports = {

    create(req, res) {

        //Usuario
        const promiseUser = usuarios.findOne({
            where: {
                dni: req.body.dni
            }
        })

        //Rol
        const promiseRol = roles.findOne({
            where: {
                id: req.body.id_rol
            }
        })

        Promise
        .all([promiseUser, promiseRol])
        .then(responses => {
            return rol_usuarios
                .create({
                    dni: responses[0].dni,
                    id_rol: responses[1].id
                })
                .then(rol_usuarios => res.status(200).send(rol_usuarios))
            }
        )
        .catch(error => res.status(400).send(error))

    }
}