// ------------------------------------------------| Get User Agent
var ag = navigator.userAgent.toLowerCase();
var mac = (ag.indexOf('mac')+1) ? true : false;
var gecko = (ag.indexOf('gecko')+1) ? true : false;
var opera = (ag.indexOf('opera')+1) ? true : false;
var safari = (ag.indexOf('safari')+1) ? true : false;
var ie = ((ag.indexOf('msie')+1) && !opera) ? true : false;
// ------------------------------------------------| Change Font-Size
function changeFZ(size) {
	var fix = '100';
	switch(size) {
	case 1:
		fix =	'100';
		break;
	case 2:
		fix =	(gecko) ? '120' :
				(opera) ? '124' : '120';
		break;
	case 3:
		fix =	(gecko) ? '150' :
				(safari) ? '140' :
				(ie && mac) ? '150' :
				(opera) ? '142' : '135';
		break;
	}
	setFZ(fix);
}
// ------------------------------------------------| Set Font-Size
function setFZ(to) {
	document.getElementsByTagName('body')[0].style.fontSize = to + '%';
	sIFR.rollback();
	setSIFR();
}



startList = function() {
	sizeSwitcher = document.getElementById("font-size-controls");
	sizeSwitcher.style.display = 'block';
		
	if (document.all && document.getElementById) {
		navRoot = document.getElementById("top");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName == "LI") {
				node.onmouseover = function() {
					this.className += " over";
				}
				node.onmouseout=function() {
					this.className = this.className.replace(" over", "");
				}
			}
		}
	}
}
if (window.attachEvent) {window.attachEvent("onload", startList);}
if (window.addEventListener) window.addEventListener('load', startList, false);

// Use for pages which specifically have forms.
// onload = document.forms[0].elements[0].focus();