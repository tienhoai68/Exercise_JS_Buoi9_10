function showError(errorId, mess) {
    getEle(errorId).style.display = "block";
    getEle(errorId).innerHTML = mess;
}
function disableError(errorId) {
    getEle(errorId).style.display = "none";
    getEle(errorId).innerHTML = "";
}
function resetError(tbTKNV, tbTen, tbEmail, tbMatKhau, tbLuongCB, tbNgay, tbChucVu, tbGiolam) {
    disableError(tbTKNV);
    // tắt thông báo tên
    disableError(tbTen);
    // tắt thông báo email
    disableError(tbEmail);
    // tắt thông báo mật khẩu 
    disableError(tbMatKhau);
    // tắt thông báo lương
    disableError(tbLuongCB);
    // tắt thông báo ngày
    disableError(tbNgay);
    // tắt thông báo chức vụ
    disableError(tbChucVu);
    // tắt thông báo giờ làm
    disableError(tbGiolam);

}
function clearInput(userName, fullName, email, passWord, workday, basicSalary, position, workTime) {
    getEle(userName).value = "";
    getEle(fullName).value = "";
    getEle(email).value = "";
    getEle(passWord).value = "";
    getEle(workday).value = "";
    getEle(basicSalary).value = "";
    getEle(position).value = 0;
    getEle(workTime).value = "";

}