$(".naviItem-1").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
    $("#itemPage").css('display', 'none');
    $("#placeOrderPage").css('display', 'none');
});

$(".naviItem-2").click(function () {
    $("#carouselExampleIndicators").css('display', 'none');
    $("#customerPage").css('display', 'block');
    $("#itemPage").css('display', 'none');
    $("#placeOrderPage").css('display', 'none');
});

$(".naviItem-3").click(function () {
    $("#carouselExampleIndicators").css('display', 'none');
    $("#customerPage").css('display', 'none');
    $("#itemPage").css('display', 'block');
    $("#placeOrderPage").css('display', 'none');
});

$(".naviItem-4").click(function () {
    $("#carouselExampleIndicators").css('display', 'none');
    $("#customerPage").css('display', 'none');
    $("#itemPage").css('display', 'none');
    $("#placeOrderPage").css('display', 'block');
});

$(".customerHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

$(".itemHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

$(".placeOrderHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

/*Customer Form JS*/

$("#registerCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtCustomerId").focus();
});

$("#btnRegisterCustomer").prop('disabled', true);

$("#btnRegisterCustomer").click(function () {
    let customerId = $("#txtCustomerId").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    let tableRow = `<tr><td>${customerId}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerSalary}</td></tr>`;

    $("#customerTable").append(tableRow);

    $("#txtCustomerId").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalary").val("");

    $("#btnRegisterCustomer").prop('disabled', true);

});

let regCusId = /^(C00-)[0-9]{3,4}$/;
let custId;
$("#txtCustomerId").keyup(function (event) {
    custId = $("#txtCustomerId").val();
    if (regCusId.test(custId)) {
        $("#txtCustomerId").css('border', '2px solid green');
        $("#customerIdError").text("");
        $("#txtCustomerName").css('border', '2px solid red');
        $("#customerNameError").text("Customer name is a required field.");
        if (event.key == "Enter") {
            $("#txtCustomerName").focus();
        }
        custSalary = $("#txtCustomerSalary").val();
        custName = $("#txtCustomerName").val();
        custAddress = $("#txtCustomerAddress").val();
        if(regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }
    } else {
        $("#txtCustomerId").css('border', '2px solid red');
        $("#customerIdError").text("Cust ID is a required field.Pattern : C00-001");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});

let regCustName = /^[A-z .]{3,}$/;
let custName;
$("#txtCustomerName").keyup(function (event) {
    custName = $("#txtCustomerName").val();
    if (regCustName.test(custName)) {
        $("#txtCustomerName").css('border', '2px solid green');
        $("#customerNameError").text("");
        $("#txtCustomerAddress").css('border', '2px solid red');
        $("#customerAddressError").text("Customer address is a required field.");
        if (event.key == "Enter") {
            $("#txtCustomerAddress").focus();
        }
        custId = $("#txtCustomerId").val();
        custSalary = $("#txtCustomerSalary").val();
        custAddress = $("#txtCustomerAddress").val();
        if(regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }
    } else {
        $("#txtCustomerName").css('border', '2px solid red');
        $("#customerNameError").text("Cust name is a required field.");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});


let regCustAddress = /^[A-z ,.0-9]{3,}$/;
let custAddress;
$("#txtCustomerAddress").keyup(function (event) {
    custAddress = $("#txtCustomerAddress").val();
    if (regCustAddress.test(custAddress)) {
        $("#txtCustomerAddress").css('border', '2px solid green');
        $("#customerAddressError").text("");
        $("#txtCustomerSalary").css('border', '2px solid red');
        $("#customerSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
        if (event.key == "Enter") {
            $("#txtCustomerSalary").focus();
        }
        custId = $("#txtCustomerId").val();
        custName = $("#txtCustomerName").val();
        custSalary = $("#txtCustomerSalary").val();
        if(regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }
    } else {
        $("#txtCustomerAddress").css('border', '2px solid red');
        $("#customerAddressError").text("Customer address is a required field.");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});

let regCustSalary = /^[1-9][0-9]{3,}([.][0-9]{2})?$/;
let custSalary;
$("#txtCustomerSalary").keyup(function (event) {
    custSalary = $("#txtCustomerSalary").val();
    if (regCustSalary.test(custSalary)) {
        $("#txtCustomerSalary").css('border', '2px solid green');
        $("#customerSalaryError").text("");
        custId = $("#txtCustomerId").val();
        custName = $("#txtCustomerName").val();
        custAddress = $("#txtCustomerAddress").val();
        if(regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }
    } else {
        $("#txtCustomerSalary").css('border', '2px solid red');
        $("#customerSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});


/*Item Form JS*/

$("#addItem").on('shown.bs.modal', function () {
    $(this).find("#txtIcode").focus();
});

$("#btnAddItem").prop('disabled',true);

$("#btnAddItem").click(function () {

    let itemCode = $("#txtIcode").val();
    let itemName = $("#txtItemName").val();
    let itemUnitPrice = $("#txtItemUnitPrice").val();
    let itemQty = $("#txtItemQty").val();

    let tableRow = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemUnitPrice}</td><td>${itemQty}</td></tr>`;

    $("#itemTable").append(tableRow);

    $("#txtIcode").val("");
    $("#txtItemName").val("");
    $("#txtItemUnitPrice").val("");
    $("#txtItemQty").val("");

    $("#btnAddItem").prop('disabled',true);

});

/*$("#txtIcode").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemName").focus();
    }
});*/
$("#txtItemName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemUnitPrice").focus();
    }
});
$("#txtItemUnitPrice").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemQty").focus();
    }
});
$("#txtItemQty").keydown(function (event) {
    if (event.key == "Enter") {
        let itemCode = $("#txtIcode").val();
        let itemName = $("#txtItemName").val();
        let itemUnitPrice = $("#txtItemUnitPrice").val();
        let itemQty = $("#txtItemQty").val();

        let tableRow = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemUnitPrice}</td><td>${itemQty}</td></tr>`;

        $("#itemTable").append(tableRow);

        $("#txtIcode").val("");
        $("#txtItemName").val("");
        $("#txtItemUnitPrice").val("");
        $("#txtItemQty").val("");

        $("#txtIcode").focus();
    }
});

