const comediaJson = require('./comedia.json')
const cienciaFiccion = require('./cienciaFiccion.json')
const independientesJson = require('./independiente.json')
const celularesJson = require('./celulares.json')
const getCF = (req, res) => {
    res.json(cienciaFiccion)
}

const getConedia = (req, res) => {
    res.json(comediaJson)
}

const independientes = (req, res) => {
    res.json(independientesJson)
}

const celulares = (req, res) => {
    res.json(celularesJson)
}

module.exports = { getCF, getConedia, independientes, celulares }