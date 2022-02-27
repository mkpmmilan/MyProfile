$(".placeOrderHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

$('#txtOrderDate').val(new Date().toISOString().slice(0, 10));

