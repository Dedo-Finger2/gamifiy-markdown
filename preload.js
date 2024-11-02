const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  selectMainFolder: () => ipcRenderer.invoke("dialog:selectFolder"),
  navigate: (page) => ipcRenderer.send("navigate", page),
});
