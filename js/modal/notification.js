function showError(errorId, mess) {
    getEle(errorId).style.display = "block";
    getEle(errorId).innerHTML = mess;
}
function disableError(errorId) {
    getEle(errorId).style.display = "none";
    getEle(errorId).innerHTML = "";
}
function resetError(tbTKNV, tbTen, tbEmail, tbMatKhau, tbLuongCB, tbNgay, tbChucVu, tbGiolam) {
    getEle(tbTKNV).style.display = "none";
    getEle(tbTKNV).innerHTML = "";
    // tắt thông báo tên
    getEle(tbTen).style.display = "none";
    getEle(tbTen).innerHTML = "";
    // tắt thông báo email
    getEle(tbEmail).style.display = "none";
    getEle(tbEmail).innerHTML = "";
    // tắt thông báo mật khẩu 
    getEle(tbMatKhau).style.display = "none";
    getEle(tbMatKhau).innerHTML = "";
    // tắt thông báo lương
    getEle(tbLuongCB).style.display = "none";
    getEle(tbLuongCB).innerHTML = "";
    // tắt thông báo ngày
    getEle(tbNgay).style.display = "none";
    getEle(tbNgay).innerHTML = "";
    // tắt thông báo chức vụ
    getEle(tbChucVu).style.display = "none";
    getEle(tbChucVu).innerHTML = "";
    // tắt thông báo giờ làm
    getEle(tbGiolam).style.display = "none";
    getEle(tbGiolam).innerHTML = "";
}
function clearInput (userName, fullName, email, passWord, workday, basicSalary, position, workTime) {
    getEle(userName).value = "";
    getEle(fullName).value = "";
    getEle(email).value = "";
    getEle(passWord).value = "";
    getEle(workday).value = "";
    getEle(basicSalary).value = "";
    getEle(position).value = 0;
    getEle(workTime).value = "";

}