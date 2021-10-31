const Joi = require('joi')

const id = Joi.number().integer().id();
const fecha = Joi.date();
const value = Joi.number();

const createGsrSchema = Joi.object({
  fecha: fecha.required(),
  value: value.required()
})

const updateGsrSchema = Joi.object({

})

const getGsrSchemaById = Joi.object({
  id: id.required()
})

module.exports = {
  createGsrSchema,
  updateGsrSchema,
  getGsrSchemaById

}
