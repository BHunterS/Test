"use strict";

function slider() {
	let position = 0;
	const slidesToShow = 1;
	const slidesToScroll = 1;
	const container = document.querySelector('.banner__inner');
	const track = document.querySelector('.banner__items');
	const btnPrev = document.querySelector('.btn-prev');
	const btnNext = document.querySelector('.btn-next');
	const items = document.querySelectorAll('.banner__item');
	const itemsCount = items.length;
	const itemWidth = (container.clientWidth) / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	items.forEach((item) => {
		item.style.minWidth = `${itemWidth}px`;
	});

	btnNext.addEventListener('click', () => {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	btnPrev.addEventListener('click', () => {
		const itemsLeft = Math.abs(position) / itemWidth;

		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	const setPosition = () => {
		track.style.transform = `translateX(${position}px)`;
	};

	const checkBtns = () => {
		btnPrev.disabled = position === 0;
		btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;

		if (btnPrev.disabled) {
			btnPrev.style.color = '#ccc';
		} else {
			btnPrev.style.color = '#fff';
		};

		if (btnNext.disabled) {
			btnNext.style.color = '#ccc';
		} else {
			btnNext.style.color = '#fff';
		};

	};

	checkBtns();
}

function tabs() {

	const movePosition = 100;
	const tabsItems = document.querySelectorAll('.tabs__item');
	const tabsCount = tabsItems.length;
	const activeLine = document.querySelector('.tabs__active-line');
	const tabsObjs = document.querySelectorAll('.tabs__obj');

	for (let i = 0;i < tabsCount;i++) {
		tabsItems[i].addEventListener('click', () => {
			activeLine.style.transform = `translateX(${i * movePosition}%)`;
			tabsObjs.forEach((item) =>{
				item.classList.remove('active');
			});
			tabsObjs[i].classList.add('active');
		});
	};
}

function menu() {
	let header = document.querySelectorAll('[data-scroll]');
	const home = document.querySelector('section.banner');
	const present = document.querySelector('section.present');
	const tabs = document.querySelector('section.tabs');
	const find = document.querySelector('section.find');
	const projects = document.querySelector('section.projects');
	const comment = document.querySelector('section.comment');
	const main = document.querySelector('main');
	const all = [home, present, tabs, projects, comment];

	header.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();

			let elementID;

			for(let i = 0;i < header.length;i++){
				if(item == header[i]) {
					elementID = all[i];
				};
			};

			let elementOffset = elementID.offsetTop;

			elementID.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});
}

function run() {
	menu();
	slider();
	tabs();
}

run();

