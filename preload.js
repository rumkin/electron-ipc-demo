const {ipcRenderer: ipc} = require('electron');

ipc.send('preload', true);

window.addEventListener('message', (e) => {
  if (e.source !== window) {
    return;
  }
  ipc.send('test-message', e.data);
});
