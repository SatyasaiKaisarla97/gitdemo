const form = document.getElementById('my-form');
form.addEventListener('submit', saveData);

function saveData(e){
    e.preventDefault();
    let name = document.querySelector('#username').value;
    let email = document.querySelector('#useremail').value;
    let phone = document.querySelector('#userphone').value;

    let my_obj = {
        "name": name,
        "email": email,
        "phone": phone
    
    };
    
    my_objSerialized = JSON.stringify(my_obj);
    localStorage.setItem(email, my_objSerialized);

    let details = name+' - '+email+' - '+phone;
    const li = document.createElement('li')
    li.innerText = details;
    var ul = document.getElementById('user-list');
    ul.appendChild(li)


    document.getElementById('username').value = ' ';
    document.getElementById('useremail').value = ' ';
    document.getElementById('userphone').value = ' ';
 }