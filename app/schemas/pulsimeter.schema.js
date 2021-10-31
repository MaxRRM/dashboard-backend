const Joi = require('joi')

const id = Joi.number().integer().id();
const fecha = Joi.date();
const spo2 = Joi.number();
const pulso = Joi.number().integer();

const createPulsimeterSchema = Joi.object({
  fecha: fecha.required(),
  spo2: spo2.required(),
  pulso: pulso.required()
})

const updatePulsimeterSchema = Joi.object({
  fecha: fecha,
  spo2: spo2,
  pulso: pulso
})

const getPulsimeterSchemaById = Joi.object({
  id: id.required()
})

module.exports = {
  createPulsimeterSchema,
  updatePulsimeterSchema,
  getPulsimeterSchemaById

}
