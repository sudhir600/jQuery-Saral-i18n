# jQuery-saral-i18n
i18n easy Implementation using jQuery
Note- this is very easy plugin for localization using jQuery. You need to spen only 5 minute to setup and ready to go.

<h3>How to setup</h3>
<ul>
 <li> Download saral-i18n.js under js folder.</li>
 <li> Paste this js file in your project directory (problily in js or script folder).</li>
 <li> Go to your html page wheere you want to impliment. add this script into <code><head></code> section.</li>
 <li> Go to your project directory and create a folder called "locale". and inside  locale, create en.json. (you can copy the locale folder from this repo.</li>
 <li> Now download demo.html and see how attribute has beed added to catch the key. see uses section.</li>
</ul>

<h3>uses</h3>
place i18n="key" in any element just like this.<br /> or 
you can call **i18n_placeholder="key"** for input placeholder.
<br />
<pre>

	<input type="text" i18n="buttonTxt" i18n_placeholder="inputPlchdr">
	<input type="radio" checked i18n="localtion2">
	<input type="button" i18n="location1">
	<input type="checkbox" i18n="location2">
	<button i18n="buttonTxt"></button>
	<select>
	  <option selected i18n="location1"></option>
	  <option i18n="location2"></option>
	</select>
	<textarea i18n="divTxt" rows="4" cols="45"></textarea>
	<div i18n="divTxt">text from english</div>
	<span i18n="spanTxt">text from english</span>
  
</pre>

