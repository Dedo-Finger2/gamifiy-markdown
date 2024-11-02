const itemsWrapper = document.querySelector("#items-wrapper");
const dialogCreateShopItem = document.querySelector("#dialog-create-shop-item");
const btnOpenCreateShopItemDialog = document.querySelector(
  "#btn-open-create-shop-item-dialog",
);
const btnCloseCreateShopItemDialog = document.querySelector(
  "#btn-close-create-shop-item-dialog",
);
const formCreateShopItem = document.querySelector("#form-create-shop-item");

const inputItemName = document.querySelector("#item-name");
const inputItemCost = document.querySelector("#item-cost");
const inputItemDescription = document.querySelector("#item-description");
const inputItemValue = document.querySelector("#item-value");

function loadItems() {
  window.electronAPI.requestData("request:all-shop-items");

  window.electronAPI.receiveData("response:all-shop-items", (data) => {
    if (data.length === 0) {
      itemsWrapper.textContent = "No items found.";
    }
  });
}

function handleCreateShopItem(e) {
  e.preventDefault();

  const data = {
    name: inputItemName.value,
    cost: inputItemCost.value,
    description: inputItemDescription.value,
    value: inputItemValue.value,
  };

  ipcRenderer.send("item:create", data);
}

formCreateShopItem.addEventListener("submit", handleCreateShopItem);

btnOpenCreateShopItemDialog.addEventListener("click", (_e) => {
  dialogCreateShopItem.showModal();
});

btnCloseCreateShopItemDialog.addEventListener("click", (_e) => {
  dialogCreateShopItem.close();
});

loadItems();
