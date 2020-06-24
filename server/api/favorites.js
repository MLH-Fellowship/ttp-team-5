const router = require('express').Router()
const {Favorite} = require('../db/models')

router.get('/:userId', async (req, res, next) => {
  const {userId} = req.params

  try {
    const favorites = await Favorite.findAll({where: {userId}})

    res.json(favorites)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId', async (req, res, next) => {
  const {userId} = req.params
  const {playerId} = req.body

  try {
    const favorite = await Favorite.create({userId, playerId})

    console.log({favorite})

    res.json(favorite)
  } catch (err) {
    next(err)
  }
})

router.delete('/:userId/:playerId', async (req, res, next) => {
  const {userId, playerId} = req.params

  console.log({userId, playerId})

  try {
    const favorite = await Favorite.destroy({
      where: {userId, playerId},
      returning: true
    })

    console.log({favorite})

    res.json(favorite)
  } catch (err) {
    next(err)
  }
})

module.exports = router
