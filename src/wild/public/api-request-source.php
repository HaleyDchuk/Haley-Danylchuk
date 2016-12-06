<?php
  $request = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial&APPID=c5ddb19e5df75b259cd0e5aaafc1f2c3';
  $response = file_get_contents($request);
  echo $response;
?>
