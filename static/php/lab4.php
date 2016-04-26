<?php
error_reporting(E_NOTICE | E_ERROR | E_WARNING | E_PARSE);

$filename = 'wordsEn.txt';
$matches = explode("\n", file_get_contents($filename));
//print_r($matches);

$first = '/^'.$_GET["first"].'/';
$last = '/^'.$_GET["last"].'/';
$nth = '/^'.$_GET["nth"].'/';
$n = (int)$_GET["n"];
$numletters = (int)$_GET["letters"];
$numvowels = (int)$_GET["vowels"];
$string = $_GET["avail"];
$size = sizeof($matches);

$imploded = $first.$last.$nth.$n.$numletters.$numvowels.$string;
file_put_contents('inputlab4.txt',$imploded);
//first
if ($first != '/^/'){
for($i = 0; $i < $size;$i++){
	if (preg_match($first, substr($matches[$i],0,1), $match) === 0) {
//		echo $matches[$i];
		unset($matches[$i]);	
	}
}
$matches = array_values($matches);
$size = sizeof($matches);
#print_r($matches);
}
//last
if ($last != '/^/'){
for($i = 0; $i < $size;$i++){
	$end = strlen($matches[$i])-1;
	if (preg_match($last, substr($matches[$i],$end), $match) === 0) {
		unset($matches[$i]);	
	}
}
$matches = array_values($matches);
$size = sizeof($matches);
}
#print_r($matches);
//nth
if ($nth != '/^/'){
for($i = 0; $i < $size;$i++){
	if (preg_match($nth, substr($matches[$i],$n-1), $match) === 0) {
		unset($matches[$i]);	
	}
}
$matches = array_values($matches);
$size = sizeof($matches);
}
//numletters
if ($numletters != null){
for($i = 0; $i < $size;$i++){
	if (!(strlen($matches[$i]) === ($numletters))) {
		unset($matches[$i]);	
	}
}
$matches = array_values($matches);
$size = sizeof($matches);
}
//numvowels
if($numvowels != null){
for($i = 0; $i < $size;$i++){
	$vowels = preg_match_all('/[aeiou]/i', $matches[$i], $match);
	if (!($vowels === ($numvowels))) {
		unset($matches[$i]);	
	}
}
$matches = array_values($matches);
$size = sizeof($matches);
}

//letters
if ($string != null){
for($i = 0; $i < $size;$i++){
	for ($j = 0; $j < strlen($string);$j++){
		$newStr = '/['.$string[$j].']/i';
		if(preg_match_all($newStr,$matches[$i],$match) === 0) {
			unset($matches[$i]);	
		}	
	}
}
$matches = array_values($matches);
#print_r($matches);
}
$imploded = implode(' ',$matches);
file_put_contents("lab4.txt", $imploded);
echo $imploded;
?>

