<?php

$host = 'localhost';
$user = 'root';
$pass = 'derp';

mysql_connect($host, $user, $pass);

mysql_select_db('singles_square');

$selectdata = "SELECT noUtilisateur, nom from tblutilisateur";

$query = mysql_query($selectdata);

while($row = mysql_fetch_array($query))
{
 echo "<li class='LIdata' id=$row['noUtilisateur']><a href='#'>$row['nom']</a></li>";
}
?>