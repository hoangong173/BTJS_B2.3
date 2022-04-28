/**
 * Khối 1: 
 *  chieuDai, chieuRong
 * 
 * Khối 2:
 * 
 * B1: tìm tới thẻ bằng id
 * B2: tạo hàm 
 *      +lấy giá trị từ form
 *      +lặp công thức tính toán
 *         dienTich = chieuDai * chieuRong
 *          chuVi = (chieuDai + chieuRong) * 2
 * B3: Gắn sự kiện click cho button
 * B4: Hiển thị kết quả lên UI
 * 
 * Khối 3:
 *  dienTich, chuVi
 */

var chieuDai = document.getElementById("cDai");
var chieuRong = document.getElementById("cRong");
function tinhCVDT() {
    var dai = chieuDai.value ;
    var rong = chieuRong.value;
    
    var dienTich = dai * rong ;
    var chuVi = (dai + rong) * 2;

    document.getElementById("chuViDienTich").innerHTML = "Diện tích hình chữ nhật là: " + dienTich + "<br> Chu vi hình chữ nhật là: " + chuVi;

}
document.getElementById("tinhCvDt").onclick = tinhCVDT;