 $(document).ready(function() {
	 
	 /*Click Events*/
		 
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
		
		/*Input Validation*/
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
		 
		
		/*Tooltips Init*/
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
	
	/*Custom functions*/
	 
	function getCurrentLocation(){
	jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCJg2IEvm5kGw0qLjt-_OxzOHR5CJDcpYI", function(success) {
$.ajax({ url: 'http://api.geonames.org/findNearbyPostalCodes?lat='+success.location.lat+'&lng='+success.location.lng+'&username=erikxcore',
     type: 'POST',
		 async: 'true',
         success: function(data){
					var zip = $(data).find("code").find('postalcode').eq(0).text();
					if(zip) {
                        $('.zip').val(zip);
                        } else {
                        fail('Error finding where you are!');
                    }
         }
     });
  })
  .fail(function(err) {
    alert("API Geolocation error! \n\n"+err);
    $(".current").tootipster('hide');	
  });
};

/*
		$(function() {
    		if(navigator.geolocation) {
				
					jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCJg2IEvm5kGw0qLjt-_OxzOHR5CJDcpYI", function(success) {
						apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
				  })
				  .fail(function(err) {
				    alert("API Geolocation error! \n\n"+err);
				  });
				};
*/
    			/*
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
 *//*
    function fail(err) {
		if(!err){
		$(".current").tootipster('hide');	
		}else{
       $(".current").tooltipster('update', err);
       $(".current").tooltipster('show');
		}
	}
			}
});
	}
*/

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
			 
			verifyZip(zipcode);
				
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
         success: parseWeatherXml,
         error: function(){
         	console.log('Error geting weather');
         }
		});
		
	}
	
	function getMovies(zipcode){
	return $.ajax({ url: '/dshbrd/php/movies.php',
         data: "zip_code=" + zipcode,
         type: 'POST',
		 async: 'false',
         success: parseMoviesXml,
         error: function(){
         	console.log('Error geting movies');
         }
		});
	}
	
	function getPlaces(zipcode){
		
	return $.ajax({ url: '/dshbrd/php/places.php',
         data: "zip_code=" + zipcode,
         type: 'POST',
		 async: 'true',
         success: parsePlacesXml,
         error: function(){
         	console.log('Error geting places');
         }
		});
	}
	
	function getMorePlaces(zipcode){
	return	$.ajax({ url: '/dshbrd/php/moreplaces.php',
         data: "zip_code=" + zipcode,
         type: 'POST',
		 async: 'true',
         success: parseBarsXml,
         error: function(){
         	console.log('Error geting more places');
         }
		});
	}
	
	function parseWeatherXml(xml){
		console.log("Weather xml:");
		console.log(xml);
		$("#weather").html("");
		$(xml).find("channel").each(function(){
			title = $(this).find("title").eq(0).text();
			fixedtitle = title.substr(title.indexOf('- ')+2);
			current = $(this).find("item").find("description").text();
			current = current.replace(/<img[^>]*>/g,"");
			$("#weather").html('<h2>The weather for </h2><h1>' + fixedtitle + '</h1> <div class="forecast">' + current + '</div>');

		});
	}
 
	function parseMoviesXml(xml){

		$("#movies").html("");
		i = 0;
		$(xml).find("theater").each(function(){
			i++;
			

			title = $(this).find("name").eq(0).text();
			address = $(this).find("address").text();
			$("#movies").append('<div class="theater'+i+'"><h2>'+title+'</h2><span>'+address+'</span><br>');
			$(".theater a").addClass('theatertitle');
			$('#movies').append('<div class="theater">');		
			$(this).find("movie").each(function(){
				moviename = $(this).find("name").text();
				showings = $(this).find("showings").text();
				$('.theater' + i).append('<br/><span style="font-weight:bold;"><br/>'+moviename+'</span><br/>'+showings+'');
			})
		
			$("#movies").append('</div>');
						if(i==3){
				return false;
			}
		});
	}
	
	
	
	
	function parsePlacesXml(xml){

		$("#places").html("");
		$(xml).find("location").each(function(){
			title = $(this).find("name").eq(0).text();
			address = $(this).find("address street").text() + " "+ $(this).find("address city").text() + " " + $(this).find("address state").text();
			moreinfo=$(this).find("profile").text();
			$('#places').append('<h2>'+title+'</h2><span>'+address+'</span><br><a style="color:black;" href="'+moreinfo+'">More Information.</a></span>');
		});
	}
	
	function parseBarsXml(xml){

		$("#bars").html("");
		$(xml).find("location").each(function(){
			title = $(this).find("name").eq(0).text();
			address = $(this).find("address street").text() + " "+ $(this).find("address city").text() + " " + $(this).find("address state").text();
			moreinfo=$(this).find("profile").text();
			$('#bars').append('<h2>'+title+'</h2><span>'+address+'</span><br><a style="color:black;" href="'+moreinfo+'">More Information.</a></span>');
		});
	}
	
 });
