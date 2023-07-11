var listEmployee = new ListEmployee();
var validation = new Validation();
getLocalStorage();
function getEle(id) {
    return document.getElementById(id);
}
// hàm thông tin nhân viên
function employeeInformation(isAdd) {
    var userName = getEle("tknv").value;
    var fullName = getEle("name").value;
    var email = getEle("email").value;
    var passWord = getEle("password").value;
    var workday = getEle("datepicker").value;
    var basicSalary = (getEle("luongCB").value).replace(/\s/g, "");
    var position = getEle("chucvu").value;
    var workTime = getEle("gioLam").value * 1;

    isValue = true;
    if (isAdd) {
        isValue &= validation.checkEmpty(userName, "tbTKNV", "(*) Vui lòng nhập tài khoản") && validation.checkDigitLength(userName, "tbTKNV", "(*) Vui lòng nhập từ 4 - 6 kí số", 4, 6) && validation.checkExistUserName(userName, "tbTKNV", " (*) Tài Khoản đã tồn tại", listEmployee.arr);
    }
    isValue &= validation.checkEmpty(fullName, "tbTen", "(*) Vui lòng nhập họ và tên") && validation.checkPattern(fullName, "tbTen", "(*) Họ và Tên vui lòng nhập chữ", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
    isValue &= validation.checkEmpty(email, "tbEmail", "(*) Vui lòng nhập email") && validation.checkPattern(email, "tbEmail", "(*) Vui lòng nhập email đúng định dạng", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    isValue &= validation.checkEmpty(passWord, "tbMatKhau", "(*) Vui lòng nhập mật khẩu") && validation.checkDigitLength(passWord, "tbMatKhau", "(*) Vui lòng nhập mật khẩu 6-10 kí tự", 6, 10) && validation.checkPattern(passWord, "tbMatKhau", " (*) Mật khẩu bao gồm chữ viết hoa, thường, số, kí tự đặc biệt", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/);
    isValue &= validation.checkEmpty(basicSalary, "tbLuongCB", "(*) Vui lòng nhập lương") && validation.checkNumber(basicSalary, "tbLuongCB", "(*) Vui lòng nhập lương từ 1000000 => 20000000", 1000000, 20000000);
    isValue &= validation.checkEmpty(workTime, "tbGiolam", "(*) Vui lòng nhập giờ làm") && validation.checkNumber(workTime, "tbGiolam", "(*) Vui lòng nhập giờ làm từ 80 => 200 giờ", 80, 200);
    isValue &= validation.checkEmptyOptions("chucvu", "tbChucVu", "(*) Vui lòng chọn chức vụ");
    isValue &= validation.checkDayWork("datepicker", "tbNgay", "(*) Vui lòng chọn ngày làm") && validation.checkFormatDay("datepicker", "tbNgay", "(*) Vui lòng chọn theo định dạng MM/dd/yyyy") && validation.isValidDate("datepicker", "tbNgay", "(*) Vui lòng chọn ngày hợp lệ");

    if (isValue) {
        var employee = new Employee(userName, fullName, email, passWord, workday, basicSalary, position, workTime);
        employee.salary();
        employee.employeeRating();
        return employee;
    }
}
getEle("btnThem").onclick = function () {
    getEle("btnCapNhat").disabled = true;
    getEle("btnThemNV").disabled = false;
    getEle("tknv").disabled = false;
    resetError("tbTKNV", "tbTen", "tbEmail", "tbMatKhau", "tbLuongCB", "tbNgay", "tbChucVu", "tbGiolam");
    clearInput("tknv", "name", "email", "password", "datepicker", "luongCB", "chucvu", "gioLam");
}
// hàm thêm nhân viên
function addUser() {
    var user = employeeInformation(true);
    if (user) {
        listEmployee.addEmployee(user);
        renderTable(listEmployee.arr);
        setLocalStorage()
    }

}
// hàm editUser 
function editUser(userName) {
    var employee = listEmployee.editUser(userName);
    if (employee) {
        getEle("tknv").value = employee.userName;
        getEle("name").value = employee.fullName;
        getEle("email").value = employee.email;
        getEle("password").value = employee.passWord;
        getEle("datepicker").value = employee.workday;
        getEle("luongCB").value = employee.basicSalary;
        getEle("chucvu").value = employee.position;
        getEle("gioLam").value = employee.workTime;
    }
    getEle("btnThemNV").disabled = true;
    getEle("btnCapNhat").disabled = false;
    getEle("tknv").disabled = true;
    resetError("tbTKNV", "tbTen", "tbEmail", "tbMatKhau", "tbLuongCB", "tbNgay", "tbChucVu", "tbGiolam");
}
// hàm updateUser 
function updateUser() {
    var employee = employeeInformation(false);
    if (employee) {
        listEmployee.updateUser(employee);
        renderTable(listEmployee.arr);
        setLocalStorage();
    }
}
// hàm xóa User 
function delUser(userName) {
    listEmployee.deleteUser(userName);
    renderTable(listEmployee.arr);
    setLocalStorage();
}
// hàm tìm kiếm
function searchUser() {
    var dataInput = getEle("searchName").value;
    var dataSearch = listEmployee.searchUserRating(dataInput);
    renderTable(dataSearch);
}
getEle("searchName").addEventListener("keyup", searchUser);
// hàm renderTable 
function renderTable(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var user = data[i];
        content += `
                <tr>
                    <td>${user.userName} </td>
                    <td>${user.fullName} </td>
                    <td>${user.email} </td>
                    <td>${user.workday} </td>
                    <td>${user.position} </td>
                    <td>${user.totalSalary.toLocaleString()} VND</td>
                    <td>${user.rating} </td>
                    <td> 
                    <button onclick="editUser('${user.userName}')" class="btn btn-warning" data-toggle="modal"
                    data-target="#myModal">Sửa</button>
                    <button class="btn btn-danger" onclick="delUser('${user.userName}')">Xóa</button>
                    </td>
                </tr>
            `
    }
    getEle("tableDanhSach").innerHTML = content;
    return content;
}
// hàm setLocalStorage
function setLocalStorage() {
    var dataString = JSON.stringify(listEmployee.arr);
    localStorage.setItem("Employee", dataString);
}
// hàm getLocalStorage
function getLocalStorage() {
    if (localStorage.getItem("Employee")) {
        var dataString = localStorage.getItem("Employee");
        var dataJson = JSON.parse(dataString);
        listEmployee.arr = dataJson;
        renderTable(listEmployee.arr);
    }
}