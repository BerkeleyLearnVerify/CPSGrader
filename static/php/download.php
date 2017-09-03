<?php

/*
 * Asks users for information before download.
 */

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$emailaddress = $_POST["emailaddress"];
$affiliation = $_POST["affiliation"];
$intent = $_POST["intent"];

$dirname = "../../../download_usage_data/";
$x = 0;
$dir = new DirectoryIterator($dirname);
foreach ($dir as $file){
    $x += 1;
}

$format = 'download-%1$04d.txt';
$filename = sprintf($format, $x);
$newfile = fopen($dirname.$filename, "w");
fwrite($newfile, "Name: ".$firstname." ".$lastname."\n");
fwrite($newfile, "Email: ".$emailaddress."\n");
fwrite($newfile, "Affiliation: ".$affiliation."\n");
fwrite($newfile, "Intent: ".$intent."\n");
fclose($newfile);

?>


