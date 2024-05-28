let cuaHangCuaThanh = new Store("Cua hang cua Thanh");
function showHome() {
    document.getElementById("main").innerHTML = `
     <table border="1">
        <tr>
            <th>Mã điện thoại</th>
            <th>Tên</th>
            <th>Hãng sản xuất</th>
            <th>Giá</th>
        </tr>
        <tbody id="danhSachSanPham">

        </tbody>
    </table>
    `
    let list = cuaHangCuaThanh.danhSachDienThoai;
    let html= ``;
    for (let i = 0; i < list.length; i++) {
        html += `
        <tr>
            <td>${list[i].maDienThoai}</td>
            <td>${list[i].ten}</td>
            <td>${list[i].hangSanXuat}</td>
            <td>${list[i].gia}</td>
        </tr>
        `
    }
    document.getElementById("danhSachSanPham").innerHTML = html;
}

function showFormAdd() {
    document.getElementById("main").innerHTML = `
    <input type="text" id="maDienThoai" placeholder="Mã điện thoại">
    <input type="text" id="ten" placeholder="Tên">
    <input type="text" id="hangSanXuat" placeholder="Hãng sản xuất">
    <input type="text" id="gia" placeholder="Giá">
    <button onclick="add()">Add</button>
    `
}

function add() {
    let maDienThoai = document.getElementById("maDienThoai").value;
    let ten = document.getElementById("ten").value;
    let hangSanXuat = document.getElementById("hangSanXuat").value;
    let gia = document.getElementById("gia").value;
    let newDienThoai = new dienThoai(maDienThoai, ten, hangSanXuat, gia);
    cuaHangCuaThanh.add(newDienThoai);
    showHome();
}

showHome();