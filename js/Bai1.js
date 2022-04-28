/**
 * Khối 1:
 *  luong1Ngay
 *  soNgayLam
 * 
 * Khối 2:
 *  b1: tìm tới thẻ băng id
 *  b2: tạo hàm
 *      lấy giá trị từ form
 *      lặp công thức tính : tongLuong = luong1Ngay * soNgayLam
 *  
 *  b3: gắn sự kiện click cho button
 *  b4: hiển thị kết quả lên UL
 * 
 * Khối 3: 
 *  tongLuong  
 */
var soNgayLam = document.getElementById("day");
var luong1Ngay = 100000;

function tinhLuong() {
    var day = soNgayLam.value ;
    var luong1Ngay = 100000 ;
    var tongLuong = day * luong1Ngay;

    document.getElementById("tongLuong").innerHTML = "Tổng tiền lương: " + tongLuong ;

}
document.getElementById("tinhDay").onclick = tinhLuong;