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