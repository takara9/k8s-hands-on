<html>
<head><title>PHP CONNECTION TEST</title></head>
<body>

<?php
$servername = "mysql";
$database = "mysql";

$username = getenv('MYSQL_USER');      // 環境変数からユーザーIDを取得
$password = getenv('MYSQL_PASSWORD');  // 同様にパスワードも取得

// MySQLサーバーへ接続して結果を表示
try {
    $dsn = "mysql:host=$servername;dbname=$database";
    $conn = new PDO($dsn, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    print("<p>接続に成功しました。</p>");
} catch(PDOException $e) {
    print("<p>接続に失敗しました。</p>");
    echo $e->getMessage();
}

$conn = null; 
print('<p>クローズしました。</p>');

?>
</body>
</html>
