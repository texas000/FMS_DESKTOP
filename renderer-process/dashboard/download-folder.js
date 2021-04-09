const {shell} = require('electron')
const os = require('os')

const fileManagerBtn = document.getElementById('open-download-folder')

fileManagerBtn.addEventListener('click', (event) => {
    
  //Play Beep Sound
  shell.beep();

  shell.openPath(os.homedir()+"\\Downloads")

  // Archtecture
  console.log(os.arch())

  // CPU
  //   console.log(os.cpus())

  // Platform
  console.log(os.platform())

  // Hostname (Computer Name)
  console.log(os.hostname())
  
  // Print Home directory
  console.log(os.homedir())
  
  // Display network interface
  console.log(os.networkInterfaces())
  
})
