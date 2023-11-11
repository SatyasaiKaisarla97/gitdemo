const form = document.getElementById('my-form');
form.addEventListener('submit', saveData)

function saveData(e){
    e.preventDefault();
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    
    let my_obj = {
        "name": name, 
        "email": email
    };
    
    my_objSerialized = JSON.stringify(my_obj);
    localStorage.setItem(email, my_objSerialized);

    document.getElementById('name').value = ' ';
    document.getElementById('email').value = ' ';
}