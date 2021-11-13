function check() {
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  if (name == "admin" && pass == "2007221") //超级管理员 用户名:admin 密码:2007221
  {
    alert("登入成功");
    window.document.f.action = "index/index.html";
    window.document.f.submit();
  }
  //else {
  //  alert("用户名或密码错误");
  //}
  if (name == "1" && pass == "1") {
    alert("登入成功");
    window.document.f.action = "index/index 1.html";
    window.document.f.submit();
  }
  //else {
  //  alert("用户名或密码错误");
  //}
}
//loading层 
var index = layer.load(1, {
  shade: [0.1, '#fff'] //0.1透明度的白色背景
});