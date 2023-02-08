function validateDangnhap(){
    var fusername = document.getElementById('username'); 
    var userReg = /.{6,}/;
    if (!userReg.test(fusername.value)) {
        alert("Tên đăng nhập có ít nhất 4 kí tự");
        fusername.focus;
        return false;
    } 
    var fpassword = document.getElementById('password');
    var passReg = /.{8,}/;
    if (!passReg.test(fpassword.value)) { 
        alert('Mật khẩu phải có ít nhất 8 kí tự');
        fpassword.focus; 
        return false; 
    }
    alert('Đăng nhập thành công!');
    return true;
    

}

function validatequenmk(){
    var fusername1 = document.getElementById('username1'); 
    var userReg = /.{6,}/;
    if (!userReg.test(fusername1.value)) {
        alert("Tên đăng nhập có ít nhất 6 kí tự");
        fusername1.focus;
        return false;
    }
    var fpassword3 = document.getElementById('password3');
    var passReg = /.{8,}/;
    var fpassword4 = document.getElementById('password4');
    if (!passReg.test(fpassword3.value)) { 
        alert('Mật khẩu phải có ít nhất 8 kí tự');
        fpassword3.focus; 
        return false; 
    }
    else if (password4.value == '' || password3.value.length < 8 || password3.value != password4.value) {
        alert('Password không khớp.');
        return false;}
    alert('Cập nhật mật khẩu thành công!');
    return true;
    

}


    