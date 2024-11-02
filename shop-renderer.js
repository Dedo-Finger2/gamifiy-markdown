const itemsWrapper = document.querySelector("#items-wrapper");

function loadItems() {
  window.electronAPI.requestData("request:all-shop-items");

  window.electronAPI.receiveData("response:all-shop-items", (data) => {
    if (data.length === 0) {
      itemsWrapper.textContent = "No items found.";
    }
  });
}

loadItems();
