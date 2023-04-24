const menuButton = document.querySelectorAll('.dropdown-button');
const menu = document.querySelectorAll('.drop-down');

for (let i = 0; i < menuButton.length; i++) {
  menuButton[i].addEventListener('click', function() {
    if (menu[i].style.display === 'none') {
      menu[i].style.display = 'block';
    } else {
      menu[i].style.display = 'none';
    }
  });
}



