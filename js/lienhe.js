function DangKy(){
    var fname = document.getElementById("name");
    var nameReg = /.{4,}/;
    if (!nameReg.test(fname.value)) {
        alert("Tên họ có ít nhất 4 kí tự");
        fname.focus;
        return false;
    } 
    var fusername = document.getElementById('username'); 
    var userReg = /.{6,}/;
    if (!userReg.test(fusername.value)) {
        alert("Tên đăng nhập có ít nhất 6 kí tự");
        fusername.focus;
        return false;
    }
    var fpassword1 = document.getElementById('password1');
    var passReg = /.{8,}/;
    if (!passReg.test(fpassword1.value)) { 
        alert('Mật khẩu phải có ít nhất 8 kí tự');
        fpassword1.focus; 
        return false; 
    }
    var fpassword2 = document.getElementById('password2');
    if(!password1){
        alert('Mật khẩu nhập lại không trùng khớp!');
        fpassword2.focus;
        return false;
    }
    var femail = document.getElementById('email');
    if (femail.value == 0) {
        alert('Vui lòng nhập email');
        return false;
    }
    var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!emailReg.test(femail.value)) { 
             alert('Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com');
             femail.focus; 
             return false; 
    }
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


function validateContact(){
    var fusername = document.getElementById('username'); 
    var userReg = /.{4,}/;
    if (!userReg.test(fusername.value)) {
        alert("Tên đăng nhập có ít nhất 4 kí tự");
        fusername.focus;
        return false;
    } 
    
    var femail = document.getElementById('email');
    if (femail.value == 0) {
        alert('Vui lòng nhập email');
        return false;
    }
    var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!emailReg.test(femail.value)) { 
             alert('Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com');
             femail.focus; 
             return false; 
    }
    var ftelephone = document.getElementById('telephone');
    
    var phoneReg = /^[0-9-+]+$/;
    if (!phoneReg.test(ftelephone.value)) { 
        alert('Hãy nhập số điện thoại hợp lệ.');
        ftelephone.focus; 
        return false; 
    }


    var fmessage = document.getElementById('message');
    if(fmessage.value == 0){
        alert ('Vui lòng nhập phản hồi!!!');
        return false;
    }

    var messReg = /.{15,}/;
    if (!messReg.test(fmessage.value)) {
        alert("Nội dung phản hồi ít nhất 15 kí tự!!");
        fmessage.focus;
        return false;
    }
   
    alert('Đã gửi phản hồi!');
    return true;
}