var remote = require('remote')
var ipc = require('ipc')
var Menu = remote.require('menu')

function nfile() {

}

/*var menu = Menu.BuildFromTemplate([
  {
  label:'Electron',
  submenu:[
    {
    label: 'Prefs',
    click: function(){
      ipc.send('show-main')
    }
  }
]
}
])
Menu.setApplicationMenu(menu)
*/
