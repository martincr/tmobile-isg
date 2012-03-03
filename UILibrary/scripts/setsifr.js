function setSIFR() {
	if(typeof sIFR == "function"){
//For Headlines
		sIFR.replaceElement(named({sSelector:"h1", sFlashSrc:"../scripts/ta.swf", sColor:"#e20074", sBgColor:"#FFFFFF", sAltColor:"#333333", sWmode:"opaque"}));
		/*sIFR.replaceElement(named({sSelector:"h1.sub-title", sFlashSrc:"../scripts/ta.swf", sColor:"#e20074", sBgColor:"#FFFFFF", sAltColor:"#333333", sWmode:"opaque"}));*/
//For Double Panels
		sIFR.replaceElement(named({ sSelector:"div.panel-double .offset h2.title", sFlashSrc:"../scripts/ta.swf", sColor:"#e20074", sAltColor:"#333333", nPaddingTop:24, sWmode:"transparent"}));		
		
//For All Panels		
		sIFR.replaceElement(named({ sSelector:".container .overlap h2.title", sFlashSrc:"../scripts/ta.swf", sColor:"#e20074", nPaddingTop:0, sAltColor:"#333333", sWmode:"transparent"}));		
		sIFR.replaceElement(named({ sSelector:".container .offset h2.title", sFlashSrc:"../scripts/ta.swf", sColor:"#e20074", nPaddingTop:15, sAltColor:"#333333", sWmode:"transparent"}));		
		sIFR.replaceElement(named({ sSelector:".container h2.title", sFlashSrc:"../scripts/ta.swf", sColor:"#e20074", nPaddingTop:6, sAltColor:"#333333", sWmode:"transparent"}));



		

		
		
		
		
		};
}
setSIFR();
