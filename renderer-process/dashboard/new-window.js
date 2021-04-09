const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('my-window')

$(document).ready(function() {
  $("button").click(function() {
    $("#div1").load('https://jsonplaceholder.typicode.com/todos/1')
  })
})

newWindowBtn.addEventListener('click', (event) => {
  console.log(__dirname)
  const modalPath = path.join('file://', __dirname, '../../sections/dashboard/modal.html')
  let win = new BrowserWindow({ width: 1000, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
