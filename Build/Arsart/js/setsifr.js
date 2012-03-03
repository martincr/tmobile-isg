function setSIFR() {
	if(typeof sIFR == "function"){
//For Headlines
		sIFR.replaceElement(named({sSelector:"h1", sFlashSrc:"js/ta.swf", sColor:"#e20074", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"opaque"}));
	sIFR.replaceElement(named({sSelector:"h2.sub-title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"opaque"}));

sIFR.replaceElement(named({sSelector:"h3.comment", sFlashSrc:"js/ta.swf", sColor:"#666666", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"opaque"}));


//For Double Panels
//		sIFR.replaceElement(named({ sSelector:"div.panel-double .offset h2.title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sAltColor:"#333333", nPaddingTop:24, sWmode:"transparent"}));
		
//For All Panels		
//		sIFR.replaceElement(named({ sSelector:".panel .overlap h2", sFlashSrc:"js/ta.swf", sColor:"#e20074", sAltColor:"#333333", sWmode:"transparent"}));		
//		sIFR.replaceElement(named({ sSelector:".panel .offset h2", sFlashSrc:"js/ta.swf", sColor:"#e20074", sAltColor:"#333333", sWmode:"transparent"}));		
//		sIFR.replaceElement(named({ sSelector:".panel h2", sFlashSrc:"js/ta.swf", sColor:"#e20074", sAltColor:"#333333", sWmode:"transparent"}));
		};
}
setSIFR();
