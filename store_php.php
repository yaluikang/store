<?php
$mysqli = mysqli_connect('u500373.mysql.masterhost.ru','u500373','Co.2a.P2rY','u500373');
if(!$mysqli){
    echo $mysqli->error;
}
$mysqli->set_charset("utf8");
$q = $mysqli->query("SELECT store_url, store_name, store_price, store_quantity_likes FROM `store_list`");
$arr = array('store_url'=>array(),'store_name'=>array(),'store_price'=>array(),'store_quantity_likes'=>array());

while($row = $q->fetch_assoc()) {
    array_push($arr['store_url'],$row['store_url']);
    array_push($arr['store_name'],$row['store_name']);
    array_push($arr['store_price'],$row['store_price']);
    array_push($arr['store_quantity_likes'],$row['store_quantity_likes']);
}
echo json_encode($arr,JSON_UNESCAPED_UNICODE);
mysqli_close();
/*$row = $q->fetch_assoc();
$row = $q->fetch_assoc();
echo $row['store_url'];*/