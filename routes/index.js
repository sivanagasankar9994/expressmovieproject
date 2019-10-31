// app.get("/", function(req, res) {
//     res.render("home",{
//         title:'jalukoori',
//         movies:['The First Movie','The Second Movie','The Third Movie']
//     });
//   });
//   // movie single page

//   app.get('/star_wars_episode/:episode_number?',function(req,res){
//       var episode_number = req.params.episode_number;
//       res.send('<h1>The is the page for episode</h2>'+episode_number)
//   })

//   // not found
//   app.get("*", function(req, res) {
//       res.send("<h2>Not Found Page</h2>");
//     });

//   app.get("/darth", function(req, res) {
//       res.send("Hello jalukoori sankar");
//     });

var moviesJSON = require("../movies.json");

exports.home = function(req, res) {
  var movies = moviesJSON.movies;
  // var moviesPosters = [];
  // for (var i = 0; i < movies.length; i++) {
  //    moviesPosters = moviesPosters.concat(movies[i].poster);
  // }
  res.render("home", {
    // title: "jalukoori",
    // movies: ["The First Movie", "The Second Movie", "The Third Movie"]
    title: "Star Wars Movies",
    movies: movies,
    // moviesPosters:moviesPosters
  });
};
// // movie single page

// exports.movie_single = function(req, res) {
//   var episode_number = req.params.episode_number;
//   var movies = moviesJSON.movies;
//   // res.send("<h1>The is the page for episode</h2>" + episode_number);
//   res.send('movie_single',{
//     movies:movies
//   })
// };
// Movie-single route
exports.movie_single = function(req, res) {
	var episode_number = req.params.episode_number;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number >= 1 && episode_number <= 6) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;
		
		res.render('movie_single', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

// not found
exports.notFound = function(req, res) {
  res.send("<h2>Not Found Page</h2>");
};
