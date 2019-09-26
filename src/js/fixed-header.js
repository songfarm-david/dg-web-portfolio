/* get the height of the header on the fly and calculate main element's top margin */

export default function setMainMargin() {
	alert('shitstain')
	let headerHeight = document.getElementById('site-header').offsetHeight
	console.log(headerHeight);
	let mainEl = document.getElementsByTagName('main')[0]
	console.log(mainEl);
	mainEl.style.marginTop = headerHeight
	console.log(mainEl.style.marginTop);

}
