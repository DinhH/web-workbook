function insertAddItem () {
  var newInput = document.createElement('input');
  newInput.setAttribute("placeholder", "Type to add");
  let cart = document.getElementsByTagName("ul");
  cart[0].after(newInput);
  newInput.setAttribute("id", "input-text");


  let newButton = document.createElement('button');
  newButton.innerHTML = 'Add Items';
  newButton.setAttribute("id", "add-button")
  let nextButton = document.getElementsByTagName("input");
  nextButton[0].after(newButton);

  newButton.onclick = addItem;
}
