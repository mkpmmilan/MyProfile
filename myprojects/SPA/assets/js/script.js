document.getElementsByClassName("naviItem-1")[0].addEventListener("click",function () {
   document.getElementById("carouselExampleIndicators").style.display="block";
   document.getElementById("customerPage").style.display="none";
   document.getElementById("itemPage").style.display="none";
   document.getElementById("placeOrderPage").style.display="none";
});

document.getElementsByClassName("naviItem-2")[0].addEventListener("click",function () {
   document.getElementById("carouselExampleIndicators").style.display="none";
   document.getElementById("customerPage").style.display="block";
   document.getElementById("itemPage").style.display="none";
   document.getElementById("placeOrderPage").style.display="none";
});

document.getElementsByClassName("naviItem-3")[0].addEventListener("click",function () {
   document.getElementById("carouselExampleIndicators").style.display="none";
   document.getElementById("customerPage").style.display="none";
   document.getElementById("itemPage").style.display="block";
   document.getElementById("placeOrderPage").style.display="none";
});

document.getElementsByClassName("naviItem-4")[0].addEventListener("click",function () {
   document.getElementById("carouselExampleIndicators").style.display="none";
   document.getElementById("customerPage").style.display="none";
   document.getElementById("itemPage").style.display="none";
   document.getElementById("placeOrderPage").style.display="block";
});

document.getElementsByClassName("customerHomeNavi")[0].addEventListener("click",function () {
   document.getElementById("carouselExampleIndicators").style.display="block";
   document.getElementById("customerPage").style.display="none";
});

document.getElementsByClassName("itemHomeNavi")[0].addEventListener("click",function () {
   document.getElementById("carouselExampleIndicators").style.display="block";
   document.getElementById("itemPage").style.display="none";
});
document.getElementsByClassName("placeOrderHomeNavi")[0].addEventListener("click",function () {
   document.getElementById("carouselExampleIndicators").style.display="block";
   document.getElementById("placeOrderPage").style.display="none";
});