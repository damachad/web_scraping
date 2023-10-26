<?php
    include "config.php";
    
    if (isset($_POST['submit']))
    {
        $name = $_POST['name'];
        $price = $_POST['price'];
        $currency = $_POST['currency'];
        $market = $_POST['market'];
        
        $query = "TRUNCATE TABLE wines";
        $delete = $connection->prepare($query);
        $delete->execute();
        $delete->close();

        $query = "INSERT INTO wines (name, price, currency, market) VALUES (?, ?, ?, ?)";
        $insert = $connection->prepare($query);
        $insert->bind_param("sdss", $name, $price, $currency, $market);
        $insert->execute();
        $insert->close();
    }
    header('location: https://checkwines.000webhostapp.com/index.php');
?>