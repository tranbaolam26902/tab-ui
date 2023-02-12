const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabElements = $$('.tab-item');
const paneElements = $$('.pane-item');
const line = $('.line');

const main = () => {
	activeDefaultTab();
};

const activeDefaultTab = () => {
	const tabActive = $('.tab-item.active');
	line.style.left = tabActive.offsetLeft + 'px';
	line.style.width = tabActive.offsetWidth + 'px';
};

tabElements.forEach((tabElement, index) => {
	tabElement.onclick = () => {
		$('.tab-item.active').classList.remove('active');
		$('.pane-item.active').classList.remove('active');
		tabElement.classList.add('active');
		paneElements[index].classList.add('active');
		line.style.left = tabElement.offsetLeft + 'px';
		line.style.width = tabElement.offsetWidth + 'px';
	};
});

main();
