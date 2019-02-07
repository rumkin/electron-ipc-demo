// In the main process.
const {app, ipcMain: ipc, BrowserWindow} = require('electron');
const startServer = require('./server.js');

ipc.on('preload', () => {
  console.log('preloaded');
});

ipc.on('test-message', (event, msg) => {
  console.log('message: %o', msg);
});

const onReady = () => {
  let win = new BrowserWindow({
    width: 900,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: false,
      contextIsolation: true,
      preload: __dirname + '/preload.js',
    },
  });

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

  // Load a remote URL
  win.loadURL('http://localhost:8080');

  // Or load a local HTML file
  // win.loadURL(`file://${__dirname}/app/index.html`)
};

startServer();
app.on('ready', onReady);
