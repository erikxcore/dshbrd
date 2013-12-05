<?php
if((isset($_POST['state'])) && (isset($_POST['city']))){
    $state = urlencode($_POST['state']);
	$city = urlencode($_POST['city']);
}else{
    $state = urlencode('NJ');
	$city = urlencode('Butler');
}

$authId = urlencode('66821c68-d02e-41de-a0ac-70c49c518db4');
$authToken = urlencode('bznw4FitV4I1RrQlH91rwMjc8ujWoiLBcKDnx9OLQRYDtgpTod0HfcYe8YkPdr+zmxEnxwW7PZ+GwQKrB0vY+A==');


// Build the URL
$req = "https://api.smartystreets.com/zipcode/?city={$city}&state={$state}&auth-id={$authId}&auth-token={$authToken}";

// GET request and turn into associative array
$result = json_decode(file_get_contents($req), TRUE);

print_r($result[0]['zipcodes'][0]['zipcode']);


?>