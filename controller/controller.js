const comediaJson = require('./comedia.json')
const cienciaFiccion = require('./cienciaFiccion.json')
const independientesJson = require('./independiente.json')
const celularesJson = require('./celulares.json')
const clasicasJson = require('./clasicas.json')
const homeJson = require('./home.json')
const getCF = (req, res) => {
    res.json(cienciaFiccion)
}

const getConedia = (req, res) => {
    res.json(comediaJson)
}

const independientes = (req, res) => {
    res.json(independientesJson)
}

const clasicas = (req, res) => {
    res.json(clasicasJson)
}

const celulares = (req, res) => {
    res.json(celularesJson)
}

const home = (req, res) => {
    res.json(homeJson)
}

module.exports = { getCF, getConedia, independientes, celulares, clasicas, home }