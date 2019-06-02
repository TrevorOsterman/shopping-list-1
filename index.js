function shoppingList() {
  $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
  })
}

$(shoppingList);
