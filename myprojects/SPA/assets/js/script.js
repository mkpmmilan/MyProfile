
$(".naviItem-1").click(function () {
   $("#carouselExampleIndicators").css('display','block');
   $("#customerPage").css('display','none');
   $("#itemPage").css('display','none');
   $("#placeOrderPage").css('display','none');
});

$(".naviItem-2").click(function () {
   $("#carouselExampleIndicators").css('display','none');
   $("#customerPage").css('display','block');
   $("#itemPage").css('display','none');
   $("#placeOrderPage").css('display','none');
});

$(".naviItem-3").click(function () {
   $("#carouselExampleIndicators").css('display','none');
   $("#customerPage").css('display','none');
   $("#itemPage").css('display','block');
   $("#placeOrderPage").css('display','none');
});

$(".naviItem-4").click(function () {
   $("#carouselExampleIndicators").css('display','none');
   $("#customerPage").css('display','none');
   $("#itemPage").css('display','none');
   $("#placeOrderPage").css('display','block');
});

$(".customerHomeNavi").click(function () {
   $("#carouselExampleIndicators").css('display','block');
   $("#customerPage").css('display','none');
});

$(".itemHomeNavi").click(function () {
   $("#carouselExampleIndicators").css('display','block');
   $("#customerPage").css('display','none');
});

$(".placeOrderHomeNavi").click(function () {
   $("#carouselExampleIndicators").css('display','block');
   $("#customerPage").css('display','none');
});

$("#registerCustomer").on('shown.bs.modal',function () {
   $(this).find("#txtCustomerId").focus();
});

/*Customer Form JS*/

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

});

$("#txtCustomerId").keydown(function (event) {
   if(event.key == "Enter"){
      $("#txtCustomerName").focus();
   }
});

$("#txtCustomerName").keydown(function (event) {
   if(event.key == "Enter"){
      $("#txtCustomerAddress").focus();
   }
});

$("#txtCustomerAddress").keydown(function (event) {
   if(event.key == "Enter"){
      $("#txtCustomerSalary").focus();
   }
});
$("#txtCustomerSalary").keydown(function (event) {
   if(event.key == "Enter"){
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

      $("#txtCustomerId").focus();
   }
});

/*Item Form JS*/

$("#addItem").on('shown.bs.modal',function () {
   $(this).find("#txtIcode").focus();
});

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

});

$("#txtIcode").keydown(function (event) {
   if(event.key == "Enter"){
      $("#txtItemName").focus();
   }
});
$("#txtItemName").keydown(function (event) {
   if(event.key == "Enter"){
      $("#txtItemUnitPrice").focus();
   }
});
$("#txtItemUnitPrice").keydown(function (event) {
   if(event.key == "Enter"){
      $("#txtItemQty").focus();
   }
});
$("#txtItemQty").keydown(function (event) {
   if(event.key == "Enter"){
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

