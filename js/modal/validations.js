function Validation() {
    this.checkEmpty = function (value, errorId, mess) {
        if (value == "") {
            getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess;
            return false;
        }
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;
    };
    this.checkExistUserName = function(value, errorId, mess, listEmployee) {
        var isExist = false;
        for (var i = 0; i < listEmployee.length ; i++) {
            var employee = listEmployee[i];
            if (value === employee.userName) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess;
            return false;
        }
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;
    };
    this.checkEmptyOptions = function (idCheck, errorId, mess) {
        var dataCheck = document.getElementById(idCheck);
        if (dataCheck.selectedIndex !== 0) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };
    this.checkDigitLength = function (value, errorId, mess, min, max) {
        if (value.trim().length >= min && value.trim().length <= max) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };
    this.checkPattern = function (value, errorId, mess, letter) {
        if (value.match(letter)) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };
    this.checkNumber = function (value, errorId, mess, min, max) {
        if ( value >= min && value <= max) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };
    this.checkDayWork = function (idCheck, errorId, mess) {
        var checkInput = document.getElementById(idCheck).value;
        var selectedDate = new Date(checkInput);
        // if (isNaN(selectedDate)) // hỏi chỗ mentor chỗ này
        if (isNaN(selectedDate.getTime())) {
            getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess;
            return false;
        }
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;

    };
    this.checkFormatDay = function (idCheck, errorId, mess) {
        var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        var checkInput = document.getElementById(idCheck).value;
        if (!pattern.test(checkInput)) {
            getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess;
            return false;
        }
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;
    };
}
