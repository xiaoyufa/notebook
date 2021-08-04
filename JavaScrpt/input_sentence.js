var num = Number(prompt('请输入数字'));
console.log(num);
if (isNaN(num)) {
    alert('输入了非数字')
} else {
    if (num > 10) {
        alert('数字大于10')
    } else {
        alert('数字小于10')
    }
}

