
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



