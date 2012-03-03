function changeFontSize(to) {
	r = document.getElementsByTagName('body'); 
	r[0].style.fontSize = to + '%';
	sIFR.rollback();
	setSIFR();
}

var pic = false;

function getHeads() {
	if (!pic) {
		
		var heads = document.getElementsByTagName('h1');
		for(var i=0; i < heads.length; i++) {
			heads[i].className += ' txt'
		}
		
		var heads = document.getElementsByTagName('h2');
		for(var i=0; i < heads.length; i++) {
			heads[i].className += 'txt'
		}
		
	}
}



startList = function() {
	sizeSwitcher = document.getElementById("font-size-controls");
	sizeSwitcher.style.display='block';
	getHeads();
	
	if (document.all && document.getElementById) {
		navRoot = document.getElementById("top");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover = function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}
if (window.attachEvent) {window.attachEvent("onload", startList);}
if (window.addEventListener) window.addEventListener('load', startList, false);