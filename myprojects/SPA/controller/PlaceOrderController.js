$(".placeOrderHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

$('#txtOrderDate').val(new Date().toISOString().slice(0, 10));
$("#btnAddToCart").prop('disabled', true);
let regBuyItemQty = /^[0-9]{1,}$/;

$("#cmbSelectCustomerId").change(function () {
    var id = $("#cmbSelectCustomerId").find('option:selected').text();
    var found = false;
    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getId() == id) {
            $("#txtpocName").val(customerDB[i].getName());
            $("#txtpocaddress").val(customerDB[i].getAddress());
            $("#txtpocsalary").val(customerDB[i].getSalary());
            var code = $("#cmbitemcode").find('option:selected').text();
            if (code != "-Select Item-" && $("#txtbuyQty").val() != '') {
                $("#btnAddToCart").prop('disabled', false);
            }
            found = true;
        }
    }
    if (found == false) {
        $("#txtpocName").val("");
        $("#txtpocaddress").val("");
        $("#txtpocsalary").val("");
        $("#btnAddToCart").prop('disabled', true);
    }
});

$("#cmbitemcode").change(function () {
    var code = $("#cmbitemcode").find('option:selected').text();
    var found = false;
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode() == code) {
            $("#txtpoiName").val(itemDB[i].getName());
            $("#txtitemPrice").val(itemDB[i].getUnitPrice());
            $("#txtqtyOnHand").val(itemDB[i].getQty());
            var id = $("#cmbSelectCustomerId").find('option:selected').text();
            if (id != "-Select Customer-" && $("#txtbuyQty").val() != '') {
                $("#btnAddToCart").prop('disabled', false);
            }
            found = true;
        }
    }
    if (found == false) {
        $("#txtpoiName").val("");
        $("#txtitemPrice").val("");
        $("#txtqtyOnHand").val("");
        $("#btnAddToCart").prop('disabled', true);
    }
});

$("#txtbuyQty").on('keyup', function () {
    addValidation();
});

// Add Validation to buy qty field and check if comboboxes are empty or not.
function addValidation() {
    var buyQty = $("#txtbuyQty").val();
    if (regBuyItemQty.test(buyQty)) {
        $("#txtbuyQty").css('border', '2px solid green');
        var code = $("#cmbitemcode").find('option:selected').text();
        var id = $("#cmbSelectCustomerId").find('option:selected').text();
        if (id != "-Select Customer-" && code != "-Select Item-") {
            $("#btnAddToCart").prop('disabled', false);
        }
    } else {
        $("#txtbuyQty").css('border', '2px solid red');
        $("#btnAddToCart").prop('disabled', true);
    }
}

// Add items to cart
$("#btnAddToCart").click(function () {
    var qtyOnHand = parseInt($("#txtqtyOnHand").val());
    var buyQty = parseInt($("#txtbuyQty").val());
    if (buyQty <= qtyOnHand) {
        addItemsToCart();
        loadCartItemsToTable();
        clearSelectItemFields();
    } else {
        alert("Buy qty is incorrect.Please enter low quantity.");
    }
});

function addItemsToCart() {
    var itemCode = $("#cmbitemcode").find('option:selected').text();
    var itemName = $("#txtpoiName").val();
    var itemPrice = $("#txtitemPrice").val();
    var qtyOnHand = parseInt($("#txtqtyOnHand").val());
    var qty = $("#txtbuyQty").val();
    var buyQty = parseInt(qty);
    var unitPrice = parseFloat(itemPrice);
    var total = buyQty * unitPrice;

    var cart = new CartTM(itemCode, itemName, itemPrice, qty, total);

    var found = false;

    for (var i = 0; i < cartTMDB.length; i++) {
        if (cartTMDB[i].getICode() == itemCode) {
            cartTMDB.splice(i, 1);
            cartTMDB.push(cart);
            found = true;
        }
    }

    if (found == false) {
        cartTMDB.push(cart);
    }
}

// load cart items to table
function loadCartItemsToTable() {
    $("#cartTable").empty();
    for (var i = 0; i < cartTMDB.length; i++) {
        let tableRow = `<tr><td>${cartTMDB[i].getICode()}</td><td>${cartTMDB[i].getIName()}</td><td>${cartTMDB[i].getItemPrice()}</td><td>${cartTMDB[i].getBuyQty()}</td><td>${cartTMDB[i].getItemTotal()}</td></tr>`;
        $("#cartTable").append(tableRow);
    }
}

function clearSelectItemFields() {
    $("#cmbitemcode").val("");
    $("#txtpoiName").val("");
    $("#txtitemPrice").val("");
    $("#txtqtyOnHand").val("");
    $("#txtbuyQty").val("");
    $("#txtbuyQty").css('border', '1px solid #ced4da');
    $("#btnAddToCart").prop('disabled', true);
}