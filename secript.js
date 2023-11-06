function validateForm() {
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var usia = document.getElementById("usia").value;

    if (nama == "" || alamat == "" || usia == "") {
        alert("Semua kolom harus diisi!");
        return false;
    }

    if (isNaN(usia) || usia < 1 || usia > 100) {
        alert("Usia harus berupa angka antara 1 dan 100!");
        return false;
    }

    return true;
}