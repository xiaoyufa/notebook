
// 猜数字游戏
function startGuessNumber() {
    //获取一个随机数
    var n = parseInt(Math.random() * 101);
    // alert(n);
    var min = 1;
    var max = 100;
    while (true) {
        var num = Number(prompt('请输入' + min + '到' + max + '的数字'));
        if (num > max || num < min) {
            alert('请输入正确的数字范围');
            continue;
        }
        if (num > n) {
            alert('猜大了');
            max = num;
        } else if (num < n) {
            alert('猜小了')
            min = num;
        } else {
            alert('恭喜你,猜对了!!');
            break;
        }
    }
}
// 判断手机号码是否合法  11位数且都是数字
function checkPhoneNumber() {
    //获取一个随机数

    while (true) {
        var n = prompt('请输入你的电话号码');
        if (n.length == 11 && !isNaN(n)) {
            break;
        } else {
            alert('输入电话号码不合法请重新输入');
        }
    }
}
//计算一下三角形的面积
function caculateArea() {
    var m = Number(prompt('请输入三角形的高!'))
    var n = Number(prompt('请输入三角形的底!'))
    alert('三角形的面积是' + m * n / 2);
}

//数组实现深克隆 var arr = [1,2,[2,3],[1,2,[4,5]]]
function deepclone(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result.push(deepclone(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    conso.log(result == arr, 'result==arr', result, arr);
    return result;
}

//递归实现 从1加到n的数据
function summer(n){
    if(n==1) return 1;
    return n+summer(n-1);
}

//检验do while 循环
function checkDoWhile(){
    var sum=0;
    var i=0;
    do{
       i++;
       console.log('第'+i+'行');
    //    document.write('第'+i+'行<br>')
    }while(false)
}

