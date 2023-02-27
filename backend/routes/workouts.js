const express = require('express')
const controllers = require('../controllers/workoutController')
const router = express.Router() //we use router because the routes will be exported

//GET all wrokouts
router.get('/', controllers.getWorkouts)

//GET a single workout
router.get('/:id', controllers.getWorkout)

//POST a workout
router.post('/', controllers.createWorkout)

//DELETE a workout
router.delete('/:id', controllers.deleteWorkout)

//UPDATE a workout
router.patch('/:id', controllers.updateWorkout)

module.exports = router