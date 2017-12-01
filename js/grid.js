var beginDrawBlack = true;
window.addEventListener('DOMContentLoaded', function (){
	var gridSize = 32, bgClass = 'blackBG', el;

	var wrap = document.createElement('div');
	wrap.className = 'squareWrap';

	for (var y = 1; y <= gridSize; y++) {
		for (var x = 1; x <= gridSize; x++) {
			el = document.createElement('div');
			el.className = 'square';
			el.id = 'pix-' + x + '-' + y;
			if (x == 1) el.dataset.isLeft = 'true';
			if (y == 1) el.dataset.isTop = 'true';
			el.addEventListener('mousedown', function (e) {
				window.beginDrawBlack = !e.target.classList.contains(bgClass);
				e.target.classList.toggle(bgClass);
			});
			el.addEventListener('mouseover', function (e) {
				if ([1, 3].includes(e.buttons)) {
					e.target.classList.toggle(bgClass, window.beginDrawBlack);
				}
			});
			wrap.appendChild(el);
		}
		document.body.appendChild(wrap);
	}
});