// 主验证函数
function signup(){
  if(!simpleValidate()){
    return false;
  }

  var password = $('[name=password]').val();
  var password1 = $('[name=password1]').val();
  if(password != password1){
    warn('两次输入的密码不一致');
    return false;
  }
  $.post('', $('form').serialize())
   .done(info)
   .fail(function(res){
     warn(res.responseText);
   });
}
// 简单验证函数
function simpleValidate() {
  var username = $('[name=username]').val().trim();
  var password = $('[name=password]').val().trim();

  if(username.length === 0){
    warn('用户名/邮件不能为空');
    return false;
  }
  if(!validateEmail(username)){
    warn('邮件不合法');
    return false;
  }
  if(password.length === 0){
    warn('密码不能为空');
    return false;
  }
  return true;
}

// 警告文本显示函数
function warn(msg) {
  $('.alert').hide();
  $('.alert-danger').html(msg).show();
}

// 信息显示函数
function info(msg) {
  $('.alert').hide();
  $('.alert-success').html(msg).show();
}

// 邮件验证函数
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}