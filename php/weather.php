<?php
if(isset($_POST['zip_code']) && is_numeric($_POST['zip_code'])){
    $zipcode = $_POST['zip_code'];
}else{
    $zipcode = '07416';
}

function getWOEID($zipcode) {
        // use YQL to find the WOEID
        $q = "select woeid from geo.places where text=".$zipcode." limit 1";

        // execute the YQL query we just built
        $ch = curl_init('https://query.yahooapis.com/v1/public/yql?q=' . urlencode($q). '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        
        // if we got something back
        if ($response) {
      try {
              $response = json_decode($response, true);               // convert JSON to an array
              return $response['query']['results']['place']['woeid']; // path to the WOEID value
      } catch(Exception $ex) {
        return $ex; // invalid response, we may have hit the rate limit (see next section)
      }
        }
        
        return 0; // we received no response at all
    }
    
    // change "?p=" to "?w=" in your URL, that's it!
   // $url = "http://weather.yahooapis.com/forecastrss?w=" . getWOEID($zipcode);
    
    // fetch Yahoo's weather RSS feed
    //$ch = curl_init($url);
    //curl_exec($ch);
    //curl_close($ch);

$result = file_get_contents('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%20'.getWOEID($zipcode).'&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
$xml = simplexml_load_string($result);

print($xml->asXML());
echo $xml;
    //$woeid = getWOEID($zipcode);

//echo $woeid;
?>
