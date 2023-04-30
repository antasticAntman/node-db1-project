const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const error = {status:400}
  const { name, budget } = req.body
  if (name === undefined || budget === undefined) {
    error.message = 'name and budget are required'
    next(error)
  } else if (typeof name !== 'string'){
    error.message = 'name of account must be string'
    next(error)
  } else if (name.trim().length < 3 || name.trim().length > 100){
    error.message = 'name of account must be between 3 and 100'
    next(error)
  } else if (typeof budget !== 'number' || isNaN(budget)){
    error.message = 'budget of account must be number'
    next(error)
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('Hello there,')
  next()
}

exports.checkAccountId = async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      next({status:404, message: ' account not found'})
    } else {
      req.account = account
      next()
    }
  }
  catch(err){
    next(err)
  }
}
