$(".placeOrderHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

$('#txtOrderDate').val(new Date().toISOString().slice(0, 10));

$("#cmbSelectCustomerId").change(function () {
    var id = $("#cmbSelectCustomerId").find('option:selected').text();
    var found = false;
    for (var i = 0 ; i<customerDB.length;i++){
        if (customerDB[i].getId()==id){
            $("#txtpocName").val(customerDB[i].getName());
            $("#txtpocaddress").val(customerDB[i].getAddress());
            $("#txtpocsalary").val(customerDB[i].getSalary());
            found=true;
        }
    }
    if (found==false){
        $("#txtpocName").val("");
        $("#txtpocaddress").val("");
        $("#txtpocsalary").val("");
    }
})