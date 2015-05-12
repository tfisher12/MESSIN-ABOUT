// // var ('#primaryyv').css('color','red');

// var ('.social').css('font','132px');

// }
// }
// }
// }

// Create a clone of the menu, right next to original.
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}



  // var windowHeight = $(window).height()

  // $('.banner').height(windowHeight)
  // #styleLOGO


  // $('.work').height(windowHeight)


  /* Codes by Singh Satnam - http://www.fiverr.com/sarvankarthik6 */

jQuery(window).scroll(function() {
  if(jQuery(window).scrollTop() >= 200) {
    //jQuery('.social').addClass('inlineIt');
	jQuery('.logo').addClass('compressNav');
  }
  
  else {
	jQuery('.logo').removeClass('compressNav');
  }
  // if(jQuery(window).scrollTop() < 200) {
  //   jQuery('.social').removeClass('inlineIt');
  // }
});

/* Codes by Singh Satnam - http://www.fiverr.com/sarvankarthik6 */

// new stuff


var oVTog = {
 toggle: function (el) {
  var container = el.parentNode;
  var para = container.getElementsByTagName('p')[0];
  para.style.display = "none";
  el.onmouseover = function () {
    para.style.display = '';
      return false;
   };
   el.onmouseout = function () {
    para.style.display = 'none';
    return false;
   };
   el.onclick = function () {
    para.style.display = para.style.display == 'none' ? '' : 'none';
    return false;
   };
  }
};
window.onload = function () {
    var l = document.getElementById('togTrigger');
    oVTog.toggle(l);
    l = document.getElementById('togTrigger2');
    oVTog.toggle(l);
    l = document.getElementById('togTrigger3');
    oVTog.toggle(l);
};


// EVEN NEWER BIT 


 function changeText(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }
          function changeback(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }
