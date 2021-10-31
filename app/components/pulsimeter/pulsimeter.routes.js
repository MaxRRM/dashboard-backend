const express = require('express');
const router = express.Router();

const pulsimeterController = require('./pulsimeter.controller')
const controller = new pulsimeterController();
// const  validatorHandler = require('../../middlewares/validatorHandler');
//const { createUserSchema, updateUserSchema, getUserSchema } = require('../../schemas/user.schema')

router.get('/all',async (req, res, next) => {
  try{
    const pulsimeters = await controller.findAll();
    res.status(200).json(pulsimeters)
  }
  catch(err){
    next(err)
  }
});

router.get('/:id',
  //validatorHandler(getUserSchema, 'params'),
  async (req,res,next) => {
    const {id} = req.params;
    try{
      const pulsimeter = await controller.findOne(id);
      res.json(pulsimeter)
    }catch(err){
      next(err)
    }
  }
);

router.post('/register',
  //validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newPuls = await controller.create(body)
      res.status(201).json(newPuls)
    }
    catch(err){
      next(err)
    }
  }
);

router.patch('/:id/personal-data',
  // validatorHandler(getUserSchema, 'params'),
  // validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try{
      const {id} = req.params
      const body = req.body
      const changedPuls = await controller.update(id, body);
      res.status(200).json(changedPuls)
    }
    catch(err){
      next(err)
    }
  }
);

router.delete('/:id',
  async (req, res, next) => {
    try{
      const {id} = req.params
      const deletedPuls = await controller.delete(id)
      res.json(deletedPuls)
    }
    catch(err){
      next(err)
    }
  }
);

module.exports = router;
