const Sequelize = require('sequelize')
const rol = require('../models').rol

module.exports = {

    //Crear Rol
    create(req, res) {
        return rol
            .create({
                nombre: req.body.nombre
            })
            .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error))
    },

    //Listar roles
    listRol(_, res) {
        return rol
            .findAll({})
            .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error))
    },

    //Buscar un rol
    findRol(req, res) {
        return rol
            .findOne({
                where: {
                    id: req.body.id
                }
            })
            .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error))
    }

}