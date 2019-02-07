# Electron IPC Demo

1. Start main process.
2. Create server to server http files.
3. Create BrowserWindow with preload and contextIsolation.
4. Listen for internal postMessages in preload.js
5. Send postMessage to the main process via ipcRenderer.

## License

MIT © [Rumkin](https://rumk.in)
