 $(document).ready(function() {
	  
	  $(".zip").keyup(function(e)
		{
    		if (/\D/g.test(this.value))
    		{
        // Filter non-digits from input value.
        	this.value = this.value.replace(/\D/g, '');
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

   function checkZip(zipcode){
	   
	   if (zipcode == ''){
 			 errorMessage = "*Zipcode required!";
			 alert(errorMessage);
			 return 0;
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
 		}
  		else if ((zipcode.length)< 5 || (zipcode.length)>5 ){
 			errorMessage = "*zipcode should only be 5 digits";
 		 		 alert(errorMessage);
				 return 0;
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
		 }else if (zipcode.length == 5){
			 return 1
		 }
   
   }
   
   function submitAnim(){
	   $('header').addClass('submitted');
		$('.logo').addClass('logosubmitted');
		$('.welcomecontent').fadeOut();
		$('.dshbrd').addClass('dshbrdsubmitted');
		$('.dshbrd form label').fadeOut();
		$('input.submit').val('Go!');
   }

   $("input.submit[type=submit]").click(function(e){
		e.preventDefault();
		zipcode = $('.zip').val();
		if(checkZip(zipcode)){
		getContent(zipcode);
		submitAnim();
		}
	});
	
   	function getContent(zipcode){
		$.ajax({ url: '/dshbrd/php/weather.php',
         data: "zip_code=" + zipcode,
		 dataType: "xml",
         type: 'POST',
		 async: 'false',
         success: parseWeatherXml
		});
	}
	

		/*
		 $.ajax({ url: '/dshbrd/php/movies.php',
         data: 'zip_code',
		 dataType: "xml",
         type: 'POST',
		 async: 'false',
         success: parseWeatherXml
		});*/
	
	
	function parseWeatherXml(xml){
		$(xml).find("channel").each(function(){
			//title = $(this).find('title').text();
	
			title = $(this).find("title").eq(0).text();
			fixedtitle = title.substr(title.indexOf('- ')+2);
			console.log(fixedtitle);


		});
	}
	
	
 });