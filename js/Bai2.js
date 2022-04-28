/**
 * Khối 1: input
 *  var num1 ,num2, num3, num4, num5
 * Khối 2:b1: tìm tới thẻ băng id
 *        b2: tạo hàm
 *          lấy giá trị từ form
 *          lặp công thức tính : trungBinh = (num1 + num2 + num3 + num4 + num5) / 5  
 *        b3: gắn sự kiện click cho button
 *        b4: hiển thị kết quả lên UL
 * Khối 3:
 *  trungBinh
 */

var num1 = document.getElementById("so1");
var num2 = document.getElementById("so2");
var num3 = document.getElementById("so3");
var num4 = document.getElementById("so4");
var num5 = document.getElementById("so5");
function soTrungBinh() {
    var so1 = num1.value ;
    var so2 = num2.value ;
    var so3 = num3.value ;
    var so4 = num4.value ;
    var so5 = num5.value ;
    var soTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    document.getElementById("soTB").innerHTML = "Số trung bình của 5 số trên là:" +soTrungBinh ;
}
document.getElementById("tinhTB").onclick = soTrungBinh;