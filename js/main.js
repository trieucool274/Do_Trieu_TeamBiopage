(() => {
	console.log('fired');

	// variables at the top
	const sigils = document.querySelectorAll('#navList'),
		  banner = document.querySelector('#houseImages'),
			lightBox = document.querySelector(".lightbox"),
			houseName = document.querySelector('.h1');

	const houseInfo = [
		['Aaron', `I'm a current Fanshawe student, I have study in Fanshawe for 2 year through different course and Interactive Media design is my current one. I used to take Music Industrial Art as a major but I have changed my mind after 1 year then move to downtown camouc to continue on Interactive media design` ], // houseInfo[1]
		['Linh', ` Linh also a curren Fanshawe student with the motivation to be a designer on many sections. she also have two cats and two guinea pigs. She gruaduate in Mississauga then  ove to London to study Fanshawe as a designer.`],
	];

	function animateBanner(event) {
		if (event.target.className.includes('sigilContainer')) {
			let multiplier = event.target.dataset.offset,
				offsetWidth = 600;
			// 0, 600, 1200, 1800px depending on the math
			banner.style.right = `${multiplier * offsetWidth}px`;
				}
			}

			function popLightBox(event) {
				// change the text content of the page
				const vid = lightBox.querySelector('video');
				//add a class to open the lightbox
				if (event.target.className.includes('sigilsContainer')) {
				houseName.textContent = `house ${houseInfo[event.target.dataset.offset][0]}`;
				houseInfo.textContent = houseInfo[event.target.dataset.offset][1];
				lightBox.classList.add('show-lightbox');
				vid.play();

				lightBox.querySelector('.close').addEventListener('click', () => {
					vid.pause();

					vid.currentTime = 0;

					lightBox.classList.remove('show-Lightbox');
				})
			}
		}
	sigils.forEach(sigil => sigil.addEventListener('click',animateBanner));
	sigils.forEach(sigil => sigil.addEventListener('click',popLightBox));
		//sigils.addEventListener('click', popLightBox);
})();
