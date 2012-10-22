
/*!
	Swipe to reveal - Twitter Mobile slider v1.0
	Original by Selvaganapathy Kaliamurthy: http://selvagk.com
	Get the latest version: https://github.com/selvagk/swipe2Reveal

 *   @name app.css
  *   @author Selvagk
 *   @version 0.1
 *   @Website :www.selvagk.com
 
**/



/***Swipe Detection****/
$.fn.swipe = function(options) {
		options = jQuery.extend({
			threshold: {
				x: 30,
				y: 100
			},
			swipeLeft: function() {
				alert('swiped left');
			},
			swipeRight: function() {
				alert('swiped right');
			}
		}, options);

 

		$(this).each(function() {
			var me = $(this);
			var originalCoord = {
				x: 0,
				y: 0
			};
			var finalCoord = {
				x: 0,
				y: 0
			};

			function touchMove(event) {
			
				event.preventDefault();
				finalCoord.x = event.originalEvent.touches[0].pageX;
				finalCoord.y = event.originalEvent.touches[0].pageY;
			}

			function touchEnd(event) {
				var changeY = originalCoord.y - finalCoord.y;
				if (changeY < options.threshold.y && changeY > (options.threshold.y * -1)) {
					changeX = originalCoord.x - finalCoord.x;
					if (changeX > options.threshold.x) {
						options.swipeLeft.call(this);
					}
					if (changeX < (options.threshold.x * -1)) {
						options.swipeRight.call(this);
					}
				}
			}

			function touchStart(event) {
			
				originalCoord.x = event.originalEvent.targetTouches[0].pageX;
				originalCoord.y = event.originalEvent.targetTouches[0].pageY;
				finalCoord.x = originalCoord.x;
				finalCoord.y = originalCoord.y;
			}
			me.bind("touchstart MozTouchDown", touchStart);
			me.bind("touchmove MozTouchMove", touchMove);
			me.bind("touchend MozTouchRelease", touchEnd);
		});
	};
	
	/***function to create Swipe element***/
	
	
	$(function(){
	
	
	$('section').find('li').swipe({
					swipeLeft: function() {
					$('section').find('li').removeClass('swipedL');
					$(this).addClass('swipedL');
					},
					swipeRight: function() {
						$(this).removeClass('swipedL')
					}
				});
	
	
	});

