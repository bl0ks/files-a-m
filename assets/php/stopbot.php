<?php
$config_antibot = "2a7a6b614af65853b08206e93b002d42";
if(isset($config_antibot)) {
    function getUserIPszz()
    {
        $client  = @$_SERVER['HTTP_CLIENT_IP'];
        $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
        $remote  = $_SERVER['REMOTE_ADDR'];
        if(filter_var($client, FILTER_VALIDATE_IP))
        {
            $ip = $client;
        }
        elseif(filter_var($forward, FILTER_VALIDATE_IP))
        {
            $ip = $forward;
        }else{
            $ip = $remote;
        }

        return $ip;
    }
    $ip = getUserIPszz();
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_USERAGENT, "STOPBOT Blocker");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, "https://stopbot.net/api/blocker?apikey=2a7a6b614af65853b08206e93b002d42&ip=".$ip."&ua=".urlencode($_SERVER['HTTP_USER_AGENT']));
    $data = curl_exec($ch);
    curl_close($ch);
    $_SESSION['antibot_wasChecked'] = true;
    $x = json_decode($data,true);
    if($x['is_bot']){
        $_SESSION['is_bot']  = true;
        $file = fopen("antibot-block.txt","a");
        $message = $ip."\n";
        fwrite($file, $message);
        fclose($file);
        $click = fopen("total_bot.txt","a");
        fwrite($click,"$ip|Antibot Blocker"."\n");
        fclose($click);
        header("location: https://www.google.com/chrome/");
        die('<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"><html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL was not found on this server.</p><p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p></body></html>');
          
    } else {
          $_SESSION['is_bot']  = false;
    }
}
