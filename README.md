JS_Tools
========
Miscellaneous JavaScript/jQuery Tools



check_inactivity.js
===================
Description:<br> 
Check inactivity until mouse button or keydown event is fired and reset the counter.<br>
If not, user will be logged out after 10 minutes.

How to work:

Add in your html file:<br>
&lt;span id="counter"&gt;&lt;/span&gt;<br>
&lt;script type="text/javascript" src="check_inactivity.js"&gt;&lt;/script&gt;<br>

Done!


validation_rules.js
===================
Description:<br>
Simple client side validation rules. <br>
Multilingual messages! (en, fr, ro) ...


How to work:

In your html file: <br>
&lt;input type="text" data-req='{"text": "notEmpty"}'/&gt;<br>
&lt;input type="text" data-req='{"integer": "isValid"}'/&gt;<br>
&lt;input type="text" data-req='{"url": "isValid"}'/&gt;<br>
&lt;input type="text" data-req='{"color": "isValid"}'/&gt;<br>
&lt;input type="text" data-req='{"email": "isValid"}'/&gt;<br>
&lt;input type="text" data-req='{"email": "validDomain"}'/&gt;<br>
&lt;input type="text" data-req='{"dateSimple": "isValid"}'/&gt;<br>
&lt;input type="text" data-req='{"dateComplex": {"greaterThan":"nameOfOtherDateElementOnSameForm"}}'/&gt;<br>

&lt;script type="text/javascript" src="jquery.min.js"&gt;&lt;/script&gt;<br>
&lt;script type="text/javascript" src="validation_rules.js"&gt;&lt;/script&gt;<br>
