module.exports = function(app, profiles) {
	app.get("/api/friends", function(req, res) {
		//return JSON object of all profiles
		res.json(profiles);
	});

	app.post("/api/friends", function(req, res) {

		//convert scores from strings to ints
		var newProfile = req.body;
		newProfile.scores.forEach(function(value, index, array) {
			array[index] = parseInt(value);
		});

		//COMPATABILITY LOGIC:

		//variables to hold closest match and its score difference
		var bestMatch = "";
		var bestScore = 100;
		
		//compare each other profile to newProfile
		for (var i = 0; i < profiles.length; i++) {
			var scoreDiff = 0;
			//compare each score between the two profiles
			for (var j = 0; j < 10; j++) {
				//find difference between scores (absolute value)
				scoreDiff += Math.abs(newProfile.scores[j] - profiles[i].scores[j]);
			}

			//if difference is less than current best, update current best
			if (scoreDiff <= bestScore) {
				bestScore = scoreDiff;
				bestMatch = profiles[i];
			}
		}
		
		//add newProfile to data set
		profiles.push(newProfile);

		//send best match profile back to client
		res.json(bestMatch);
	});
};