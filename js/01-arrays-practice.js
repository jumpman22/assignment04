/* eslint-env browser */
//STEP 1
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King'];
//window.console.log(movies[1]);
//STEP 2
//var movies = new Array(5);
//movies[0] = ('Top Gun');
//movies[1] = ('Rocky');
//movies[2] = ('Coco');
//movies[3] = ('Alien');
//movies[4] = ('Transformers');
//window.console.log(movies[0]);
//STEP 3
//var movies = new Array(5);
//movies[0] = ('Top Gun');
//movies[1] = ('Rocky');
//movies[2] = ('Coco');
//movies[3] = ('Alien');
//movies[4] = ('Transformers');
//movies.splice(4, 0, 'Armageddon');
//window.console.log(movies.length);
//STEP 4
//var movies = [];
//movies[0] = ('Top Gun');
//movies[1] = ('Rocky');
//movies[2] = ('Coco');
//movies[3] = ('Alien');
//movies[4] = ('Transformers');
//movies.shift();
//windows.cosole.log(movies);
//STEP 5
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//for(var i = 0; i <= movies.length; i++) {
//    window.console.log(movies[i]);
//}
//STEP 6
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//var x;
//for(x in movies) {
//    'use strict';
//    window.console.log(movies[x]);
//}
//STEP 7
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//var x;
//for(x in movies) {
//    'use strict';
//    movies.sort();
//    window.console.log(movies[x]);
//}
//STEP 8
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//var leastFavMovies = ['Sex and the City', '50 Shades of Grey', 'Knocked Up'];
//window.console.log('Movies I like:\n\n');
//for(var i = 0; i <= movies.length; i++) {
//    window.console.log(movies[i]);
//}
//window.console.log('...\n\n' + 'Movies I regret watching:\n\n');
//for(x in leastFavMovies) {
//    'use strict';
//    window.console.log(leastFavMovies[x]);
//}
//window.console.log('...');
//STEP 9
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//var leastFavMovies = ['Sex and the City', '50 Shades of Grey', 'Knocked Up'];
//movies = movies.concat(leastFavMovies);
//movies.sort();
//window.console.log(movies.reverse());
//STEP 10
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//var leastFavMovies = ['Sex and the City', '50 Shades of Grey', 'Knocked Up'];
//movies = movies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//window.console.log(movies.pop());
//STEP 11
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//var leastFavMovies = ['Sex and the City', '50 Shades of Grey', 'Knocked Up'];
//movies = movies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//window.console.log(movies.shift());
//STEP 12
//var movies = ['Top Gun', 'Karate Kid', 'Rocky', 'Godfather', 'Lion King', 'American Me', 'Casino'];
//var leastFavMovies = ['Sex and the City', '50 Shades of Grey', 'Knocked Up'];
//movies = movies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//movies.indexOf('Sex and the City');
//movies.indexOf('Knocked Up');
//movies.indexOf('50 Shades of Grey');
//movies[1] = 'Goonies';
//movies[4] = 'Batman';
//movies[9] = 'Weekend at Bernies';
//STEP 13
// var employee1 = [];
// employee1["id"] = 934;
// employee1["name"] = "Lucy";
// employee1["title"] = "CEO";
// employee1["department"] = "Marketing";

// var employee2 = [];
// employee2["id"] = 876;
// employee2["name"] = "Mike";
// employee2["title"] = "Janitor";
// employee2["department"] = "Operations";

// var employees = [employee1, employee2];
// window.console.log(employees[1].name);

//STEP 14
// var employee1 = [];
// employee1["id"] = 934;
// employee1["name"] = "Lucy";
// employee1["title"] = "CEO";
// employee1["department"] = "Marketing";

// var employee2 = [];
// employee2["id"] = 876;
// employee2["name"] = "Mike";
// employee2["title"] = "Janitor";
// employee2["department"] = "Operations";

// var employees = [employee1, employee2];

// for(var i = 0; i < employees.length; i++) {
// 	console.log(employees[i].name);
// }
//STEP 15
//var employee1 = [];
//employee1["id"] = 934;
//employee1["name"] = "Lucy";
//employee1["title"] = "CEO";
//employee1["department"] = "Marketing";
//employee1["employed"] = true;
//
//var employee2 = [];
//employee2["id"] = 876;
//employee2["name"] = "Mike";
//employee2["title"] = "Janitor";
//employee2["department"] = "Operations";
//employee2["employed"] = true;
//
//var employee3 = [];
//employee3["id"] = 876;
//employee3["name"] = "Sarah";
//employee3["title"] = "Accountant";
//employee3["department"] = "Finance";
//employee3["employed"] = false;
//
//var employees = [employee1, employee2, employee3];
//
//for(var i = 0; i < employees.length; i++) {
//	if(employees[i].employed === true)
//	console.log(employees[i].name);
//}
//STEP 16
//var favMovies = [["Godfather", 5],["Friday Night Lights", 4],["American Me", 1],["Coco", 3], ['Casino', 5]];
//var titles = favMovies.filter(function(item) {
//    return typeof item[0] === "string";
//});
//titles.forEach(function (item) {
//window.console.log(item[0]);
//});
//STEP 17
// var employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
// var showEmployee = function(x) {
// 'use strict';		
// 	console.log('Employees:\n\n');
// 	for(var i = 0; i < x.length; i++) {
// 		window.console.log(x[i]);
// 	}
// }
// showEmployee(employees);
//STEP 18
//function filterValues(arr) {
//  arr = arr.filter(itemFilters);
//  return arr;
//}
//
//function itemFilters(value) {
//  if(value !== false || value !== null || value !== 0 || value !== "") {
//    return value;
//  }
//}
//
//console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 19
// function random(arr) {
// 	var randomNum = Math.floor(Math.random()*arr.length);
// 	window.console.log(arr[randomNum]);
// }
//STEP 20
// function max(arr){
// 	'use strict';
// 	var max = arr[0];
// 	for(var i = 1; i < arr.length; i++){
// 		if(arr[i] > max){
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// }