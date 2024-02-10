<?php
    //Ex 5
    echo"EX 5";
    echo"<br>";

    $string = "Repeticao";
    $invertida = "";

    for($i = strlen($string) - 1; $i >= 0; $i--){
        $invertida .= $string[$i];
    }

    echo $invertida;

    echo "<br>";
    echo "<br>";


?>