// sIFR 2.0.1 Official Add-ons
if(typeof sIFR=="function")(function(){var j=document;var h=j.documentElement;sIFR.removeDecoyClasses=function(){function a(b){if(b&&b.className!=null)b.className=b.className.replace(/\bsIFR-hasFlash\b/,"")}return function(){a(h);a(j.getElementsByTagName("body")[0])}}();sIFR.preferenceManager={storage:{sCookieId:"sifr",set:function(a){var b=new Date();b.setFullYear(b.getFullYear()+3);j.cookie=[this.sCookieId,"=",a,";expires=",b.toGMTString(),";path=/"].join("")},get:function(){var a=j.cookie.match(new RegExp(";?"+this.sCookieId+"=([^;]+);?"));if(a!=null&&a[1]=="false")return false;else return true},reset:function(){var a=new Date();a.setFullYear(a.getFullYear()-1);j.cookie=[this.sCookieId,"=true;expires=",a.toGMTString(),";path=/"].join("")}},disable:function(){this.storage.set(false)},enable:function(){this.storage.set(true)},test:function(){return this.storage.get()}};if(sIFR.preferenceManager.test()==false){sIFR.bIsDisabled=true;sIFR.removeDecoyClasses()}sIFR.rollback=function(){function a(b){var c,d,e,f,g,h;var l=parseSelector(b);var i=l.length-1;var m=false;while(i>=0){c=l[i];l.length--;d=c.parentNode;if(c.getAttribute("sifr")=="true"){h=0;while(h<d.childNodes.length){c=d.childNodes[h];if(c.className=="sIFR-alternate"){e=c;h++;continue}d.removeChild(c)}if(e!=null){f=e.firstChild;while(f!=null){g=f.nextSibling;d.appendChild(e.removeChild(f));f=g}d.removeChild(e)}if(!sIFR.UA.bIsXML&&sIFR.UA.bUseInnerHTMLHack)d.innerHTML+="";d.className=d.className.replace(/\bsIFR\-replaced\b/,"")};m=true;i--}return m}return function(k){named.extract(arguments,{sSelector:function(a){k=a}});if(k==null)k="";else k+=">";sIFR.removeDecoyClasses();sIFR.bHideBrowserText=false;if(a(k+"embed")==false)a(k+"object")}}()})()