function tambahBuku() {
    
    var judul = document.getElementById("judul").value;
    var penulis = document.getElementById("penulis").value;
    var kode = document.getElementById("kode").value;

    if (!judul || !penulis || !kode) {
        alert("Semua kolom harus diisi");
        return;
    }

    var pesanElement = document.getElementById("pesan");
    pesanElement.textContent = "Buku berhasil ditambahkan!";

    document.getElementById("judul").value = "";
    document.getElementById("penulis").value = "";
    document.getElementById("kode").value = "";
}