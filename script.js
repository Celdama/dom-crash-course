const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// add item
const addItem = e => {
  e.preventDefault();

  // get input value
  const newItem = document.getElementById('item').value;

  // create new li element
  const li = document.createElement('li');
  // add class
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  const deleteBtn = document.createElement('button');

  // add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm delete';

  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // append button to li
  li.appendChild(deleteBtn)

  // append li to list
  itemList.appendChild(li);
}

//remove item
const removeItem = e => {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li)
    }
  }
}

// filter items
const filterItems = e => {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // get lists
  let items = Array.from(itemList.getElementsByTagName('li'));
  items.forEach(item => {
    const itemName = item.firstChild.textContent.trim();
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
      console.log(item.style)
    }

  })
}

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);