const comediaJson = require('./comedia.json')
const cienciaFiccion = require('./cienciaFiccion.json')
const independientesJson = require('./independiente.json')

const getCF = (req, res) => {
    res.json(cienciaFiccion)
}

const getConedia = (req, res) => {
    res.json(comediaJson)
}

const independientes = (req, res) => {
    res.json(independientesJson)
}

module.exports = { getCF, getConedia, independientes }