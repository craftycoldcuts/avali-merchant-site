/* This is the main JS file which runs the dummy merchant site
 * @author Brad Owen
 * @date 19/07/2015
 */

 String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var isDev = false;



/* ==============================================
Load document
=============================================== */

	( function ( $ ) {
		'use strict';

		var popup = window.frames['avali-checkout'];

		//var trustOrigin = "http://127.0.0.1:8081";
		var trustOrigin = "http://www.kelf.co.nz";

		$(document).ready(function(){
			$('.avali-pay').on('click', function() {
				$('.avali-checkout').show();
				var message = JSON.stringify({'target' :'iframe', 'action' :'open'});
				popup.postMessage(message, trustOrigin);
			});


      /*
 * In window A's scripts, with A being on <http://example.com:8080>:
 */



// When the popup has fully loaded, if not blocked by a popup blocker:


// This will successfully queue a message to be sent to the popup, assuming
// the window hasn't changed its location.


function receiveMessage(event)
{
  // Do we trust the sender of this message?  (might be
  // different from what we originally opened, for example).
  if (event.origin !== trustOrigin)
    return;

  console.log("postmessage received on merchant site:" + event.data);

var jsonMessage = JSON.parse(event.data);
  if (jsonMessage.action === 'close') {

  	$('.avali-pay').addClass('btn-success').text('payment received');

  	
  	
  	//popup.parentNode.removeChild(popup);
  	//$(popup).hide();
  }

  // event.source is popup
  // event.data is "hi there yourself!  the secret response is: rheeeeet!"
}
window.addEventListener("message", receiveMessage, false);

 
		});	

		//Mobile Detect
		var testMobile;
		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
		    BlackBerry: function() {
		        return navigator.userAgent.match(/BlackBerry/i);
		    },
		    iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		    any: function() {
		        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		    }
		};
	}( jQuery ));




    
