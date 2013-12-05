<?php
/**
 * Google Showtime grabber
 * 
 * This file will grab the last showtimes of theatres nearby your zipcode.
 * Please make the URL your own! You can also add parameters to this URL: 
 * &date=0|1|2|3 => today|1 day|2 days|etc.. 
 * &start=10 gets the second page etc...
 * 
 * Please download the latest version of simple_html_dom.php on sourceForge:
 * http://sourceforge.net/projects/simplehtmldom/files/
 * 
 * @author Bas van Dorst <info@basvandorst.nl>
 * @version 0.1 
 * @package GoogleShowtime
 *
 * @modifyed by stephen byrne <gold.mine.labs@gmail.com>
 * @GoldMinelabs.com 
 *
 * @modified by Eric Barber <eric@ericbarber.me>
 * @ericbarber.me
 * Conversion of grabbed HTML content into XML document to later be parsed via AJAX. <br>
 * Addition of external zip code soruce.
 */
if(isset($_POST['zip_code']) && is_numeric($_POST['zip_code'])){
    $zipcode = $_POST['zip_code'];
}else{
    $zipcode = '07416';
}

require_once('simple_html_dom.php');



$curl = curl_init(); 
$newurl = 'http://www.google.com/movies?near=' . $zipcode;
curl_setopt($curl, CURLOPT_URL, $newurl);  
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);  
$str = curl_exec($curl);  
curl_close($curl);  

$html = str_get_html($str);
$xml = new SimpleXMLElement('<xml/>');

foreach($html->find('#movie_results .theater') as $div) {
   $theater = $xml->addChild('theater');
	
   $name = $div->find('h2 a',0)->innertext;
   
   $theater->addChild('name',$name);

   $address = $div->find('.info',0)->innertext;
   $address = str_replace('<a href="" class=fl target=_top></a>','',$address);
  
   $theater->addChild('address',$address);
   
   foreach($div->find('.movie') as $movie) {
	   $movieparent = $theater->addChild('movie');
	   $movies = $movie->find('.name a',0)->innertext."\n";
	   $time = $movie->find('.times',0)->innertext."\n";
	   
	   $movies = str_replace('<span style="color:"><span style="padding:0 ">‎</span><!--  -->','',$movies);
	   $movies = str_replace('<span style="color:"><span style="padding:0 ">‎<!--  -->','',$movies);
	   $movies = str_replace('<span style="color:"><span style="padding:0 ">‎<!--  -->','',$movies);
	   $movies = str_replace('<span style="color:"><span style="padding:0 ">  ‎<!--  -->','',$movies);
	   $time = str_replace('/url?q=','http://www.google.com/url?q=',$time);
	   $movieparent->addChild('name',$movies);
	   $showingparent = $movieparent->addChild('showings');
	   $showingparent->addChild('time',$time);
    }
}
print($xml->asXML());
echo $xml;
?>