const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  selectMainFolder: () => ipcRenderer.invoke("dialog:selectFolder"),
  navigate: (page) => ipcRenderer.send("navigate", page),
  requestData: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  receiveData: (channel, func) => {
    ipcRenderer.on(channel, (event, data) => func(data));
  },
});

contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});
