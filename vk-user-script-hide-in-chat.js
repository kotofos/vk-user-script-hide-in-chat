// ==UserScript==
// @name         Hide annoying messages
// @namespace    vk_hide
// @version      1
// @grant        none
// @include      https://vk.com/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
  'use strict';
  const NAME = 'ян сыч'.toLocaleLowerCase().replace(' ', '');
  
  function hide() {
    let messages = document.querySelectorAll('.im-mess-stack');
   
  	for (let i = 0; i < messages.length; i++) {
      let name = messages[i].querySelector('.im-mess-stack--lnk').text;
      name = name.toLocaleLowerCase().replace(' ', '');
      if (name === NAME) {
        messages[i].hidden = true;
      }
  	}
  }
  
  window.onload = hide;
  
  let timeout = null;
	// run on new messages
  $("#wrap3").bind("DOMNodeInserted", function(event) {  
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      hide();
    }, 200);
      
  });
  
  hide();
  
})();
