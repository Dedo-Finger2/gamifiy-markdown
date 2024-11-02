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
