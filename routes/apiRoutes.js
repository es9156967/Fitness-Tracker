const Workout = require('../models/Workout');

module.exports = function (app) {
	app.get('/api/workouts', (req, res) => {
		Workout.find()
			.sort({ _id: -1 })
			.limit(1)
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	app.post('/api/workouts', (req, res) => {
		Workout.create({})
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	app.put('/api/workouts/:id', (req, res) => {
		Workout.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } })
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	app.get('/api/workouts/range', (req, res) => {
		Workout.find({})
			.then((result) => {
				console.log(result);
				res.json(result);
			})
			.catch((err) => {
				console.log(err);
			});
	});
};
