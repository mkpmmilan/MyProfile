$(".customerHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

/*Customer Form Text Field Validations*/

let regCusId = /^(C00-)[0-9]{4}$/;
let regCustName = /^[A-z .]{3,}$/;
let regCustAddress = /^[A-z ,.0-9]{3,}$/;
let regCustSalary = /^[1-9][0-9]{3,}([.][0-9]{2})?$/;

let searchCustId;

// Add Customer Form Validations
$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary').on('blur', function () {
    formValidation();
});

$("#txtCustomerId").on('keyup', function (event) {
    setButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCustomerName").on('keyup', function (event) {
    setButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCustomerAddress").on('keyup', function (event) {
    setButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCustomerSalary").on('keyup', function (event) {
    setButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfValid();
    }
});

function formValidation() {
    var custId = $("#txtCustomerId").val();
    $("#txtCustomerId").css('border', '2px solid green');
    $("#customerIdError").text("");
    if (regCusId.test(custId)) {
        var custName = $("#txtCustomerName").val();
        if (regCustName.test(custName)) {
            $("#txtCustomerName").css('border', '2px solid green');
            $("#customerNameError").text("");
            var custAddress = $("#txtCustomerAddress").val();
            if (regCustAddress.test(custAddress)) {
                var custSalary = $("#txtCustomerSalary").val();
                var response = regCustSalary.test(custSalary);
                $("#txtCustomerAddress").css('border', '2px solid green');
                $("#customerAddressError").text("");
                if (response) {
                    $("#txtCustomerSalary").css('border', '2px solid green');
                    $("#customerSalaryError").text("");
                    return true;
                } else {
                    $("#txtCustomerSalary").css('border', '2px solid red');
                    $("#customerSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
                    return false;
                }
            } else {
                $("#txtCustomerAddress").css('border', '2px solid red');
                $("#customerAddressError").text("Customer address is a required field.");
                return false;
            }
        } else {
            $("#txtCustomerName").css('border', '2px solid red');
            $("#customerNameError").text("Customer name is a required field.");
            return false;
        }
    } else {
        $("#txtCustomerId").css('border', '2px solid red');
        $("#customerIdError").text("Cust ID is a required field.Pattern : C00-0001");
        return false;
    }
}

function setButtonDisableOrNot(){
        let check = formValidation();
        if (check) {
            $("#btnRegisterCustomer").attr('disabled', false);
        } else {
            $("#btnRegisterCustomer").attr('disabled', true);
        }
}

function checkIfValid() {
    var custID = $("#txtCustomerId").val();
    if (regCusId.test(custID)) {
        $("#txtCustomerName").focus();
        var custName = $("#txtCustomerName").val();
        if (regCustName.test(custName)) {
            $("#txtCustomerAddress").focus();
            var custAddress = $("#txtCustomerAddress").val();
            if (regCustAddress.test(custAddress)) {
                $("#txtCustomerSalary").focus();
                var custSalary = $("#txtCustomerSalary").val();
                var response = regCustSalary.test(custSalary);
                if (response) {
                    let res = confirm("Do you want to add this Customer..?");
                    if (res) {
                        addCustomer();
                        clearCustomerFields();
                    }
                } else {
                    $("#txtCustomerSalary").focus();
                }
            } else {
                $("#txtCustomerAddress").focus();
            }
        } else {
            $("#txtCustomerName").focus();
        }
    } else {
        $("#txtCustomerId").focus();
    }
}

// Update Customer Form Validations

$("#txtSearchCustomerId").keyup(function (event) {
    searchCustId = $("#txtSearchCustomerId").val();
    if (regCusId.test(searchCustId)) {
        $("#txtSearchCustomerId").css('border', '2px solid green');
        $("#searchCustIdError").text("");
        if (event.key == "Enter") {
            var foundOrNot = false;
            let foundCustomer = searchCustomer(searchCustId);
            if (foundCustomer) {
                $("#txtCName").val(foundCustomer.name);
                $("#txtCaddress").val(foundCustomer.address);
                $("#txtCsalary").val(foundCustomer.salary);
                $("#btnUpdateCust").prop('disabled', false);
                foundOrNot = true;
                $("#txtCName").css('border', '2px solid green');
                $("#txtCaddress").css('border', '2px solid green');
                $("#txtCsalary").css('border', '2px solid green');
            }
            if (foundOrNot == false) {
                $("#txtCName").val("");
                $("#txtCaddress").val("");
                $("#txtCsalary").val("");
                $("#btnUpdateCust").prop('disabled', true);
            }
        }
    } else {
        $("#txtSearchCustomerId").css('border', '2px solid red');
        $("#searchCustIdError").text("Cust ID is a required field.Pattern : C00-001");
        $("#btnUpdateCust").prop('disabled', true);
    }
});

$("#txtCName").keyup(function (event) {
    var custName = $("#txtCName").val();
    if (regCustName.test(custName)) {
        $("#txtCName").css('border', '2px solid green');
        $("#cNameError").text("");
        if (event.key == "Enter") {
            $("#txtCaddress").focus();
        }
        var custId = $("#txtSearchCustomerId").val();
        var custSalary = $("#txtCsalary").val();
        var custAddress = $("#txtCaddress").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

    } else {
        $("#btnUpdateCust").prop('disabled', true);
        $("#txtCName").css('border', '2px solid red');
        $("#cNameError").text("Cust name is a required field.");
    }
});

$("#txtCaddress").keyup(function (event) {
    var custAddress = $("#txtCaddress").val();
    if (regCustAddress.test(custAddress)) {
        $("#txtCaddress").css('border', '2px solid green');
        $("#cAddressError").text("");
        if (event.key == "Enter") {
            $("#txtCsalary").focus();
        }
        var custId = $("#txtSearchCustomerId").val();
        var custName = $("#txtCName").val();
        var custSalary = $("#txtCsalary").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

    } else {
        $("#btnUpdateCust").prop('disabled', true);
        $("#txtCaddress").css('border', '2px solid red');
        $("#cAddressError").text("Customer address is a required field.");
    }
});

$("#txtCsalary").keyup(function (event) {
    var custSalary = $("#txtCsalary").val();
    if (regCustSalary.test(custSalary)) {
        $("#txtCsalary").css('border', '2px solid green');
        $("#cSalaryError").text("");
        var custId = $("#txtSearchCustomerId").val();
        var custName = $("#txtCName").val();
        var custAddress = $("#txtCaddress").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

        if (event.key == "Enter") {
            let res = confirm("Do you want to update this customer?");
            if (res) {
                updateCustomer();
            }
        }

    } else {
        $("#btnUpdateCust").prop('disabled', true);
        $("#txtCsalary").css('border', '2px solid red');
        $("#cSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
    }
});

/*End Of Customer Form Text Field Validations*/

/*CRUD Operations*/
// Add Customer

function addCustomer() {
    let customerId = $("#txtCustomerId").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    let tableRow = `<tr><td>${customerId}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerSalary}</td></tr>`;

    $("#customerTable").append(tableRow);

}

// Search Customer

function searchCustomer(searchId) {
    let customer;
    $("#customerTable>tr").each(function () {
        let tcustId = $(this).children(":eq(0)").text();
        if (tcustId === searchId) {
            let tcustName = $(this).children(":eq(1)").text();
            let tcustAddress = $(this).children(":eq(2)").text();
            let tcustSalary = $(this).children(":eq(3)").text();

            customer = {
                id: searchId,
                name: tcustName,
                address: tcustAddress,
                salary: tcustSalary
            }
        }
    });
    return customer;
}

// Update Customer

function updateCustomer() {
    let updateCustId = $("#txtSearchCustomerId").val();
    let updateCustName = $("#txtCName").val();
    let updateCustAddress = $("#txtCaddress").val();
    let updateCustSalary = $("#txtCsalary").val();

    $("#customerTable>tr").each(function () {
        let id = $(this).children(":eq(0)").text();
        if (id === updateCustId) {
            $(this).children(":eq(0)").text(updateCustId);
            $(this).children(":eq(1)").text(updateCustName);
            $(this).children(":eq(2)").text(updateCustAddress);
            $(this).children(":eq(3)").text(updateCustSalary);

            clearUpdateCustomerFields();
            $("#btnUpdateCust").prop('disabled', true);
        }
    });
}

/*End Of CRUD Operations*/

/*Controller Functions*/
// Add Customer Form

$("#registerCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtCustomerId").focus();
});

$("#btnRegisterCustomer").prop('disabled', true);

$("#btnRegisterCustomer").click(function () {
    let res = confirm("Do you want to add this customer?");
    if (res) {
        addCustomer();
        clearCustomerFields();
    }
});

$("#btnclearcustomerform").click(function () {
    clearCustomerFields();
});

function clearCustomerFields() {
    $("#txtCustomerId").focus();

    $("#txtCustomerId").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalary").val("");

    $("#customerIdError").text("");
    $("#customerNameError").text("");
    $("#customerAddressError").text("");
    $("#customerSalaryError").text("");

    $("#txtCustomerId").css('border', '1px solid #ced4da');
    $("#txtCustomerName").css('border', '1px solid #ced4da');
    $("#txtCustomerAddress").css('border', '1px solid #ced4da');
    $("#txtCustomerSalary").css('border', '1px solid #ced4da');

    $("#btnRegisterCustomer").prop('disabled', true);
}


// Update Customer Form

$("#btnUpdateCust").prop('disabled', true);

$("#updateCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtSearchCustomerId").focus();
});

$("#btnUpdateCust").click(function () {
    let res = confirm("Do you want to update this customer?");
    if (res) {
        updateCustomer();
    }
});

$("#btnClearUpdateCustomer").click(function () {
    $("#btnUpdateCust").prop('disabled',true);
    clearUpdateCustomerFields();
});

function clearUpdateCustomerFields() {
    $("#txtSearchCustomerId").focus();

    $("#txtSearchCustomerId").val("");
    $("#txtCName").val("");
    $("#txtCaddress").val("");
    $("#txtCsalary").val("");

    $("#searchCustIdError").text("");
    $("#cNameError").text("");
    $("#cAddressError").text("");
    $("#cSalaryError").text("");

    $("#txtSearchCustomerId").css('border', '1px solid #ced4da');
    $("#txtCName").css('border', '1px solid #ced4da');
    $("#txtCaddress").css('border', '1px solid #ced4da');
    $("#txtCsalary").css('border', '1px solid #ced4da');
}