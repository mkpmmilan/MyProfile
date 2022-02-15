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
/*Customer Registration*/

let regCusId = /^(C00-)[0-9]{3,4}$/;
let regCustName = /^[A-z .]{3,}$/;
let regCustAddress = /^[A-z ,.0-9]{3,}$/;
let regCustSalary = /^[1-9][0-9]{3,}([.][0-9]{2})?$/;

let custId;
let custName;
let custAddress;
let custSalary;

$("#registerCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtCustomerId").focus();
});

$("#btnRegisterCustomer").prop('disabled', true);

$("#btnRegisterCustomer").click(function () {
    let res = confirm("Do you want to add this customer?");
    if(res){
        addCustomer();
    }
});

function addCustomer(){
    let customerId = $("#txtCustomerId").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    let tableRow = `<tr><td>${customerId}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerSalary}</td></tr>`;

    $("#customerTable").append(tableRow);

    $("#btnRegisterCustomer").prop('disabled', true);

    clearCustomerFields();
}


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
        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }
    } else {
        $("#txtCustomerId").css('border', '2px solid red');
        $("#customerIdError").text("Cust ID is a required field.Pattern : C00-001");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});

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
        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }
    } else {
        $("#txtCustomerName").css('border', '2px solid red');
        $("#customerNameError").text("Cust name is a required field.");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});


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
        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }
    } else {
        $("#txtCustomerAddress").css('border', '2px solid red');
        $("#customerAddressError").text("Customer address is a required field.");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});


$("#txtCustomerSalary").keyup(function (event) {
    custSalary = $("#txtCustomerSalary").val();
    if (regCustSalary.test(custSalary)) {
        $("#txtCustomerSalary").css('border', '2px solid green');
        $("#customerSalaryError").text("");
        custId = $("#txtCustomerId").val();
        custName = $("#txtCustomerName").val();
        custAddress = $("#txtCustomerAddress").val();
        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnRegisterCustomer").prop('disabled', false);
        }

        if(event.key=="Enter"){
            let res = confirm("Do you want to add this customer?");
            if(res){
                addCustomer();
            }
        }

    } else {
        $("#txtCustomerSalary").css('border', '2px solid red');
        $("#customerSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});

$("#btnclearcustomerform").click(function () {
    $("#btnRegisterCustomer").prop('disabled', true);
    clearCustomerFields();
});

function clearCustomerFields(){
    $("#txtCustomerId").focus();

    $("#txtCustomerId").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalary").val("");

    $("#txtCustomerId").css('border', '1px solid #ced4da');
    $("#txtCustomerName").css('border', '1px solid #ced4da');
    $("#txtCustomerAddress").css('border', '1px solid #ced4da');
    $("#txtCustomerSalary").css('border', '1px solid #ced4da');
}

/*Customer Update*/

$("#btnUpdateCust").prop('disabled', true);

let searchCustId;
$("#txtSearchCustomerId").keyup(function (event) {
    searchCustId = $("#txtSearchCustomerId").val();
    if (regCusId.test(searchCustId)) {
        $("#txtSearchCustomerId").css('border', '2px solid green');
        $("#searchCustIdError").text("");
        if (event.key == "Enter") {
            var foundOrNot = false;

            let foundCustomer = searchCustomer(searchCustId);
            if(foundCustomer){
                $("#txtCName").val(foundCustomer.name);
                $("#txtCaddress").val(foundCustomer.address);
                $("#txtCsalary").val(foundCustomer.salary);
                $("#btnUpdateCust").prop('disabled',false);
                foundOrNot=true;
                $("#txtCName").css('border','2px solid green');
                $("#txtCaddress").css('border','2px solid green');
                $("#txtCsalary").css('border','2px solid green');
            }
            if(foundOrNot==false){
                $("#txtCName").val("");
                $("#txtCaddress").val("");
                $("#txtCsalary").val("");
                $("#btnUpdateCust").prop('disabled',true);
            }
        }
    } else {
        $("#txtSearchCustomerId").css('border', '2px solid red');
        $("#searchCustIdError").text("Cust ID is a required field.Pattern : C00-001");
        $("#btnRegisterCustomer").prop('disabled', true);
    }
});

function searchCustomer(searchId) {
    let customer;
    $("#customerTable>tr").each(function () {
        let tcustId = $(this).children(":eq(0)").text();
        if (tcustId === searchId) {
            let tcustName = $(this).children(":eq(1)").text();
            let tcustAddress = $(this).children(":eq(2)").text();
            let tcustSalary = $(this).children(":eq(3)").text();

            customer={
                id:searchId,
                name:tcustName,
                address:tcustAddress,
                salary:tcustSalary
            }
        }
    });
    return customer;
}

$("#txtCName").keyup(function (event) {
    custName = $("#txtCName").val();
    if (regCustName.test(custName)) {
        $("#txtCName").css('border', '2px solid green');
        $("#cNameError").text("");
        if (event.key == "Enter") {
            $("#txtCaddress").focus();
        }
        custId = $("#txtSearchCustomerId").val();
        custSalary = $("#txtCsalary").val();
        custAddress = $("#txtCaddress").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

    } else {
        $("#txtCName").css('border', '2px solid red');
        $("#cNameError").text("Cust name is a required field.");
    }
});

$("#txtCaddress").keyup(function (event) {
    custAddress = $("#txtCaddress").val();
    if (regCustAddress.test(custAddress)) {
        $("#txtCaddress").css('border', '2px solid green');
        $("#cAddressError").text("");
        if (event.key == "Enter") {
            $("#txtCsalary").focus();
        }
        custId = $("#txtSearchCustomerId").val();
        custName = $("#txtCName").val();
        custSalary = $("#txtCsalary").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

    } else {
        $("#txtCaddress").css('border', '2px solid red');
        $("#cAddressError").text("Customer address is a required field.");
    }
});

$("#txtCsalary").keyup(function (event) {
    custSalary = $("#txtCsalary").val();
    if (regCustSalary.test(custSalary)) {
        $("#txtCsalary").css('border', '2px solid green');
        $("#cSalaryError").text("");
        custId = $("#txtSearchCustomerId").val();
        custName = $("#txtCName").val();
        custAddress = $("#txtCaddress").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

        /*if(event.key=="Enter"){
            let res = confirm("Do you want to update this customer?");
            if(res){

            }
        }*/

    } else {
        $("#txtCsalary").css('border', '2px solid red');
        $("#cSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
    }
});


/*Item Form JS*/

$("#addItem").on('shown.bs.modal', function () {
    $(this).find("#txtIcode").focus();
});

$("#btnAddItem").prop('disabled', true);


$("#btnSaveItem").click(function () {

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

    $("#btnAddItem").prop('disabled', true);

    $("#txtIcode").css('border', '1px solid #ced4da');
    $("#txtItemName").css('border', '1px solid #ced4da');
    $("#txtItemUnitPrice").css('border', '1px solid #ced4da');
    $("#txtItemQty").css('border', '1px solid #ced4da');

});

let regItemCode = /^(I00-)[0-9]{3,4}$/;
let iCode;
$("#txtIcode").keyup(function (event) {
    iCode = $("#txtIcode").val();
    if (regItemCode.test(iCode)) {
        $("#txtIcode").css('border', '2px solid green');
        $("#itemCodeError").text("");
        $("#txtItemName").css('border', '2px solid red');
        $("#itemNameError").text("Item name is a required field.");
        if (event.key == "Enter") {
            $("#txtItemName").focus();
        }
        iQty = $("#txtItemQty").val();
        iUnitPrice = $("#txtItemUnitPrice").val();
        iName = $("#txtItemName").val();
        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnAddItem").prop('disabled', false);
        }
    } else {
        $("#txtIcode").css('border', '2px solid red');
        $("#itemCodeError").text("Item Code is a required field.Pattern : I00-001");
        $("#btnAddItem").prop('disabled', true);
    }
});

let regItemName = /^[A-z 0-9.]{3,}$/;
let iName;
$("#txtItemName").keyup(function (event) {
    iName = $("#txtItemName").val();
    if (regItemName.test(iName)) {
        $("#txtItemName").css('border', '2px solid green');
        $("#itemNameError").text("");
        $("#txtItemUnitPrice").css('border', '2px solid red');
        $("#itemUnitPriceError").text("Unit Price is a required field.Pattern : 100.00 or 100");
        if (event.key == "Enter") {
            $("#txtItemUnitPrice").focus();
        }
        iQty = $("#txtItemQty").val();
        iUnitPrice = $("#txtItemUnitPrice").val();
        iCode = $("#txtIcode").val();
        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnAddItem").prop('disabled', false);
        }
    } else {
        $("#txtItemName").css('border', '2px solid red');
        $("#itemNameError").text("Item name is a required field.");
        $("#btnAddItem").prop('disabled', true);
    }
});

let regItemUnitPrice = /^[0-9]{1,}([.][0-9]{2})?$/;
let iUnitPrice;
$("#txtItemUnitPrice").keyup(function (event) {
    iUnitPrice = $("#txtItemUnitPrice").val();
    if (regItemUnitPrice.test(iUnitPrice)) {
        $("#txtItemUnitPrice").css('border', '2px solid green');
        $("#itemUnitPriceError").text("");
        $("#txtItemQty").css('border', '2px solid red');
        $("#itemQtyError").text("Item Qty is a required field.Pattern : 100");
        if (event.key == "Enter") {
            $("#txtItemQty").focus();
        }
        iQty = $("#txtItemQty").val();
        iName = $("#txtItemName").val();
        iCode = $("#txtIcode").val();
        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnAddItem").prop('disabled', false);
        }
    } else {
        $("#txtItemUnitPrice").css('border', '2px solid red');
        $("#itemUnitPriceError").text("Unit Price is a required field.Pattern : 100.00 or 100");
        $("#btnAddItem").prop('disabled', true);
    }
});

let regItemQty = /^[0-9]{1,}$/;
let iQty;
$("#txtItemQty").keyup(function (event) {
    iQty = $("#txtItemQty").val();
    if (regItemQty.test(iQty)) {
        $("#txtItemQty").css('border', '2px solid green');
        $("#itemQtyError").text("");
        iUnitPrice = $("#txtItemUnitPrice").val();
        iName = $("#txtItemName").val();
        iCode = $("#txtIcode").val();
        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnAddItem").prop('disabled', false);
        }
    } else {
        $("#txtItemQty").css('border', '2px solid red');
        $("#itemQtyError").text("Item Qty is a required field.Pattern : 100");
        $("#btnAddItem").prop('disabled', true);
    }
});

$("#btnclearitemform").click(function () {
    $("#btnAddItem").prop('disabled', true);
    $("#txtIcode").focus();

    $("#txtIcode").val("");
    $("#txtItemName").val("");
    $("#txtItemUnitPrice").val("");
    $("#txtItemQty").val("");

    $("#txtIcode").css('border', '1px solid #ced4da');
    $("#txtItemName").css('border', '1px solid #ced4da');
    $("#txtItemUnitPrice").css('border', '1px solid #ced4da');
    $("#txtItemQty").css('border', '1px solid #ced4da');
});

