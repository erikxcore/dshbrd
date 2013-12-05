<?php
if(isset($_POST['zip_code']) && is_numeric($_POST['zip_code'])){
    $zipcode = $_POST['zip_code'];
}else{
    $zipcode = '07416';
}

$result = file_get_contents('http://weather.yahooapis.com/forecastrss?p=' . $zipcode . '&u=f');
$xml = simplexml_load_string($result);

print($xml->asXML());
echo $xml;
?>