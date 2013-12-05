 $(document).ready(function() {
	 
	 
	 	$(".lost .find").click(function(e){
			
			$(".lost .findme").slideDown();
			$('html, body').animate({ 
    		  scrollTop: $('.lost .findme').offset().top 
  			}, 3000);
		});
		
		 $(".help .helpme").click(function(e){
			$(".help .findme").slideDown();
			$('html, body').animate({ 
    		 scrollTop: $('.help .findme').offset().top 
  			}, 3000);
		});
		
		 $(".lost .hide").click(function(e){
			$(".lost .findme").slideUp();
	
		});
		
		$(".help .hide").click(function(e){
			$(".help .findme").slideUp();
	
		});
		
		$(".help .requested").click(function(e){
			$('html,body').animate({
			scrollTop: 0
			}, 500);
			zipcode = $('.help .results p').eq(1).text();
			console.log(zipcode);
			getContent(zipcode);
			$('.help .results').fadeOut();
			$('.help .state').val('');
		    $('.help .city').val('');
			$(".help .findme").slideUp();
		});
		
		$(".lost .requested").click(function(e){
			$('html,body').animate({
			scrollTop: 0
			}, 500);
			zipcode = $('.help .results p').eq(1).text();
			console.log(zipcode);
			getContent(zipcode);
		});
		
		$(".lost .clear").click(function(e){
			$('.lost .results').fadeOut();
			$('.lost .state').val('');
		    $('.lost .city').val('');
	
		});
		
		$(".help .clear").click(function(e){
			$('.help .results').fadeOut();
			$('.help .state').val('');
		    $('.help .city').val('');
	
		});
		
		$(".help .current").click(function(e){
			$(".help .findme").slideUp();
		});
		
		
	    $(".current").click(function(e){
	    getCurrentLocation();
		});
	 
	 	$(".help .current").click(function(e){
		$('html,body').animate({
		scrollTop: 0
		}, 500);
		getCurrentLocation();
		});
	 
	function getCurrentLocation(){
		$(function() {
    		if(navigator.geolocation) {
       			 navigator.geolocation.getCurrentPosition(
          			  function (pos) {
             			   var point = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
               				 new google.maps.Geocoder().geocode({'latLng': point}, function (res, status) {
                      if(status == google.maps.GeocoderStatus.OK && typeof res[0] !== 'undefined') {
                        var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                        if(zip) {
                        $('.zip').val((zip[1]));
                        } else {
                        fail('Error finding where you are!');
                    }
                }}
            , function(err) {
                fail(err.message);
            }
        );
    });
    function fail(err) {
       $(".current").tooltipster('update', err);
       $(".current").tooltipster('show');
    }
			}
});

	}
	 
	  $('.current').tooltipster({ 
        trigger: 'custom', // default is 'hover' which is no good here
        onlyOne: false, // allow multiple tips to be open at a time
        position: 'top',  // display the tips to the right of the element
		theme:'.tooltipster-light'
    });
	
		 
	  $('.state').tooltipster({ 
        trigger: 'custom', // default is 'hover' which is no good here
        onlyOne: false, // allow multiple tips to be open at a time
        position: 'right',  // display the tips to the right of the element
		theme:'.tooltipster-light'
    });
    
    	 $('.city').tooltipster({ 
        trigger: 'custom', // default is 'hover' which is no good here
        onlyOne: false, // allow multiple tips to be open at a time
        position: 'right',  // display the tips to the right of the element
		theme:'.tooltipster-light'
    });
	
	 $('.zip').tooltipster({ 
        trigger: 'custom', // default is 'hover' which is no good here
        onlyOne: false, // allow multiple tips to be open at a time
        position: 'top',  // display the tips to the right of the element
		theme:'.tooltipster-light'
    });
	  
	  $(".zip").keyup(function(e)
		{
			zipcode = $('.zip').val();
    		if (/\D/g.test(this.value))
    		{
        	this.value = this.value.replace(/\D/g, '');
    		}
			if(zipcode.length > 5){
      $(this).val($(this).val().substr(0, 5));
    }
	
		});
		
		
	 $(".zip").keypress(function(e){
         var k=e.keyCode || e.which;
         if(k==13){
			 zipcode = $('.zip').val();
				if(checkZip(zipcode)){
				getContent(zipcode);
				submitAnim();
			}else{
			e.preventDefault();	
			}
         }
     });


 			$(".city").keyup(function(e){
 if (this.value.match(/[^a-zA-Z ]/g)) {
                this.value = this.value.replace(/[^a-zA-Z ]/g, '');
            }		
				
			 });
		 
		  $(".lost .state").keyup(function(e){
 				if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, '');
            }	
		
			 state = $('.lost .state').val()
			 if(state.length > 2){
     			 $(this).val($(this).val().substr(0, 2));
   			 }
		 });
		 $(".help .state").keyup(function(e){
				 if (this.value.match(/[^a-zA-Z ]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, '');
            }
		 		state = $('.help .state').val()
				 if(state.length > 2){
     			 $(this).val($(this).val().substr(0, 2));
   			 }
		 });
		 
		 $(".city").keypress(function(e){
			 var k=e.keyCode || e.which;
        	 if(k==13){
			 e.preventDefault();
			 }
		 });
		 
   

   function checkZip(zipcode){
	   
	   if (zipcode == ''){
 			 errorMessage = "Zipcode required!";
			 $(".zip").tooltipster('update', errorMessage);
            $(".zip").tooltipster('show');
			 
			  if (!$(".zip").hasClass("shake")) {
                            $(".zip").addClass("shake");
                    } else {
                        $('.zip').css('animation-name', 'none');
                        $('.zip').css('-moz-animation-name', 'none');
                        $('.zip').css('-webkit-animation-name', 'none');
 
                        setTimeout(function() {
                            $('.zip').css('-webkit-animation-name', 'shake');
                        }, 0);
                    }
					return 0;
 		}
  		else if ((zipcode.length)< 5 || (zipcode.length)>5 ){
 			errorMessage = "Zipcode should only be 5 digits";
 		 		
				 $(".zip").tooltipster('update', errorMessage);
            $(".zip").tooltipster('show');
				  if (!$(".zip").hasClass("shake")) {
                            $(".zip").addClass("shake");
                    } else {
                        $('.zip').css('animation-name', 'none');
                        $('.zip').css('-moz-animation-name', 'none');
                        $('.zip').css('-webkit-animation-name', 'none');
 
                        setTimeout(function() {
                            $('.zip').css('-webkit-animation-name', 'shake');
                        }, 0);
						return 0;
                    }
		 }else if (zipcode.length == 5){
			 
			 //removed for testing to save api calls   verifyZip(zipcode);
					getContent(zipcode);
			 		submitAnim();
		 }
   
   }
   
   function submitAnim(){
	   $('header').addClass('submitted');
		$('.logo').addClass('logosubmitted');
		$('.welcomecontent').hide();
		$('.dshbrd').addClass('dshbrdsubmitted');
		$('.dshbrd form label').hide();
		$('.lost').hide();
		$('.results').hide();
		$('.warning').hide();
		$('#content').fadeIn();
		$('.help').fadeIn();
		$('input.submit').val('Go!');
   }
   
      $(".lost input.submit[type=submit]").click(function(e){
		e.preventDefault();
		state = $('.lost .state').val();
		city = $('.lost .city').val();
		if((state.length>1) && (city.length >1)){
		  $(".lost .city").tooltipster('hide');
		  $(".lost .state").tooltipster('hide');
		findLocation(state,city).done(function(){
		 	$('html, body').animate({ 
    		  scrollTop: $('.lost .results').offset().top 
  			}, 3000);
		});
		
		}else if((state.length>1) && (city.length == 0)){
			errorMessage = "City required!";
			 $(".lost .city").tooltipster('update', errorMessage);
            $(".lost .city").tooltipster('show');
            $(".lost .state").tooltipster('hide');

		}else if ((state.length == 0) && (city.length > 1)){
			
			errorMessage = "State required!";
			 $(".lost .state").tooltipster('update', errorMessage);
            $(".lost .state").tooltipster('show');
             $(".lost .city").tooltipster('hide');
		}
		
		else{
		 errorMessage = "State required!";
		 errorMessage2 = "City Required!"
			 $(".lost .state").tooltipster('update', errorMessage);
            $(".lost .state").tooltipster('show');
             $(".lost .city").tooltipster('update', errorMessage2);
            $(".lost .city").tooltipster('show');
		}
		})
		
		$(".help input.submit[type=submit]").click(function(e){
		e.preventDefault();
		state = $('.help .state').val();
		city = $('.help .city').val();
		if((state.length>1) && (city.length >1)){
		  $(".help .city").tooltipster('hide');
		  $(".help .state").tooltipster('hide');
		findLocation(state,city).done(function(){
		 	$('html, body').animate({ 
    		  scrollTop: $('.help .results').offset().top 
  			}, 3000);
		});
			
		}else if((state.length>1) && (city.length == 0)){
			errorMessage = "City required!";
			 $(".help .city").tooltipster('update', errorMessage);
            $(".help .city").tooltipster('show');
             $(".help .state").tooltipster('hide');

		}else if ((state.length == 0) && (city.length > 1)){
			
			errorMessage = "State required!";
			 $(".help .state").tooltipster('update', errorMessage);
            $(".help .state").tooltipster('show');
              $(".help .city").tooltipster('hide');

		}
		
		else{
		 errorMessage = "State required!";
		 errorMessage2 = "City Required!"
			 $(".help .state").tooltipster('update', errorMessage);
            $(".help .state").tooltipster('show');
             $(".help .city").tooltipster('update', errorMessage2);
            $(".help .city").tooltipster('show');
		}
		})
		

		function verifyZip(zipcode){
	  $.ajax({ url: '/dshbrd/php/checkzip.php',
		 data: 'zipcode='+zipcode,
         type: 'POST',
		 async: 'true',
         success: function(data){
         results = data;
		 if(zipcode != data){ 
				  errorMessage = "Zipcode could not be verified. Try again.";
				  $(".zip").tooltipster('update', errorMessage);
            	  $(".zip").tooltipster('show');
             	
		 }else{
		 			$(".zip").tooltipster('hide');
			 		getContent(zipcode);
			 		submitAnim();
			
		 }
		 }
		});
   }
		
   	function findLocation(state, city){
		return $.ajax({ url: '/dshbrd/php/getzip.php',
		 data: 'city='+city+'&state='+state,
         type: 'POST',
		 async: 'false',
         success: function(data){
         results = data;
		 $('.results').fadeIn();
		 $('.resultszip').html(results).fadeIn();
		 $('.zip').val(results);
		 }
		});
	}
	
	
   $(".dshbrd input.submit[type=submit]").click(function(e){
		e.preventDefault();
		zipcode = $('.zip').val();
		checkZip(zipcode);
	});
	
	function getContent(zipcode){
		
	getWeather(zipcode).done(function (){
	getMovies(zipcode).done(function (){
	getPlaces(zipcode).done(function (){
	getMorePlaces(zipcode)
	});
	});
	});
	
		$("#weather").fadeIn(2000);
		$(".showBars").removeClass('selected');
		$(".showPlaces").removeClass('selected');
		$(".showMovies").removeClass('selected');
		$(".showWeather").addClass('selected');
	}
	
   	function getWeather(zipcode){
	return	$.ajax({ url: '/dshbrd/php/weather.php',
         data: "zip_code=" + zipcode,
		 dataType: "xml",
         type: 'POST',
		 async: 'false',
         success: parseWeatherXml
		});
		
	}
	
	function getMovies(zipcode){
	return $.ajax({ url: '/dshbrd/php/movies.php',
         data: "zip_code=" + zipcode,
         type: 'POST',
		 async: 'false',
         success: parseMoviesXml
		});
	}
	
	function getPlaces(zipcode){
		
	return $.ajax({ url: '/dshbrd/php/places.php',
         data: "zip_code=" + zipcode,
         type: 'POST',
		 async: 'true',
         success: parsePlacesXml
		});
		
	}
	
	function getMorePlaces(zipcode){
	return	$.ajax({ url: '/dshbrd/php/moreplaces.php',
         data: "zip_code=" + zipcode,
         type: 'POST',
		 async: 'true',
         success: parseBarsXml
		});
	}
	
	function parseWeatherXml(xml){
		console.log('test1');
		$(xml).find("channel").each(function(){
			title = $(this).find("title").eq(0).text();
			fixedtitle = title.substr(title.indexOf('- ')+2);
			current = $(this).find("item").find("description").text();
			current = current.replace(/<img[^>]*>/g,"");
			$("#weather").html('<h2>The weather for </h2><h1>' + fixedtitle + '</h1> <div class="forecast">' + current + '</div>');

		});
	}
 
	function parseMoviesXml(xml){
		console.log('test2');
		$(xml).find("theater").each(function(){
			title = $(this).find("name").eq(0).text();
			console.log(title);
			address = $(this).find("address").text();
			console.log(address);
			moviename = $(this).find("movie name").text();
			console.log(moviename);
			showings = $(this).find("movie showings").text();
			console.log(showings);


		});
	}
	
	function parsePlacesXml(xml){
		console.log('test3');
		$(xml).find("location").each(function(){
	
			title = $(this).find("name").eq(0).text();
			console.log(title);
			address = $(this).find("address street").text() + " "+ $(this).find("address city").text() + " " + $(this).find("address state").text();
			console.log(address);


		});
	}
	
	function parseBarsXml(xml){
		console.log('test4');
		$(xml).find("location").each(function(){
			//title = $(this).find('title').text();
			title = $(this).find("name").eq(0).text();
			console.log(title);
			address = $(this).find("address street").text() + " "+ $(this).find("address city").text() + " " + $(this).find("address state").text();
			console.log(address);



		});
	}
	
		$(".showWeather").click(function(e){
			$(".showWeather").addClass('selected');
			$(".showBars").removeClass('selected');
			$(".showPlaces").removeClass('selected');
			$(".showMovies").removeClass('selected');
			$("#places").slideUp();
			$("#movies").slideUp();
			$("#bars").slideUp();
			$('#weather').slideDown();;
		});
		
			$(".showMovies").click(function(e){
			$(".showWeather").removeClass('selected');
			$(".showBars").removeClass('selected');
			$(".showPlaces").removeClass('selected');
			$(".showMovies").addClass('selected');
			$("#places").slideUp();
			$("#bars").slideUp();
			$('#weather').slideUp();
			$("#movies").slideDown();
		});
		
			$(".showPlaces").click(function(e){
			$(".showWeather").removeClass('selected');
			$(".showBars").removeClass('selected');
			$(".showPlaces").addClass('selected');
			$(".showMovies").removeClass('selected');
			$("#movies").slideUp();
			$("#bars").slideUp();
			$('#weather').slideUp();
			$("#places").slideDown();	
		});
		
			$(".showBars").click(function(e){	
			$(".showWeather").removeClass('selected');
			$(".showBars").addClass('selected');
			$(".showPlaces").removeClass('selected');
			$(".showMovies").removeClass('selected');
			$("#places").slideUp();
			$("#movies").slideUp();
			$('#weather').slideUp();
			$("#bars").slideDown();	
		});
		
	
 });