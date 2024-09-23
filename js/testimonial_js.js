const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("img/bijeesh.png")',
		name: "Bijeesh",
		profession: " 10 KW On-grid domestic SPV system",
		description:
			"Choosing Palmyra Energy Solutions  was one of the best decisions we made for our home solar power plant. Their comprehensive approach and in-depth knowledge of solar technology made the entire process smooth and efficient. Their support didn’t end with installation; they provided ongoing monitoring and support, ensuring our solar investment continues to deliver maximum benefits. We highly recommend their services to anyone considering solar energy."
	},

	// {
	// 	photo:
	// 		"url('img/rineesh.png')",
	// 	name: "Jiijith",
	// 	profession: "10KW domestic SPV system",
	// 	description:
	// 		"Thanks to Palmyra Energy Solutions, our solar panels are not just a sustainable energy solution but a reliable one too. Their regular maintenance checks and detailed audits have been instrumental in extending the lifespan of our panels and maximizing their efficiency. Their knowledgeable technicians are always responsive and provide clear insights into the performance of our system. Choosing them for our solar maintenance needs was a smart decision that continues to pay off in terms of energy savings and peace of mind."
	// },

	{
		photo:
			"url('img/rineesh.png')",
		name: "Rineesh",
		profession: "15 KW commercial SPV system AMC",
		description:
			"We entrusted Palmyra Energy Solutions with the upkeep and assessment of our solar panel system, and we couldn't be more pleased with their service. Their team conducted a thorough audit, identifying areas for improvement and ensuring our system operates at peak efficiency. Their proactive maintenance schedule has prevented potential issues and optimized our energy output. We appreciate their expertise and dedication to keeping our solar investment performing at its best."
	},

	{
		photo:
			"url('img/prince.png')",
		name: "Prince Thomas ",
		profession: "20 KW On-grid commercial SPV system",
		description:
			"Working with Palmyra Energy Solutions was a game-changer for us. Their expert team not only helped us navigate the complexities of solar panel installation but also tailored a solution that perfectly fit our needs. From initial consultation to final implementation, their professionalism and dedication were evident. Thanks to their guidance, we now have a sustainable energy solution that saves us money and aligns with our environmental goals."
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 2) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 2;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

// surpriseMeBtn.addEventListener("click", () => {
// 	if (chicken.style.opacity === "0") {
// 		chicken.style.opacity = "1";
// 		imgDiv.classList.add("move-head");
// 		surpriseMeBtn.innerText = "Remove the chicken";
// 		surpriseMeBtn.classList.remove("surprise-me-btn");
// 		surpriseMeBtn.classList.add("hide-chicken-btn");
// 		isChickenVisible = true;
// 	} else if (chicken.style.opacity === "1") {
// 		chicken.style.opacity = "0";
// 		imgDiv.classList.remove("move-head");
// 		surpriseMeBtn.innerText = "Surprise me";
// 		surpriseMeBtn.classList.add("surprise-me-btn");
// 		surpriseMeBtn.classList.remove("hide-chicken-btn");
// 		isChickenVisible = false;
// 	}
// });

window.addEventListener("resize", () => {
	description.style.height = "100%";
});
