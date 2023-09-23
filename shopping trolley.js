//1、使用num储存购买量，其类型为undefined，当有购买量时，对num变量进行输入
var num;
console.log(typeof num)
//2、使用常量'total_num'用来储存每天日常的店内的存货数量，假定为10000
const total_num = 10000;
console.log(typeof total_num)
//3、分别使用字符串'product_ID'、'product_name'、'product_type'储存'商品ID'、'商品名'、'商品型号'
let product_ID = '10086';
let product_name = 'laptop';
let product_type = '01';
console.log(typeof product_ID)
//4、使用变量'price'、'discount'储存'价格'、'折扣'。方便修改
let price, discount;
price = 500;
discount = 0.4;
console.log(typeof price)
//5、使用have_stock储存是否还有存货，其类型为布尔值
num =30
have_stock = num <= total_num;
console.log(typeof have_stock);
//6、有订单时使用'order'储存订单号，产生订单号后将其输入'order_lis'数组中，'order_lis'的类型为object
const order_lis=[]
order = product_ID  + product_name  + product_type + ' ' + String(order_lis.length)
order_lis.push(order)
console.log(typeof order_lis)