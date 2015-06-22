<!-- Begin POP-UP SIZES AND OPTIONS CODE


// ONLY USE lowercase FOR ALL OPTIONS


// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON



var right_click_on	= "no"		// RIGHT CLICK PROTECTION ON
var block_imagebar	= "yes"		// BLOCK WINDOWS IMAGE TOOL BAR

var right_click_text	= "You may not right mouse click this page."	// RIGHT CLICK TEXT



// FAQ POPUP OPTIONS

var FAQ_width 		= 550		// FAQ POPUP WIDTH
var FAQ_height 		= 500		// FAQ POPUP HEIGHT
var faqscrollbarS 	= "0"		// TURN ON FAQ SCROLLBARS "1" FOR ON "0" FOR OFF
var FAQviewer	 	= "no"		// yes/ FAQ FULL SCREEN OR no/POPUP MODE





// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// COPYRIGHT 2009 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law




// BEGIN GALLERY IMAGE CHANGER CODE


function Changer(direction)
{

if (null == direction)
{

if ((lastTime + delay) > new Date().getTime())
{
direction = 0;
}

else
{
direction = currentDirection;
}
}

else
{
currentDirection = direction;
}

if (direction != 0)
{

if (direction > 0)
{

currentSlide++;

if (currentSlide > (slides.length - 1))
{
currentSlide = 0;
}
}

else
{

currentSlide = currentSlide-1;

if (currentSlide < 0)
{
currentSlide = (slides.length - 1);
}
}

lastTime = new Date().getTime();

update(slides[currentSlide]);

setTimeout("Changer();",delay);
}
}
var currentIndex = 0;

function update(url, index) 
{
currentIndex = index;
document['MainImage'].src=url;
{

}
return;
}








// BLOCK IMAGE TOOLBAR


   if (block_imagebar == "yes") {
document.write('<META HTTP-EQUIV="imagetoolbar" CONTENT="no">')
}



// RIGHT CLICK PROTECTION


if (right_click_on == "yes") {
var message=right_click_text;
if (navigator.appName == 'Microsoft Internet Explorer'){
function NOclickIE(e) {
if (event.button == 2 || event.button == 3) {
alert(message);
return false;
}
return true;
}
document.onmousedown=NOclickIE;
document.onmouseup=NOclickIE;
window.onmousedown=NOclickIE;
window.onmouseup=NOclickIE;
}
else {
function NOclickNN(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}}}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=NOclickNN; }
document.oncontextmenu=new Function("alert(message);return false")
}
}














// START FAQ POPUP

function popUpFAQ(URL) {
day = new Date();
id = day.getTime();
   if (FAQviewer == "no") {
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=' + faqscrollbarS + ',location=0,statusbar=0,menubar=0,resizable=1,width='+FAQ_width+',height='+FAQ_height+'');");
}
else 
if (FAQviewer == "yes") {
eval("page" + id + " = window.open(URL);");
}
}









IEMhover = function() {
	var IEMh = document.getElementById("menunav").getElementsByTagName("LI");
	for (var i=0; i<IEMh.length; i++) {
		IEMh[i].onmouseover=function() {
			this.className+=" IEMhover";
		}
		IEMh[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" IEMhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", IEMhover);













//  End -->