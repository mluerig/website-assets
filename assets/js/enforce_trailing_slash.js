if (window.location.pathname.endsWith('/') === false) {
	var url = window.location.protocol + '//' + 
			window.location.host + 
			window.location.pathname + '/' + 
			window.location.search;
	window.location.reload();
	// window.history.replaceState(null, document.title, url);
}
