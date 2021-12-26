//还没有成功
var name = document.getElementById("#username").value;
var name = document.getElementById("#pass").value;
var pass = document.getElementById("#remember").value;
if (localStorage.getItem('username')){
    username.value = localStorage.getItem('username');
    username.value = localStorage.getItem('pass');
    remember.check = true;
}
if (localStorage.getItem('pass')){
    username.value = localStorage.getItem('username');
    username.value = localStorage.getItem('pass');
    remember.check = true;
}
remember.addEventListener('change', function(){
    if(this.checked) {
        localStorage.setItem('username', username.value)
        localStorage.setItem('pass', pass.value)
    } else{
        localStorage.removeItem('username');
        localStorage.removeItem('pass');
    }
 })