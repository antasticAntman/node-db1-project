const router = require('express').Router()
// const md = require('./accounts-middleware')
const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload
} = require('./accounts-middleware')

const Account = require('./accounts-model')


router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll()
    res.status(200).json(accounts)
  }
  catch (err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  res.status(200).json(req.account)
})

router.post('/',
checkAccountPayload,
checkAccountNameUnique, 
async(req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('created a new post')
  }
  catch (err) {
    next(err)
  }
})

router.put('/:id',
checkAccountId,
checkAccountNameUnique,
checkAccountPayload,
 (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('updated new post')
  }
  catch (err) {
    next(err)
  }
});

router.delete('/:id',checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('deleted post')
  }
  catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
