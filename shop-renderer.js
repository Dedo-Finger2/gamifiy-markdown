const paragraphCurrentCoins = document.querySelector(
  "#paragraph-current-coins",
);
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

function loadCurrentCoinsAmount() {
  window.electronAPI.requestData("request:coins");

  window.electronAPI.receiveData("response:coins", (data) => {
    if (data.length === 0) {
      paragraphCurrentCoins.textContent = 0;
    }

    paragraphCurrentCoins.textContent = data.coins;
  });
}

function loadItems() {
  window.electronAPI.requestData("request:all-shop-items");

  window.electronAPI.receiveData("response:all-shop-items", (data) => {
    if (data.length === 0) {
      itemsWrapper.textContent = "No items found.";
    }

    for (const shopItem of data) {
      const divItemWrapper = document.createElement("div");
      divItemWrapper.id = shopItem.id;
      divItemWrapper.classList.add("item-wrapper");

      const spanItemName = document.createElement("span");
      spanItemName.textContent = shopItem.name;

      const spanItemCost = document.createElement("span");
      spanItemCost.textContent = shopItem.cost;

      const paragraphItemDescription = document.createElement("p");
      paragraphItemDescription.textContent = shopItem.description;

      const btnDeleteShopItem = document.createElement("button");
      btnDeleteShopItem.classList.add("btn-delete-item");
      btnDeleteShopItem.id = shopItem.id;
      btnDeleteShopItem.textContent = "Delete";

      const btnBuyShopItem = document.createElement("button");
      btnBuyShopItem.classList.add("btn-buy-item");
      btnBuyShopItem.id = shopItem.id;
      btnBuyShopItem.textContent = "Buy";

      divItemWrapper.appendChild(spanItemName);
      divItemWrapper.appendChild(spanItemCost);
      divItemWrapper.appendChild(paragraphItemDescription);
      divItemWrapper.appendChild(btnDeleteShopItem);
      divItemWrapper.appendChild(btnBuyShopItem);
      itemsWrapper.appendChild(divItemWrapper);
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

  loadItems();
}

formCreateShopItem.addEventListener("submit", handleCreateShopItem);

btnOpenCreateShopItemDialog.addEventListener("click", (_e) => {
  dialogCreateShopItem.showModal();
});

btnCloseCreateShopItemDialog.addEventListener("click", (_e) => {
  dialogCreateShopItem.close();
});

loadItems();
loadCurrentCoinsAmount();
