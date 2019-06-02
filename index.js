function shoppingList() {
  $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    $("#shopping-list-entry").empty();
    const listEntry = $("#shopping-list-entry").val();
    $(".shopping-list").append(`<li><span class="shopping-item">${listEntry}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>`);
    $('#js-shopping-list-form').children('input').val('');
  });

  $(".shopping-list").on('click','.shopping-item-toggle', function(event) {
    $(this).parent('.shopping-item-controls').siblings().toggleClass("shopping-item__checked");
  })

  $(".shopping-list").on('click','.shopping-item-delete', function(event) {
    $(this).closest('li').remove();

  });


}

$(shoppingList);
