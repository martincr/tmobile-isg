function setSIFR() {
	if(typeof sIFR == "function"){
//For Headlines
		sIFR.replaceElement(named({sSelector:"h1", sFlashSrc:"js/ta.swf", sColor:"#e20074", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"opaque"}));
	sIFR.replaceElement(named({sSelector:"h2.sub-title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"opaque"}));

//sIFR.replaceElement(named({sSelector:"h3.comment", sFlashSrc:"js/ta.swf", sColor:"#666666", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"opaque"}));


		sIFR.replaceElement(named({ sSelector:".panel .panel-double-link .content h3.title-comment", sFlashSrc:"js/ta.swf", sColor:"#666666", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));
//For Double Panels
		sIFR.replaceElement(named({ sSelector:".panel .panel-double .content h3.title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));
		sIFR.replaceElement(named({ sSelector:".panel .panel-double-link .content h3.title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));
//Offset Double Panels
		sIFR.replaceElement(named({ sSelector:".panel .panel-double .content.offset h3.title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));

//Commented Double panel title
		sIFR.replaceElement(named({ sSelector:".panel .panel-double .content h3.title-comment", sFlashSrc:"js/ta.swf", sColor:"#666666", sBgColor:"#ffffff", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));


//For All Panels		
	sIFR.replaceElement(named({ sSelector:".panel .content h3.title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));		
	sIFR.replaceElement(named({ sSelector:".panel .content.offset h3.title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));		
	sIFR.replaceElement(named({ sSelector:".panel .content.overlap h3.title", sFlashSrc:"js/ta.swf", sColor:"#e20074", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));
//Commented panel title
	sIFR.replaceElement(named({ sSelector:".panel .content h3.title-comment", sFlashSrc:"js/ta.swf", sColor:"#666666", sAltColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));	




		};
}
setSIFR();
