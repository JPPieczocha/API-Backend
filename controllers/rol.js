const Sequelize = require('sequelize')
const roles = require('../models').roles

module.exports = {

    //Crear Rol
    create(req, res) {
        return roles
            .create({
                nombre: req.body.nombre
            })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },

    //Listar roles
    listRol(_, res) {
        return roles
            .findAll({})
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },

    //Buscar un rol
    findRol(req, res) {
        return roles
            .findOne({
                where: {
                    id: req.body.id
                }
            })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    }

}