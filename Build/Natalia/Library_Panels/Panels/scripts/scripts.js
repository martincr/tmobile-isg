var _POPUP_FEATURES = 'location=0, statusbar=0, scrollbar=yes, menubar=0, width=610, height=400, top=100, left=100';
 
function popupWindow(popupUrl) { 
	var url = popupUrl.href;  
	var theWindow = window.open(url, '_blank', _POPUP_FEATURES); 
	theWindow.focus(); 
	return false; 
}

function loadPage(value) {
location.href=value;
}
