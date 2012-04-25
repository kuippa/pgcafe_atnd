<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
<head>
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Imagetoolbar" content="no" />
<meta name="robots" content="INDEX,FOLLOW" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="SHORTCUT ICON" href="" />
<link rel="start" href="" title="" />
<title>PGCAFE ATND</title>
</head>
<body id="body">
<?php
function convert($str) {
    return mb_convert_encoding($str, mb_internal_encoding(), "auto");
}
?>

<?php
    $article = simplexml_load_file('http://api.atnd.org/events/?keyword_or=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%82%BA%E3%82%AB%E3%83%95%E3%82%A7&count=12&format=xml');

    echo "<ul>";
    foreach ($article->events->event as $event) {
        echo "<li>";
        $eveurl = $event->{'event_url'};
        echo "<b><a href=\"$eveurl\">". $event->title . "</a></b>";
        echo "</li>";
    }
    echo "</ul>";
?>

<br><br><br>
プログラマーズカフェのページへ戻る
<a href="http://mitaka.pgcafe.net/">http://mitaka.pgcafe.net/</a>

</body>
</html>
