const form = document.getElementById('my-form');
form.addEventListener('submit', saveData)

function saveData(e){
    e.preventDefault();
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    
    localStorage.setItem(name,email);

    document.getElementById('name').value = ' ';
    document.getElementById('email').value = ' ';
}