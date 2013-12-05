<?php
if(isset($_POST['zip_code']) && is_numeric($_POST['zip_code'])){
    $zipcode = $_POST['zip_code'];
}else{
    $zipcode = '07416';
}

$publsiher = '10000004714';


$restresult = file_get_contents('http://api.citygridmedia.com/content/places/v2/search/where?what=bar&where='.$zipcode.'&page=1&rpp=5&sort=highestrated&publisher='.$publsiher.'&format=xml');

print $restresult;

echo $restresult;
?>