function Validation() {
    this.checkEmpty = function (value, errorId, mess) {
        if (value == "") {
            showError(errorId, mess);
            return false;
        }
        disableError(errorId);
        return true;
    };
    this.checkExistUserName = function (value, errorId, mess, listEmployee) {
        var isExist = false;
        for (var i = 0; i < listEmployee.length; i++) {
            var employee = listEmployee[i];
            if (value === employee.userName) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            showError(errorId, mess);
            return false;
        }
        disableError(errorId);
        return true;
    };
    this.checkEmptyOptions = function (idCheck, errorId, mess) {
        var dataCheck = document.getElementById(idCheck);
        if (dataCheck.selectedIndex !== 0) {
            disableError(errorId);
            return true;
        }
        showError(errorId, mess);
        return false;
    };
    this.checkDigitLength = function (value, errorId, mess, min, max) {
        if (value.trim().length >= min && value.trim().length <= max) {
            disableError(errorId);
            return true;
        }
        showError(errorId, mess);
        return false;
    };
    this.checkPattern = function (value, errorId, mess, letter) {
        if (value.match(letter)) {
            disableError(errorId);
            return true;
        }
        showError(errorId, mess);
        return false;
    };
    this.checkNumber = function (value, errorId, mess, min, max) {
        if (value >= min && value <= max) {
            disableError(errorId);
            return true;
        }
        showError(errorId, mess);
        return false;
    };
    this.checkDayWork = function (idCheck, errorId, mess) {
        var checkInput = document.getElementById(idCheck).value;
        // var selectedDate = new Date(checkInput);
        // if (isNaN(selectedDate)) // hỏi chỗ mentor chỗ này
        if (checkInput === "") {
            showError(errorId, mess);
            return false;
        }
        disableError(errorId);
        return true;

    };
    this.checkFormatDay = function (idCheck, errorId, mess) {
        var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        var checkInput = document.getElementById(idCheck).value;
        if (!pattern.test(checkInput)) {
            showError(errorId, mess);
            return false;
        }
        disableError(errorId);
        return true;
    };
    this.isValidDate = function (idCheck, errorId, mess) {
        var checkInput = document.getElementById(idCheck).value;
        var pattern = /^(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?(((19)|(20))?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$/;
        if (!pattern.test(checkInput)) {
            showError(errorId, mess);
            return false;
        }
        disableError(errorId);
        return true;
    };
}
