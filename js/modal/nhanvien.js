function Employee(userName, fullName, email, passWord, workday, basicSalary, position, workTime) {
    this.userName = userName;
    this.fullName = fullName;
    this.email = email;
    this.passWord = passWord;
    this.workday = workday;
    this.basicSalary = basicSalary;
    this.position = position;
    this.workTime = workTime;
    this.totalSalary = 0;
    this.rating = "";
    this.salary = function () {
        if (this.position === "Sếp") {
            this.totalSalary = this.basicSalary * 3;
        } else if (this.position === "Trưởng phòng") {
            this.totalSalary = this.basicSalary * 2;
        } else if (this.position === "Nhân viên") {
            this.totalSalary = this.basicSalary *1;
        }
    };
    this.employeeRating = function () {
        if (this.workTime >= 192) {
            this.rating = "Xuất Sắc";
        } else if (this.workTime >= 176) {
            this.rating = "Giỏi";
        }
        else if (this.workTime >= 160) {
            this.rating = "Khá";
        } else {
            this.rating = "Trung bình";
        }
    };
}