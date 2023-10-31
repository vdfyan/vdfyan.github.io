function tambahBuku() {
    // Ambil nilai input dari formulir
    var judul = document.getElementById("judul").value;
    var namaPeminjaman = document.getElementById("name").value;
    var kodeBuku = document.getElementById("kode").value;
    var tanggalPeminjaman = document.getElementById("tglpem").value;
    var nim = document.getElementById("nim").value;
    var noHP = document.getElementById("hp").value;

    // Lakukan validasi atau operasi lain yang diperlukan

    // Tampilkan pesan sukses
    var pesan = document.getElementById("pesanPeminjaman");
    pesan.innerHTML = "Buku dengan judul '" + judul + "' berhasil dipinjam oleh " + namaPeminjaman + " pada tanggal " + tanggalPeminjaman;

    // Kosongkan nilai input setelah berhasil dipinjam
    document.getElementById("judul").value = "";
    document.getElementById("name").value = "";
    document.getElementById("kode").value = "";
    document.getElementById("tglpem").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("hp").value = "";
    
}