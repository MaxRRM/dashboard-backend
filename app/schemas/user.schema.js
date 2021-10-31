const Joi = require('joi')

const id = Joi.number().integer().id()//string().uuid();
const nombre = Joi.string().min(10).max(30);
const apellido = Joi.string().min(10).max(30);
const email = Joi.string().email();
const password = Joi.string().min(6);
const activo = Joi.number().integer().min(0).max(1)

const createUserSchema = Joi.object({
  name: nombre.required(),
  apellido: apellido.required(),
  email: email.required(),
  password: password.required(),
  activo: activo
})

const updateUserSchema = Joi.object({
  name: nombre,
  apellido: apellido,
  email: email,
  password: password,
  activo: activo
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema

}
