

//DINAMICKi

// $(document).ready(function () {

// 	dinamically created html
// 	var body = document.querySelector('#race');
// 	let container = document.createElement('div');
// 	container.setAttribute('id', 'main');
// 	let counter = document.createElement('span');
// 	counter.classList.add('startRace', 'text-center');
// 	container.appendChild(counter);
// 	let h1Element = document.createElement('h1');
// 	h1Element.classList.add('text-center');
// 	h1Element.innerHTML = 'Car racing game';
// 	container.appendChild(h1Element);

// 	let raceBtn = document.createElement('button');
// 	raceBtn.setAttribute('id', 'raceButton');
// 	raceBtn.classList.add('text-center', 'btn');
// 	raceBtn.textContent = 'Race!';
// 	container.appendChild(raceBtn);

// 	let startOverBtn = document.createElement('button');
// 	startOverBtn.setAttribute('id', 'startButton');
// 	startOverBtn.classList.add('text-center', 'btn');
// 	startOverBtn.textContent = 'Start Over';
// 	container.appendChild(startOverBtn);

// 	body.appendChild(container);

// 	let race = document.createElement('div');
// 	race.classList.add('race');
// 	let raceTrack = document.createElement('img');
// 	raceTrack.classList.add('raceTrack');
// 	raceTrack.src = '/starter-challenge-jQuery/img/raceTrack.jpg';

// 	let car1 = document.createElement('img');
// 	car1.classList.add('car1');
// 	car1.src = '/starter-challenge-jQuery/img/car2.gif';

// 	let car2 = document.createElement('img');
// 	car2.classList.add('car2');
// 	car2.src = '/starter-challenge-jQuery/img/car1.gif';
// 	race.appendChild(car1);
// 	race.appendChild(car2);
// 	race.appendChild(raceTrack);
// 	container.appendChild(race);

// 	let results = document.createElement('div');
// 	results.classList.add('text-center', 'col-md-6');
// 	let h2Element = document.createElement('h2');
// 	h2Element.textContent = 'Results';
// 	results.appendChild(h2Element);

// 	let h3Element = document.createElement('h3');
// 	h3Element.classList.add('col-md-6', 'resultCar1')
// 	h3Element.textContent = 'Car 1';
// 	results.appendChild(h3Element);


// 	let h3ElementTwo = document.createElement('h3');
// 	h3ElementTwo.classList.add('col-md-6', 'resultCar2')
// 	h3ElementTwo.textContent = 'Car 2';
// 	results.appendChild(h3ElementTwo);

// 	container.appendChild(results);



// 	$('#raceButton').on('click', function () {
// 		let counter = 3;
// 		let interval = setInterval(function () {
// 			$('#main').css('opacity', '0.5');
// 			$('.startRace').html(counter);
// 			counter--;
// 			if (counter < 0) {
// 				clearInterval(interval);
// 				$('.startRace').remove();
// 				$('#main').css('opacity', '1');

// 				let carWidth = $(".car1").width();
// 				let raceTrackWidth = $(window).width() - carWidth - 10;
// 				let speed = Math.floor((Math.random() * 5000) + 1);
// 				$('.car1').animate({left: raceTrackWidth}, speed,function(){
// 					finished();
// 					let resultCar1 = document.createElement('span');
// 			resultCar1.classList.add('resultsForCar1', 'col-md-5', 'col-md-offset-1');
// 			resultCar1.textContent = `Finished in: ${position} place with a time of: ${speed} miliseconds!`;
// 					$('.resultsForCar1').html('Finished in: ' + position.textContent + " " + ' place, with the time of: ' + speed + " " + 'miliseconds!').css('display', 'block');
// 			results.appendChild(resultCar1);
// 			container.appendChild(results);


// 				});

// 				let carWidthTwo = $(".car2").width();
// 				let raceTrackWidthTwo = $(window).width() - carWidthTwo - 10;
// 				let speedTwo = Math.floor((Math.random() * 5000) + 1);
// 				$('.car2').animate({left: raceTrackWidthTwo}, speedTwo,function(){
// 					finished();
// 								let resultCar2 = document.createElement('span');
// 			resultCar2.classList.add('resultsForCar2', 'col-md-5', 'col-md-offset-1');
// 			resultCar2.textContent = `Finished in: ${position}, place with a time of: ${speedTwo} miliseconds!`;
// 			results.appendChild(resultCar2);

// 			container.appendChild(results);


// 				});
// 			}
// 		}, 800);


// 		let isFinished = false;
// 		var position = 'first';
// 		function finished(){
// 			if(isFinished == false){
// 					position ='first';
// 					isFinished = true;
// 				}else{
// 					position = 'second';
// 				}
// 			}			


// 			let prevResults = document.createElement('div');
// 			prevResults.classList.add('text-center', 'col-md-6', 'prevRes');
// 			let h3ElementThree = document.createElement('h3');
// 			h3ElementThree.textContent = 'Results from the previous time you played this game:';
// 			prevResults.appendChild(h3ElementThree);


// 			prevResults.appendChild(prevResultsInfo1);
// 			prevResults.appendChild(prevResultsInfo2);

// 			container.appendChild(prevResults);




// 	})
// 	$("#startButton").click(function(){
// 		location.reload()
// });
// });



// SO HTML 

$(document).ready(function () {

	
	function finished() {
		if (isFinished == false) {
			//position = 'first';
			isFinished = true;
			$('#main').css('opacity', 0.5);
			$('.endRace').css('display', 'block');

		} else {
			position = 'second';
			//console.log(position);
			$('#raceButton').removeAttr('disabled');
			$('#startButton').removeAttr('disabled');
		}
	}
	
	let isFinished = false;
	var position = 'first';

	$('#raceButton').on('click', function () {
		$('#raceButton').attr('disabled', true);
		$('#startButton').attr('disabled', true);
		let counter = 3;
		let interval = setInterval(function () {
		$('#main').css('opacity', '0.5');
			$('.startRace').html(counter);
			counter--;
			if (counter < 0) {
				clearInterval(interval);
				$('.startRace').text("");
				$('#main').css('opacity', '1');

				let carWidth = $(".car1").width();
				let raceTrackWidth = $(window).width() - carWidth;
				let speed = Math.floor((Math.random() * 5000) + 1);


				let carWidthTwo = $(".car2").width();
				let raceTrackWidthTwo = $(window).width() - carWidthTwo;
				let speedTwo = Math.floor((Math.random() * 5000) + 1);

				$('.car1').animate({ left: raceTrackWidth }, speed, function () {
					finished();

					let rowOne = document.createElement("tr");
					rowOne.setAttribute("class", "resultsForCar1");
					rowOne.innerHTML += `Finished in: <span class="colorCar1">${position}</span> place with a time of: <span class="colorCar1">${speed}</span> miliseconds.`;
					$(".firstTable").append(rowOne);
					localStorage.setItem('car1position', position);
					localStorage.setItem('car1speed', speed);


					// $('.resultsForCar1').html('Finished in: ' + $({position}) + " " + ' place, with the time of: ' + $({speed}) + " " + 'miliseconds!').css('display', 'block');

				});

				$('.car2').animate({ left: raceTrackWidthTwo }, speedTwo, function () {
					finished();

					let rowTwo = document.createElement("tr");
					rowTwo.setAttribute("class", "resultsForCar2");
					rowTwo.innerHTML += `Finished in: <span class="colorCar2">${position}</span> place with a time of: <span class="colorCar2">${speedTwo}</span> miliseconds.`;
					$(".secondTable").append(rowTwo);
					localStorage.setItem('car2position', position);
					localStorage.setItem('car2speed', speedTwo);


					//$('.resultsForCar2').html('Finished in: ' + position + " " + ' place, with the time of: ' + speedTwo + " " + 'miliseconds!').css('display', 'inline-block')
				});
			}
		}, 800);

	});
	$("#startButton").click(function () {
		$('#main').css('opacity', 1);
		$('.endRace').css('display', 'none');
		isFinished = false;
		position ='first';
		$('.car1').removeAttr('style');
		$('.car2').removeAttr('style');
		visitPage = -1;
		$('.startRace').text("");	
	
	});
	
	var visitPage = localStorage.getItem("counter");
	if (visitPage === null) {
		visitPage = 0;
		$('.h3element').css('display','none');
		$('.prevRes').css('display','none');
	}
	visitPage++;
	console.log(visitPage);
	localStorage.setItem("counter", visitPage);
	if (visitPage != 0) {
		$('.h3element').css('display','block');
		$('.prevRes').css('display','block');
		let rowOne = document.createElement("tr");
		rowOne.classList.add("resultsForCar2",'col-md-12');
	rowOne.innerHTML = `<span class="colorCar1 "> Car1 </span> Finished in: <span class="colorCar1">${localStorage.getItem("car1position")}</span> place with a time of: <span class="colorCar1">${localStorage.getItem("car1speed")}</span> miliseconds.`;
	$(".prevRes").append(rowOne);
	
	let rowTwo = document.createElement("tr");
	rowTwo.classList.add('resultsForCar2','col-md-12');
	rowTwo.innerHTML = `<span class="colorCar2 "> Car2 </span> Finished in: <span class="colorCar2">${localStorage.getItem("car2position")}</span> place with a time of: <span class="colorCar2">${localStorage.getItem("car2speed")}</span> miliseconds.`;
	$(".prevRes").append(rowTwo);
}

console.log(visitPage);
});

