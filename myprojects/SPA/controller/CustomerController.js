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
