/* $Id: general.js,v 1.1 2006/04/25 15:17:49 nlastukh Exp $ */
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
	rememberFZ(to);
}

// ------------------------------------------------| Remember Font-Size
function rememberFZ(value) {
   var today = new Date();
   var expires = new Date();
   expires.setTime(today.getTime() + 1000*60*60*24*365);
   setCookie('FZ',value,expires);
}

// ------------------------------------------------| Check Font-Size
function checkFZ() {
	if(getCookie('FZ') != '') {
		setFZ(getCookie('FZ'));
	}
}

// ------------------------------------------------| Set Cookie
function setCookie(name,value,expire) {
	document.cookie = name + "=" + escape(value)
	+ ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
	+ "; path=/";
}

// ------------------------------------------------| Get Cookie
function getCookie(Name) {
	var search = Name + '=';
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = document.cookie.indexOf(';', offset);
			if (end == -1) 
				end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		}
	}
	return '';
}

// ------------------------------------------------| StartList

var listMenu = new FSMenu('listMenu',true,'visibility','visible','hidden');
listMenu.cssLitClass = 'hi';
addEvent(window,'load',new Function('listMenu.activateMenu("nav")'));

startList = function() {
	checkFZ();
	document.getElementById("font-size-controls").style.display = 'block';
}	
/*	
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
*/

/*
if (window.attachEvent) {window.attachEvent("onload", startList);}
if (window.addEventListener) window.addEventListener('load', startList, false);
*/

if (typeof window.addEventListener != 'undefined')
{
	window.addEventListener('load', startList, false); //.. gecko, safari, konqueror and standard
}
else if (typeof document.addEventListener != 'undefined')
{
	document.addEventListener('load', startList, false); //.. opera 7
}
else if (typeof window.attachEvent != 'undefined')
{
	window.attachEvent('onload', startList); //.. win/ie
}
else
{
	window.onload = startList; //.. mac/ie5
}


function switcher(which,whichLevel)
{
	var form = document.getElementById(which);
	var level = document.getElementById(whichLevel);
	if(level.className == 'show') {
		form.className = form.className.replace('off','');
		level.className = 'hide';
	} else {
		form.className += ' off';
		level.className = 'show';
	}
	return false;
}