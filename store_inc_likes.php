<?php
$mysqli = mysqli_connect('u500373.mysql.masterhost.ru','u500373','Co.2a.P2rY','u500373');
if(!$mysqli){
    echo $mysqli->error;
}
$mysqli->set_charset("utf8");
$id = $_POST['id'] + 1;
$name = $_POST['name'];
$ip = $_SERVER['REMOTE_ADDR'];
$search = $mysqli->query("SELECT * FROM `ip_list` WHERE `ip` LIKE '" . $_SERVER['REMOTE_ADDR'] . "' AND " . $name . " LIKE 1");
if($search->num_rows == 0){
    $q = $mysqli->query("UPDATE `store_list` SET `store_quantity_likes` = `store_quantity_likes`+1  WHERE `store_id`= " . "$id");
    $upip = $mysqli->query("INSERT INTO `ip_list`(ip,$name) VALUES ('" . $_SERVER['REMOTE_ADDR'] . "',1)");
} else {
    echo "Вы уже лайкали!";
}
mysqli_close();