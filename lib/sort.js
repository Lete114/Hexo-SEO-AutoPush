//日期排序
module.exports = { sortDownDate, sortUpDate }

// 降序
function sortUpDate(arr) {
    return arr.sort((a, b) => {
        return Date.parse(a) - Date.parse(b);
    })
}

// 升序
function sortDownDate(arr,value) {
    return arr.sort((a, b) => {
        return Date.parse(b[value]) - Date.parse(a[value]);
    })
}