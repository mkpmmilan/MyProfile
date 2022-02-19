
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

/*Customer Update*/

$("#btnUpdateCust").prop('disabled', true);

$("#updateCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtSearchCustomerId").focus();
});






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
        $("#btnUpdateCust").prop('disabled', true);
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

        if (event.key == "Enter") {
            let res = confirm("Do you want to update this customer?");
            if (res) {
                updateCustomer();
            }
        }

    } else {
        $("#txtCsalary").css('border', '2px solid red');
        $("#cSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
    }
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


/*Item Form JS*/
/*add item*/

$("#addItem").on('shown.bs.modal', function () {
    $(this).find("#txtIcode").focus();
});

$("#btnAddItem").prop('disabled', true);

let regItemCode = /^(I00-)[0-9]{3,4}$/;
let regItemName = /^[A-z 0-9.]{3,}$/;
let regItemUnitPrice = /^[0-9]{1,}([.][0-9]{2})?$/;
let regItemQty = /^[0-9]{1,}$/;

let iCode;
let iName;
let iUnitPrice;
let iQty;

$("#btnAddItem").click(function () {
    let res = confirm("Do you want to add this item?");
    if (res) {
        addItems();
    }
});

function addItems() {
    let itemCode = $("#txtIcode").val();
    let itemName = $("#txtItemName").val();
    let itemUnitPrice = $("#txtItemUnitPrice").val();
    let itemQty = $("#txtItemQty").val();

    let tableRow = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemUnitPrice}</td><td>${itemQty}</td></tr>`;

    $("#itemTable").append(tableRow);

    $("#btnAddItem").prop('disabled', true);

    clearAddItemFields();
}

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

        if (event.key == "Enter") {
            let res = confirm("Do you want to add this item?");
            if (res) {
                addItems();
            }
        }

    } else {
        $("#txtItemQty").css('border', '2px solid red');
        $("#itemQtyError").text("Item Qty is a required field.Pattern : 100");
        $("#btnAddItem").prop('disabled', true);
    }
});

$("#btnclearitemform").click(function () {
    $("#btnAddItem").prop('disabled', true);
    clearAddItemFields();
});

function clearAddItemFields() {
    $("#txtIcode").focus();

    $("#txtIcode").val("");
    $("#txtItemName").val("");
    $("#txtItemUnitPrice").val("");
    $("#txtItemQty").val("");

    $("#itemCodeError").text("");
    $("#itemNameError").text("");
    $("#itemUnitPriceError").text("");
    $("#itemQtyError").text("");

    $("#txtIcode").css('border', '1px solid #ced4da');
    $("#txtItemName").css('border', '1px solid #ced4da');
    $("#txtItemUnitPrice").css('border', '1px solid #ced4da');
    $("#txtItemQty").css('border', '1px solid #ced4da');
}

/*Update Item*/

$("#updateItem").on('shown.bs.modal', function () {
    $(this).find("#txtSearchItemCode").focus();
})

$("#btnUpdateItem").prop('disabled', true);

let searchItemCode;
$("#txtSearchItemCode").keyup(function (event) {
    searchItemCode = $("#txtSearchItemCode").val();
    if (regItemCode.test(searchItemCode)) {
        $("#txtSearchItemCode").css('border', '2px solid green');
        $("#searchItemCodeError").text("");
        if (event.key == "Enter") {
            var foundOrNot = false;

            let foundItem = searchItem(searchItemCode);
            if (foundItem) {
                $("#txtIName").val(foundItem.iname);
                $("#txtIUnitPrice").val(foundItem.iunitprice);
                $("#txtIQty").val(foundItem.iqty);
                $("#btnUpdateItem").prop('disabled', false);
                foundOrNot = true;
                $("#txtIName").css('border', '2px solid green');
                $("#txtIUnitPrice").css('border', '2px solid green');
                $("#txtIQty").css('border', '2px solid green');
            }
            if (foundOrNot == false) {
                $("#txtIName").val("");
                $("#txtIUnitPrice").val("");
                $("#txtIQty").val("");
                $("#btnUpdateItem").prop('disabled', true);
            }
        }
    } else {
        $("#txtSearchItemCode").css('border', '2px solid red');
        $("#searchItemCodeError").text("Item code is a required field.Pattern : I00-001");
        $("#btnUpdateItem").prop('disabled', true);
    }
});

function searchItem(itemCode) {
    let item;
    $("#itemTable>tr").each(function () {
        let tItemCode = $(this).children(":eq(0)").text();
        if (tItemCode === itemCode) {
            let tItemName = $(this).children(":eq(1)").text();
            let tItemUnitPrice = $(this).children(":eq(2)").text();
            let tItemQty = $(this).children(":eq(3)").text();

            item = {
                code: itemCode,
                iname: tItemName,
                iunitprice: tItemUnitPrice,
                iqty: tItemQty
            }
        }
    });
    return item;
}

$("#txtIName").keyup(function (event) {
    iName = $("#txtIName").val();
    if (regItemName.test(iName)) {
        $("#txtIName").css('border', '2px solid green');
        $("#inameError").text("");
        if (event.key == "Enter") {
            $("#txtIUnitPrice").focus();
        }
        iCode = $("#txtSearchItemCode").val();
        iUnitPrice = $("#txtIUnitPrice").val();
        iQty = $("#txtIQty").val();

        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnUpdateItem").prop('disabled', false);
        }

    } else {
        $("#txtIName").css('border', '2px solid red');
        $("#inameError").text("Item name is a required field.");
    }
});

$("#txtIUnitPrice").keyup(function (event) {
    iUnitPrice = $("#txtIUnitPrice").val();
    if (regItemUnitPrice.test(iUnitPrice)) {
        $("#txtIUnitPrice").css('border', '2px solid green');
        $("#iunitpriceError").text("");
        if (event.key == "Enter") {
            $("#txtIQty").focus();
        }
        iCode = $("#txtSearchItemCode").val();
        iName = $("#txtIName").val();
        iQty = $("#txtIQty").val();

        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnUpdateItem").prop('disabled', false);
        }

    } else {
        $("#txtIUnitPrice").css('border', '2px solid red');
        $("#iunitpriceError").text("Unit price is a required field. Pattern : 100.00 or 100");
    }
});

$("#txtIQty").keyup(function (event) {
    iQty = $("#txtIQty").val();
    if (regItemQty.test(iQty)) {
        $("#txtIQty").css('border', '2px solid green');
        $("#iqtyError").text("");
        iCode = $("#txtSearchItemCode").val();
        iName = $("#txtIName").val();
        iUnitPrice = $("#txtIUnitPrice").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

        if (event.key == "Enter") {
            let res = confirm("Do you want to update this item?");
            if (res) {
                updateItem();
            }
        }

    } else {
        $("#txtCsalary").css('border', '2px solid red');
        $("#cSalaryError").text("item qty is a required field.Pattern : 100");
    }
});

$("#btnUpdateItem").click(function () {
    let res = confirm("Do you want to update this item?");
    if (res) {
        updateItem();
    }
});

$("#btnClearUpdateItem").click(function () {
    $("#btnUpdateItem").prop('disabled',true);
    clearUpdateItemFields();
});

function updateItem() {
    let updateItemCode = $("#txtSearchItemCode").val();
    let updateItemName = $("#txtIName").val();
    let updateItemUnitprice = $("#txtIUnitPrice").val();
    let updateItemQty = $("#txtIQty").val();

    $("#itemTable>tr").each(function () {
        let code = $(this).children(":eq(0)").text();
        if (code === updateItemCode) {
            $(this).children(":eq(0)").text(updateItemCode);
            $(this).children(":eq(1)").text(updateItemName);
            $(this).children(":eq(2)").text(updateItemUnitprice);
            $(this).children(":eq(3)").text(updateItemQty);

            clearUpdateItemFields();
            $("#btnUpdateItem").prop('disabled', true);
        }
    });
}

function clearUpdateItemFields() {
    $("#txtSearchItemCode").focus();

    $("#txtSearchItemCode").val("");
    $("#txtIName").val("");
    $("#txtIUnitPrice").val("");
    $("#txtIQty").val("");

    $("#searchItemCodeError").text("");
    $("#inameError").text("");
    $("#iunitpriceError").text("");
    $("#iqtyError").text("");

    $("#txtSearchItemCode").css('border', '1px solid #ced4da');
    $("#txtIName").css('border', '1px solid #ced4da');
    $("#txtIUnitPrice").css('border', '1px solid #ced4da');
    $("#txtIQty").css('border', '1px solid #ced4da');
}

