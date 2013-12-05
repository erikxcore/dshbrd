 $(document).ready(function() {
	 
   $("input[type=submit]").click(function(){
		$('header').addClass('submitted');
		$('.logo').addClass('logosubmitted');
		$('.welcomecontent').fadeOut();
		$('.dshbrd').addClass('dshbrdsubmitted');
		$('.dshbrd form label').fadeOut();
		$('input.submit').val('Go!');
	});
   
 });