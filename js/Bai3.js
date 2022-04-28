/**
 * Khối 1: input
 *   tienUsd, tienVnd, doiTien
 * Khối 2: 
 *  b1: tìm tới thẻ băng id
 *  b2: tạo hàm
 *     +lấy giá trị từ form
 *     +lập công thức tính: doiTien = tienUsd * tienVnd
 *  b3: gắn sự kiện click cho nút button
 *  b4: hiển thị kết quả
 * Khối 3:
 * doiTien
 */
var tienVnd = 235000;
var tienUsd = document.getElementById("dola");

function tinhUSD() {
    var vnd = 23500; 
    var usd = tienUsd.value;   
    var doiTien = vnd * usd ;

    document.getElementById("soUSD").innerHTML = "Số USD đổi được: " + doiTien ;
}
document.getElementById("tinhUSD").onclick = tinhUSD;