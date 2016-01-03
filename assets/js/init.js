
					var $window = $(window);
					var $footer = $('#footer');
					var $banner = $('#title');
					var $header = $('#header');
					var $t_r = $('#t-r');
					var $t_l = $('#t-l');
					var $body = $('body');


					// Disable animations/transitions until the page has loaded.
					
						
					

					// Header.
					// If the header is using "alt" styling and #banner is present, use scrollwatch
					// to revert it back to normal styling once the user scrolls past the banner.
					// Note: This is disabled on mobile devices.

					$window.on('load', function() {
						
							window.setTimeout(function() {
												$body.removeClass('is_loading');
							}, 0);
							$banner.scrollwatch({
								delay:		0,
								range:		0.5,
								anchor:		'top',
								on:			function() {
									
									if($header.hasClass('deactive')){
										$header.removeClass('deactive'); 
										$header.addClass('active');
										$t_r.removeClass('deactive'); 
										$t_r.addClass('active');
										$t_l.removeClass('deactive'); 
										$t_l.addClass('active');
									}
								},
								off:		function() {
									
									
									if($header.hasClass('active')){
										$header.removeClass('active'); 
										$header.addClass('deactive');
										$t_r.removeClass('active'); 
										$t_r.addClass('deactive');
										$t_l.removeClass('active'); 
										$t_l.addClass('deactive');
									}
								}
							});	

					});

 				$('.pics').cycle('fade');
