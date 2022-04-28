/**
 * Khối 1: donVi, hangChuc, so2Chu
 * 
 * Khối 2: 
 * B1: tìm tới thẻ bằng id
 * B2: tạo hàm 
 *   +lấy giá trị từ form
 *   +lặp công thức tính toán
 *      hangChuc = Math.floor(so2Chu /10);
 *      donVi = so2Chu % 10;
 *      tong2KySo = hangChuc + donVi;
 * B3: Gắn sự kiện click cho button
 * B4: Hiển thị kết quả lên UI
 * 
 * Khối 3: tong2KySo
 */

var so2Chu = document.getElementById("so2Chu");
function tinhTong() {
    var so2ChuSo = so2Chu.value;
    var hangChuc = Math.floor(so2ChuSo/10);
    var donVi = so2ChuSo % 10;
    var tong2KySo = hangChuc + donVi;

    document.getElementById("tong2KySo").innerHTML ="Tổng của 2 ký số là :" + tong2KySo;
}