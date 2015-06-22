<!-- Begin



var	showbrand	= "yes"		// SHOW GOOGLE BRANDING 
var	showsearch	= "yes"		// SHOW SEARCH BOX

var	yourdomain	= "dogmode.com"	

   if (showsearch == "yes") {
document.write('<form id="searchbox_003488088439636726711:dzunaemraqw" action="http://'+yourdomain+'/search_results.html" target="_top" class="formmargin">');
document.write('<input type="hidden" name="cx" value="003488088439636726711:dzunaemraqw" />');
document.write('<input type="hidden" name="cof" value="FORID:9" />');
document.write('<table cellpadding="0" cellspacing="0" border="0" class="sidebartext"><tr><td valign="center">');
document.write('<input name="q" type="text" size="15" class="searchsiteform">');
document.write('</td><td valign="center">');
document.write('<INPUT TYPE="image" SRC="img/search-off.gif" name="sa" border="0" onmouseover="this.src=\'img/search-on.gif\'" onmouseout="this.src=\'img/search-off.gif\'" alt="Search" hspace="3"><br>')
document.write('</td></tr></TABLE>');
document.write('</form>');

}


   if (showbrand == "yes") {
document.write('<scr' + 'ipt type="text\/javascript" src="http:\/\/google.com\/coop\/cse\/brand?form=searchbox_003488088439636726711%3Adzunaemraqw"><\/script>');
}



//  End -->