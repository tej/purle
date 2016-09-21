const electron = require('electron')
const {app, BrowserWindow} = electron
var os = process.platform
const ipc = electron.ipcMain;

app.on('ready', ()=>{
  var startwin = new BrowserWindow({
    width:900,
    height:600,
    frame:false
  })
  startwin.loadURL(`file://${__dirname}/app/index.html`)

  var mainwin = new BrowserWindow({
    width:900,
    height:600,
    frame:false,
    show: false
  })
 mainwin.loadURL('file://${__dirname}/app/index.html')

 ipc.on('show-main', function(){
   mainwin.show()
 })

})
