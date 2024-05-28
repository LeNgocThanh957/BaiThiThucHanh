class Store {
    danhSachDienThoai;
    name;

    constructor(nameInput) {
        this.name = nameInput;
        this.danhSachDienThoai = [];
        let sp1 = new dienThoai(1, "Iphone 15", "Apple", 40000)
        this.danhSachDienThoai.push(sp1);
        let sp2 = new dienThoai(2, "OPPO Reno10 5G 8GB 256GB", "Oppo", 25000)
        this.danhSachDienThoai.push(sp2);
        let sp3 = new dienThoai(3, "Samsung Galaxy S24 Ultra", "SamSung", 31000)
        this.danhSachDienThoai.push(sp3);
    }

    add(newDienThoai) {
        this.danhSachDienThoai.push(newDienThoai);
    }
}