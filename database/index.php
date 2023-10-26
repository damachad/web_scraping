<?php include "config.php"?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wines Checker</title>
        <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    </head>
    <body>
        <?php
            $query = "SELECT name, price, currency, market FROM wines";
            $show = $connection->prepare($query);
            $show->bind_result($tname, $tprice, $tcurrency, $tmarket);
            $show->execute();
            while ($show->fetch())
                echo "NAME: $tname | PRICE: $tprice$tcurrency | MARKET: $tmarket<hr>";
            $show->close();
        ?>
        <form method='POST' action='update.php'>
            <input id='name_input' name='name' type='hidden'/>
            <input id='price_input' name='price' type='hidden'/>
            <input id='currency_input' name='currency' type='hidden'/>
            <input id='market_input' name='market' type='hidden'/>
            <input type='submit' name='submit' value='update'/>
        </form>
        <py-script>
            <?php include "main.py"?>
        </py-script>
    </body>
</html>