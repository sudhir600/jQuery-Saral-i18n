# jQuery-saral-i18n
<b>i18n easy Implementation using jQuery</b> &nbsp; (<a href="https://github.com/sudhir600/jQuery-Saral-i18n" /><small>Github</small></a> or <a href="https://github.com/sudhir600/jQuery-Saral-i18n" />NPM</a>)<br/>

<br />
<i>Note- this is very easy plugin for localization using jQuery. You need to spend only 5 minute to setup and ready to go.</i>

<h3>How To Setup</h3>
<ul>
 <li> Download saral-i18n.js under js folder. or run - <code>npm i jquery_saral_i18n</code> </li>
 <li> Paste this script file in your project directory (problily in "js" or "script" folder).</li>
 <li> Go to your html page wheere you want to impliment. add this script into <code><head></code> section.</li>
 <li> Go to your project directory and create a folder called "locale". and inside  locale, create en.json. (you can copy the locale folder from this repo.</li>
 <li> Now download demo.html and see how attribute has beed added to catch the key. see uses section.</li>
</ul>

<h3>Uses</h3>
place i18n="key" in any element just like this.<br /> or 
you can call i18n_placeholder="key" for input placeholder.
<br />
	<div style="background-color: #f7f7f7;padding: 5px 0px 10px 10px;font-family: 'Fira Mono', 'Andale Mono', 'Consolas', monospace;">
		&lt;input type=&quot;text&quot; i18n=&quot;buttonTxt&quot; i18n_placeholder=&quot;inputPlchdr&quot;&gt; <br /> &lt;input type=&quot;radio&quot; checked i18n=&quot;localtion2&quot;&gt; <br /> &lt;input type=&quot;button&quot; i18n=&quot;location1&quot;&gt; <br /> &lt;input type=&quot;checkbox&quot; i18n=&quot;location2&quot;&gt; <br /> &lt;button i18n=&quot;buttonTxt&quot;&gt;&lt;/button&gt; <br /> &lt;select&gt; <br /> &lt;option selected i18n=&quot;location1&quot;&gt;&lt;/option&gt; <br /> &lt;option i18n=&quot;location2&quot;&gt;&lt;/option&gt; <br /> &lt;/select&gt; <br /> &lt;textarea i18n=&quot;divTxt&quot; rows=&quot;4&quot; cols=&quot;45&quot;&gt;&lt;/textarea&gt; <br /> &lt;div i18n=&quot;divTxt&quot;&gt;text from english&lt;/div&gt; <br /> &lt;span i18n=&quot;spanTxt&quot;&gt;text from english&lt;/span&gt;
	</div>
<br /><br >
<h2>Author</h2>
<ul>
 <li>Sudhir K Gupta</li>
 <li><a href="https://github.com/sudhir600/jQuery-Saral-i18n" />Github</a></li>
</ul>
<br /><br />
<small>
<i>Note - If you think that something need to be change, feel free to send pull request. I will merge into master.</i>
</small>
