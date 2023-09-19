const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  // Add border to current tab
  // access particular item clicking with 'this'
  this.classList.add('tab-border');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Listen for tab click. When clicked, call selectItem
tabItems.forEach(item => item.addEventListener('click', selectItem))