document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('[name=auto]').addEventListener('input', function(e) {
		document.querySelector('h1').innerHTML = e.target.value;
	});
});
