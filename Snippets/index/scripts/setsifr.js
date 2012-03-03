function setSIFR() {
	if(typeof sIFR == "function"){
		sIFR.replaceElement(named({sSelector:"h1.page-title", sFlashSrc:"scripts/ta.swf", sColor:"#e20074", sWmode:"opaque"}));
				
		//sIFR.replaceElement(named({nHeight: 120, sSelector:".offset h2", sFlashSrc:"scripts/ta.swf", sColor:"#000000", sWmode:"transparent", sFlashVars:"offsetTop=18&offsetLeft=0"}));
		
		sIFR.replaceElement(named({sSelector:"h2.title-offset ", sFlashSrc:"scripts/ta.swf", sColor:"#000000", sWmode:"transparent"}));
		
		sIFR.replaceElement(named({ sSelector:"h2.title-overlap ", sFlashSrc:"scripts/ta.swf", sColor:"#00ff00", sWmode:"transparent"}));
		
		sIFR.replaceElement(named({ sSelector:"div.container h2", sFlashSrc:"scripts/ta.swf", sColor:"#e20074", sWmode:"transparent"}));
		
		
		
		
		};
}
setSIFR();
