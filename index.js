function shoppingList() {
  // submit button
  $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    $("#shopping-list-entry").empty();
    const listEntry = $("#shopping-list-entry").val();
    console.log(listEntry);
    $(".shopping-list").append(`<li><span class="shopping-item">${listEntry}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>`);
  })
}

$(shoppingList);
