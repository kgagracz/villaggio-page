let options = document.getElementsByClassName('__main-menu-item');
console.log(options);

for (let i = 0; i <= options.length; i++) {
    options[i].addEventListener('click', function(){
        console.log('klik na ' + options[i].id);
        
        
    })
};