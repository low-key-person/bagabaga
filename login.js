function check() {
  var name = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;
  if (name == "admin" && pass == "2007221") //超级管理员 用户名:admin 密码:2007221
  {
    alert("登入成功");
    window.document.f.action = "./Home/user/index.html";
    window.document.f.submit();
  }
  //else {
  //  alert("用户名或密码错误");
  //}
  if (name == "1" && pass == "1") //游客 用户名:1 密码:1 
  {
    alert("登入成功");
    window.document.f.action = "./Home/user/index 1.html";
    window.document.f.submit();
  }
  //else {
  //  alert("用户名或密码错误");
  //}
  if (name == "wangchenyang" && pass == "250250") //普通成员 用户名:wangchenyang 密码:250250
  {
    alert("登入成功");
    window.document.f.action = "./Home/user/index wcy.html";
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