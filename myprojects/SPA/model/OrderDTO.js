function OrderDTO(orderId, orderDate, customerId, total, orderDetailsDB) {
    var __orderId = orderId;
    var __orderDate = orderDate;
    var __customerId = customerId;
    var __total = total;
    var __orderDetails = orderDetailsDB;

    this.getOrderId = function () {
        return __orderId;
    }
    this.setOrderId = function (orderId) {
        __orderId = orderId;
    }
    this.getOrderDate = function () {
        return __orderDate;
    }
    this.setOrderDate = function (orderDate) {
        __orderDate = orderDate;
    }
    this.getCustomerId = function () {
        return __customerId;
    }
    this.setCustomerId = function (customerId) {
        __customerId = customerId;
    }
    this.getTotal = function () {
        return __total;
    }
    this.setTotal = function (total) {
        __total = total;
    }
    this.getOrderDetails = function () {
        return __orderDetails;
    }
    this.setOrderDetails = function (orderDetailsDB) {
        __orderDetails = orderDetailsDB;
    }
}