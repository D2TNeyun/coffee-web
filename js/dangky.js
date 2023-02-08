function validateDangky(){


    var fname = document.getElementById('name');
    var nameReg = /.{4,}/;
    if (!nameReg.test(fname.value)) {
        alert("Tên họ có ít nhất 4 kí tự");
        fname.focus;
        return false;
    } 

    var fusername = document.getElementById('username'); 
    var userReg = /.{4,}/;
    if (!userReg.test(fusername.value)) {
        alert("Tên đăng nhập có ít nhất 4 kí tự");
        fusername.focus;
        return false;
    }

    var fpassword1 = document.getElementById('password1');
    var passReg = /.{8,}/;
    if (!passReg.test(fpassword1.value)) { 
        alert('Mật khẩu phải có ít nhất 8 kí tự');
        fpassword1.focus;
        return false;
    }else if (password2.value == '' || password1.value.length < 8 || password1.value != password2.value) {
        alert('Nhập lại mật khẩu không trùng khớp!');
        return false;}

    // var fpassword2 = document.getElementById('password2');
    // if(password2.value!=password1.value){
    //     alert('Mật khẩu nhập lại không trùng khớp!');
    //     return false;
    // }

    var ftelephone = document.getElementById('telephone');
    var phoneReg = /^[0-9-+]+$/;
    if (!phoneReg.test(ftelephone.value)) { 
        alert('Hãy nhập số điện thoại hợp lệ.');
        ftelephone.focus; 
        return false; 
    }
    alert('Đăng kí thành công');
    return true;
}