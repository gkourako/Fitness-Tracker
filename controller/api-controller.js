const router = require("express").Router()

const Workout = require("../Models/workout")

router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(workouts=> res.json(workouts))
  .catch(err => res.json(err))
})

router.get("/api/workouts/range", (req, res) => {
  Workout.find().limit(7)
  .then(workouts=> res.json(workouts))
  .catch(err => res.json(err))
})

router.post("/api/workouts", (req,res)=>{
  Workout.create({})
  .then(workout => res.json(workout))
  .catch(err=> res.json(err))
})

router.put("/api/workouts/:id", (req,res)=> {
  Workout.findByIdAndUpdate(req.params.id, {
    $push:{exercises: req.body}
  },{
    new: true,
    runValidators: true, 
  })
  .then(workouts => res.json(workouts))
  .catch(err => res.json(err))
})
module.exports = router;