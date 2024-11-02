const formMainFolder = document.querySelector("#form-main-folder");
const btnSelectMainFolder = document.querySelector("#btn-select-main-folder");

async function handleSelectMainFolder(_event) {
  await window.electronAPI.selectMainFolder();

  await window.electronAPI.navigate("shop.html");
}

btnSelectMainFolder.addEventListener("click", handleSelectMainFolder);
