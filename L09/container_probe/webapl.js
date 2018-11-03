// 模擬アプリケーション
//
const express = require('express')
const app = express()
var start = Date.now()

// Livenessプローブのハンドラー
// 起動から40秒以内はHTTP 200 OK 返し、以降はHTTP 500 内部エラーを返します。
// Livenessプローブが失敗して、コンテナが再起動します。
//
app.get('/healthz', function(request, response) {
    var msec = Date.now() - start
    var code = 200
    if (msec > 40000 ) {
	code = 500
    }
    console.log('GET /healthz ' + code)
    response.status(code).send('OK')
})

// Redinessプローブのハンドラー
// 模擬的に起動から20秒間を初期化時間とします。
// 起動して20秒以内はHTTP 500を返し、以降はHTTP 200 を返します。 
//
app.get('/ready', function(request, response) {
    var msec = Date.now() - start
    var code = 500
    if (msec > 20000 ) {
	code = 200
    }
    console.log('GET /ready ' + code)
    response.status(code).send('OK')
})

// トップページ
//
app.get('/', function(request, response) {
    console.log('GET /')
    response.send('Hello from Node.js')
})

// サーバーポート番号 TCP
//
app.listen(3000);
