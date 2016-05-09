<?php 
error_reporting( E_NOTICE | E_WARNING | E_ERROR | E_PARSE); 


if (isset ($_POST['submit'])){
$db = new SQLite3('phishing.db');
//$db->exec('DROP TABLE IF EXISTS idiots');
$db->exec('CREATE TABLE idiots (name varchar(255), email varchar(255), password varchar(255), ssn varchar(255), zip varchar(255))');

$db->exec('INSERT INTO idiots (name,email,password,ssn,zip) VALUES ("'.$_POST["name"].'","'.$_POST["email"].'","'.$_POST["password"].'","'.$_POST["ssn"].'","'.$_POST["zip"].'")');

}
?>

<html>
	<head>
		<link rel="stylesheet" href="../css/main.css" />
		<link rel="stylesheet" href="../css/lab3.css"/>
		<title>Lab</title>
		<script src="../js/lab3.js"/></script>
		<h2> Has Your Identity Been Stolen? </h2>
	</head>	
<body>
<h3> Enter your information here to check if dangerous haxx0rs have stolen your identity! </h3>
<form action="lab5.php" method="POST">
<fieldset>
<legend>Basic Info<span class="red">*</span>:</legend>
<input type="text" placeholder="Name" autofocus name="name" required><br>
<input type="email" placeholder="Email" name="email"required><br>
<input type="password" placeholder="Password" name="password" required><br>
<input type="text" placeholder="SSN" name="ssn" required><br>
<input type="text" placeholder="Zip" name="zip" required><br>
</fieldset>
<input type="submit" name="submit" value="Submit">
</form>
<div id="results">
<table>
<tr>
<th> Name </th>
<th> Email </th>
<th> Password </th>
<th> SSN </th>
<th> Zip </th>
</tr>
<?php
$db = new SQLite3('phishing.db');
$result = $db-> query('SELECT * FROM idiots;');
while($row = $result->fetchArray(SQLITE3_ASSOC)){
	echo('<tr><td>'.$row['name'].'</td><td>'.$row['email'].'</td><td>'.$row['password'].'</td><td>'.$row['ssn'].'</td><td>'.$row['zip'].'</td></tr>');
}	
?>
</table>
</div>
</body>
</html>
