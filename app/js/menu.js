document.addEventListener('DOMContentLoaded', (event) => {
    let options = document.getElementsByClassName('__main-menu-item');
    let exitButtons = document.getElementsByClassName('button-icon-container');



    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function () {
            console.log('klik na ' + options[i].id);
            document.querySelector('body').style.backgroundColor = 'rgba(15, 14, 14, 0.65)';
            if (options[i].id == 'pizza') {
                showMenu('pizza-display');
            }
            else if (options[i].id == 'pork') {
                showMenu('pork-display');
            }
            else if (options[i].id == 'chicken') {
                showMenu('chicken-display');
            }
            else if (options[i].id == 'pasta') {
                showMenu('pasta-display');
            }
            else if (options[i].id == 'fish') {
                showMenu('fish-display');
            }
            else if (options[i].id == 'bar') {
                showMenu('bar-display');
            }
            else if (options[i].id == 'snacks') {
                showMenu('snacks-display');
            }
            else if (options[i].id == 'salad') {
                showMenu('salad-display');
            }
            else if (options[i].id == 'drink') {
                showMenu('drink-display');
            }
            function showMenu(id) {
                document.getElementById(id).style.zIndex = '10';
                document.getElementById(id).style.opacity = '1';
            }
            for (let j = 0; j < exitButtons.length; j++) {

                exitButtons[j].addEventListener('click', function () {
                    console.log('click exit');
                    let allMenus = document.getElementsByClassName('menu-added');
                    console.log(allMenus[0]);
                    allMenus[j].style.zIndex = '-10';
                })
            }
        })
    };
});