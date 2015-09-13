var app = require('app')
var BrowserWindow = require('browser-window')

require('crash-reporter').start()

var mainWindow = null

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    resizable: false,
    frame: true
  })

  mainWindow.loadUrl('file://' + __dirname + '/app/main.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})