/**
 * Created by langchou on 1/19/17.
 */

//js 是解释性语言 在运行的时候解释，相对于其他编译型语言，在开发完就编译成机器可识别的二进制文件
//js 不是面向对象的语言  他没有面向对象语言的三大特征  封装、继承、多态
//js 是基于对象编程的语言  他内置了一些对象， 有人说这是"面向事件编程"，因为他对象固定了，那么只有处理对象发出的事件。

/**
 * 常用的方法
 */
// alert("提示");
// var input = prompt("请输入")
// console.log("输入的是"+input);


/**
 * 5种基本数据类型
 */
/*
var un;
console.log(typeof un);
un = undefined;
console.log( typeof un);
un = null;
console.log(typeof un);
un = NaN;
console.log(typeof un);
un = 1;
console.log(typeof un);
un = false;
console.log(typeof un);
un = "hehe";
console.log(typeof un);
*/

/**
 * 类型相互转化
 */
//其他类型转化为Boolean
/*
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(""))
console.log(Boolean("hehe"));
console.log(Boolean(-1));
*/
//还有用if的时候 会自动判断

//其他类型转化为数字类型
//一种是 Number()  parseInt()  parseFloat()
/*
console.log("--------使用Number（）类型转化------");
console.log(Number(undefined)); // NAN
console.log(Number(null));      //0
console.log(Number(true));      //1
console.log(Number(false));     //0
console.log(Number(""));        //0
console.log(Number("123"));     //123
console.log(Number("ABC123"));  //NaN
console.log(Number("123ABC"));  //NaN
console.log(Number("0x1"));     //1
console.log(Number("010"));     //10

console.log("--------使用parseInt（）类型转化------");
console.log(parseInt(undefined));   //NaN
console.log(parseInt(null));        //NaN
console.log(parseInt(true));        //NaN
console.log(parseInt(false));       //NaN
console.log(parseInt(""));          //NaN
console.log(parseInt("123"));       //123
console.log(parseInt("ABC123"));    //NaN
console.log(parseInt("123ABC"));    //123
console.log(parseInt("0x1"));       //1
console.log(parseInt("010"));       //10


console.log("--------使用isNaN（）判断------");
console.log(isNaN(undefined));   //true
console.log(isNaN(null));        //false
console.log(isNaN(true));        //false
console.log(isNaN(false));       //false
console.log(isNaN(""));          //false
console.log(isNaN("123"));       //false
console.log(isNaN("ABC123"));    //true
console.log(isNaN("123ABC"));    //true
console.log(isNaN("0x1"));       //false
console.log(isNaN("010"));       //false

console.log("--------使用parseFloat（）判断------");
console.log(parseFloat(undefined));   //NaN
console.log(parseFloat(null));        //NaN
console.log(parseFloat(true));        //NaN
console.log(parseFloat(false));       //NaN
console.log(parseFloat(""));          //NaN
console.log(parseFloat("123.3.3"));       //123.3
console.log(parseFloat("ABC123"));    //NaN
console.log(parseFloat("123ABC"));    //123
console.log(parseFloat("0x1"));       //1
console.log(parseFloat("010"));       //10
*/

/*
总结    Number（）方式转数字    只有undefined  和 不纯是数字的字符串不能转换其他都可以
 parseInt()方式转化数字   只能转化 纯数字字符串 和是以数字开头的字符串
 isNaN（）判断时  相当于 isNaN(Number(***));  也就是Number不能转化成数字的内容 isNaN()都会返回true;
 */

/*
console.log("--------测试转化为字符串--------");
var un;
console.log(String(un));  //un.toString()异常崩溃
console.log("和字符串拼接"+un);
un = undefined;
console.log(String(un));
console.log("和字符串拼接"+un);
un = null;
console.log(String(un));
console.log("和字符串拼接"+un);
un = NaN;
console.log(un.toString());
console.log("和字符串拼接"+un);
un = 1;
console.log(un.toString());
console.log("和字符串拼接"+un);
un = false;
console.log(un.toString());
console.log("和字符串拼接"+un);
un = "hehe";
console.log(un.toString());
console.log("和字符串拼接"+un);
*/
// 很类型都可以使用toString()方法  除 undefined 和null




/*
console.log("--------测试运算符--------");
console.log("1" == 1);
console.log("1" === 1);

console.log("aa" && "bb");
console.log("" && "bb");
console.log("aa" && "");
console.log(0 && "");

console.log("aa" || "bb");
console.log("" || "bb");
console.log("aa" || "");
console.log(0 && "");*/
// == 值相等   === 是值和类型都要等
// &&  和 || 表达式的返回的值
// &&  如果左边的值转化为Boolean后是true，那么返回 &&右边的内容，如果左边的值转化为Boolean类型是false,则就会返回左边的值
// || 如果左边的值转化为Boolean后是true，那么返回左边的值，如果左边的值转化为Boolean是false,那么返回的就是右边的值
//所以 利用 || 来做函数的输入参数的合法性判断



/*
console.log("--------测试函数--------");
console.log("结果：" +add(3,4));

function add(a,b){
    return a+b;
}

console.log("结果:"+add(1));
console.log("结果:"+add(1,3,4));
console.log(typeof add);

function fun() {
    console.log("fun");
}

console.log("结果:"+fun(1,3,4));

function add2(a,b){
    a = a || 0;
    b = b || 0;
    return a+b;
}
console.log("结果:"+add2(1));

*/

/*
1、js的函数 参数没有固定的类型，因为他是弱类型语言，所以只有形参的名，没有形参的类型
2、函数没有重载功能，后面的同名函数会覆盖前面的。
3、函数调用的时候传入变量的个数，可以比形参的个数少也可以多。
4、如果少传的时候 未传入的形参会被赋值为undefined类型，如果多传的时候，多的参数无视
5、函数默认都是有返回值的 如果函数中没有return任何值，那么默认是undefined
6、函数变量的类型是 function
7、实际使用过程中常用   a || 0  来防止传入的值是 一些非法参数
*/


/*
console.log("------------测试数组----------");
数组 是有序、无固定类型的、长度可变的集合。 这和其他编译型语言有很大的不同
长度是可变的，当设置length = 0就是清空集合

var temp = new Array();
console.log(typeof temp[0]);

temp[0] = undefined;
temp[1] = null;
temp[2] = true;
temp[3] = "";
temp[4] =  "hello";
temp[5] = 1;

temp[7] = NaN;//可以开个赋值   并且未被赋值对的就是undefined

for(var i =0; i <temp.length;i++ ){
    console.log(temp[i])
}

console.log(temp.toString());
console.log(temp.length = 1);
console.log(temp.toString());
console.log(temp[1]);
*/
/*
var person  = new Object();
person.name = "xiaohong";
person.age = 28;
person.direction = "苏州";
person.work = function(){
    console.log("做工作！！")
}

console.log(person.name);
console.log(person.age);
console.log(person.direction);
console.log(person.work());
*/

/*
var student = {
    name : "小华",
    age : 30,
    "dirction" :"苏州",
    doHomeWork: function(){
        console.log("做家庭作业");
    }
}
console.log(student);
//这种  以对象字面量的形式 创建对象  和json的格式很像，只是json的格式的key是必须用引号引起来的，
// 而这里的对象是的key是没有强制要求用引号引起来。


//自定义构造方法
function Teacher(name,age,teach){
    this.name = name;
    this.age = age;
    this.teach = teach;
}
var teacher = new Teacher("张老师",40,function(){
    console.log("教语文")
});

teacher.teach();

//对象的遍历
for(var key  in teacher){
    console.log(teacher[key]);
}
*/



