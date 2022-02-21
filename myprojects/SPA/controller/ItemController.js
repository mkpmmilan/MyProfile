$(".itemHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

/*Item Form Text Field Validations*/

let regItemCode = /^(I00-)[0-9]{4}$/;
let regItemName = /^[A-z 0-9.]{3,}$/;
let regItemUnitPrice = /^[0-9]{1,}([.][0-9]{2})?$/;
let regItemQty = /^[0-9]{1,}$/;

let searchItemCode;

// Add Item Form Validations
$('#txtIcode,#txtItemName,#txtItemUnitPrice,#txtItemQty').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtIcode,#txtItemName,#txtItemUnitPrice,#txtItemQty').on('blur', function () {
    addItemFormValidation();
});

$("#txtIcode").on('keyup', function (event) {
    setAddItemButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddItemFormValid();
    }
});

$("#txtItemName").on('keyup', function (event) {
    setAddItemButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddItemFormValid();
    }
});

$("#txtItemUnitPrice").on('keyup', function (event) {
    setAddItemButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddItemFormValid();
    }
});

$("#txtItemQty").on('keyup', function (event) {
    setAddItemButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddItemFormValid();
    }
});

function addItemFormValidation() {
    var itemCode = $("#txtIcode").val();
    $("#txtIcode").css('border', '2px solid green');
    $("#itemCodeError").text("");
    if (regItemCode.test(itemCode)) {
        var itemName = $("#txtItemName").val();
        if (regItemName.test(itemName)) {
            $("#txtItemName").css('border', '2px solid green');
            $("#itemNameError").text("");
            var itemUnitPrice = $("#txtItemUnitPrice").val();
            if (regItemUnitPrice.test(itemUnitPrice)) {
                var itemQty = $("#txtItemQty").val();
                var response = regItemQty.test(itemQty);
                $("#txtItemUnitPrice").css('border', '2px solid green');
                $("#itemUnitPriceError").text("");
                if (response) {
                    $("#txtItemQty").css('border', '2px solid green');
                    $("#itemQtyError").text("");
                    return true;
                } else {
                    $("#txtItemQty").css('border', '2px solid red');
                    $("#itemQtyError").text("Item Qty is a required field.Pattern : 100");
                    return false;
                }
            } else {
                $("#txtItemUnitPrice").css('border', '2px solid red');
                $("#itemUnitPriceError").text("Unit Price is a required field.Pattern : 100.00 or 100");
                return false;
            }
        } else {
            $("#txtItemName").css('border', '2px solid red');
            $("#itemNameError").text("Item name is a required field.");
            return false;
        }
    } else {
        $("#txtIcode").css('border', '2px solid red');
        $("#itemCodeError").text("Item Code is a required field.Pattern : I00-0001");
        return false;
    }
}

function setAddItemButtonDisableOrNot(){
    let check = addItemFormValidation();
    if (check) {
        $("#btnAddItem").attr('disabled', false);
    } else {
        $("#btnAddItem").attr('disabled', true);
    }
}

function checkIfAddItemFormValid() {
    var itemCode = $("#txtIcode").val();
    if (regItemCode.test(itemCode)) {
        $("#txtItemName").focus();
        var itemName = $("#txtItemName").val();
        if (regItemName.test(itemName)) {
            $("#txtItemUnitPrice").focus();
            var itemUnitPrice = $("#txtItemUnitPrice").val();
            if (regItemUnitPrice.test(itemUnitPrice)) {
                $("#txtItemQty").focus();
                var itemQty = $("#txtItemQty").val();
                var response = regItemQty.test(itemQty);
                if (response) {
                    let res = confirm("Do you want to add this Item..?");
                    if (res) {
                        addItem();
                        clearItemFields();
                    }
                } else {
                    $("#txtItemQty").focus();
                }
            } else {
                $("#txtItemUnitPrice").focus();
            }
        } else {
            $("#txtItemName").focus();
        }
    } else {
        $("#txtIcode").focus();
    }
}

// Update Item Form Validations

$('#txtSearchItemCode,#txtIName,#txtIUnitPrice,#txtIQty').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

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
                $("#txtIName").focus();
            }
            if (foundOrNot == false) {
                alert("Item Not Found");
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

$("#txtIName").keyup(function (event) {
    var iName = $("#txtIName").val();
    if (regItemName.test(iName)) {
        $("#txtIName").css('border', '2px solid green');
        $("#inameError").text("");
        if (event.key == "Enter") {
            $("#txtIUnitPrice").focus();
        }
        var iCode = $("#txtSearchItemCode").val();
        var iUnitPrice = $("#txtIUnitPrice").val();
        var iQty = $("#txtIQty").val();

        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnUpdateItem").prop('disabled', false);
        }

    } else {
        $("#btnUpdateItem").prop('disabled', true);
        $("#txtIName").css('border', '2px solid red');
        $("#inameError").text("Item name is a required field.");
    }
});

$("#txtIUnitPrice").keyup(function (event) {
    var iUnitPrice = $("#txtIUnitPrice").val();
    if (regItemUnitPrice.test(iUnitPrice)) {
        $("#txtIUnitPrice").css('border', '2px solid green');
        $("#iunitpriceError").text("");
        if (event.key == "Enter") {
            $("#txtIQty").focus();
        }
        var iCode = $("#txtSearchItemCode").val();
        var iName = $("#txtIName").val();
        var iQty = $("#txtIQty").val();

        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnUpdateItem").prop('disabled', false);
        }

    } else {
        $("#btnUpdateItem").prop('disabled', true);
        $("#txtIUnitPrice").css('border', '2px solid red');
        $("#iunitpriceError").text("Unit price is a required field. Pattern : 100.00 or 100");
    }
});

$("#txtIQty").keyup(function (event) {
    var iQty = $("#txtIQty").val();
    if (regItemQty.test(iQty)) {
        $("#txtIQty").css('border', '2px solid green');
        $("#iqtyError").text("");
        var iCode = $("#txtSearchItemCode").val();
        var iName = $("#txtIName").val();
        var iUnitPrice = $("#txtIUnitPrice").val();

        if (regItemCode.test(iCode) && regItemName.test(iName) && regItemUnitPrice.test(iUnitPrice) && regItemQty.test(iQty)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

        if (event.key == "Enter") {
            let res = confirm("Do you want to update this item?");
            if (res) {
                updateItem();
            }
        }

    } else {
        $("#btnUpdateItem").prop('disabled', true);
        $("#txtCsalary").css('border', '2px solid red');
        $("#cSalaryError").text("item qty is a required field.Pattern : 100");
    }
});

// Delete Item Form Validations

$("#txtSearchIcode").keyup(function (event) {
    searchItemCode = $("#txtSearchIcode").val();
    if (regItemCode.test(searchItemCode)) {
        $("#txtSearchIcode").css('border', '2px solid green');
        $("#searchICodeError").text("");
        if (event.key == "Enter") {
            var foundOrNot = false;
            let foundItem = searchItem(searchItemCode);
            if (foundItem) {
                $("#txtdisabledName").val(foundItem.iname);
                $("#txtdisabledUnitPrice").val(foundItem.iunitprice);
                $("#txtdisabledQty").val(foundItem.iqty);
                $("#btnDeleteItem").prop('disabled', false);
                foundOrNot = true;
                $("#btnDeleteItem").focus();
            }
            if (foundOrNot == false) {
                alert("Item Not Found");
                $("#txtdisabledName").val("");
                $("#txtdisabledUnitPrice").val("");
                $("#txtdisabledQty").val("");
                $("#btnDeleteItem").prop('disabled', true);
            }
        }
    } else {
        $("#txtSearchIcode").css('border', '2px solid red');
        $("#searchICodeError").text("Item Code is a required field.Pattern : I00-001");
        $("#btnDeleteItem").prop('disabled', true);
    }
});

/*End Of Item Form Validations*/

/*CRUD Operations Of Item Form*/
// Add Item

function addItem() {
    let itemCode = $("#txtIcode").val();
    let itemName = $("#txtItemName").val();
    let itemUnitPrice = $("#txtItemUnitPrice").val();
    let itemQty = $("#txtItemQty").val();

    let tableRow = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemUnitPrice}</td><td>${itemQty}</td></tr>`;

    $("#itemTable").append(tableRow);

}

// Search Item

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

// Update Item

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

// Delete Item

function deleteItem(){
    let searchIcode = $("#txtSearchIcode").val();
    $("#itemTable>tr").each(function (){
        let code = $(this).children(":eq(0)").text();
        if(code === searchIcode){
            $(this).remove();
            clearDeleteItemFields();
            $("#btnDeleteItem").prop('disabled',true);
        }
    });
}

/*End Of CRUD Operations Of Item Form*/

/*Controller Functions*/
// Add Item Form

$("#addItem").on('shown.bs.modal', function () {
    $(this).find("#txtIcode").focus();
});

$("#btnAddItem").prop('disabled', true);

$("#btnAddItem").click(function () {
    let res = confirm("Do you want to add this item?");
    if (res) {
        addItem();
        clearItemFields();
    }
});

$("#btnclearitemform").click(function () {
    clearItemFields();
});

function clearItemFields() {
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

    $("#btnAddItem").prop('disabled', true);
}

// Update Item Form

$("#updateItem").on('shown.bs.modal', function () {
    $(this).find("#txtSearchItemCode").focus();
})

$("#btnUpdateItem").prop('disabled', true);

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

// Delete Item Form

$("#btnDeleteItem").prop('disabled',true);

$("#deleteItem").on('shown.bs.modal',function (){
    $(this).find("#txtSearchIcode").focus();
});

$("#btnDeleteItem").click(function (){
    let res = confirm("Do you want to delete this item?");
    if(res){
        deleteItem();
    }
});

$("#btnClearDeleteItemFormFields").click(function (){
    $("#btnDeleteItem").prop('disabled',true);
    clearDeleteItemFields();
});

function clearDeleteItemFields(){
    $("#txtSearchIcode").focus();

    $("#txtSearchIcode").val("");
    $("#txtdisabledName").val("");
    $("#txtdisabledUnitPrice").val("");
    $("#txtdisabledQty").val("");

    $("#searchICodeError").text("");
}