document.getElementById('transaksiForm').addEventListener('submit', function (event) {
    const nama = document.getElementById('nama').value.trim();
    const jkel = document.querySelector('input[name="jkel"]:checked');
    const ktp = document.getElementById('ktp').value.trim();
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value.trim();
    const telepon = document.getElementById('telepon').value.trim();
    const jenisBuku = document.getElementById('jenisBuku').value;

    let isValid = true;
    let errorMessage = '';

    if (nama === '') {
        errorMessage += 'Nama harus diisi.\n';
        isValid = false;
    }

    if (!jkel) {
        errorMessage += 'Jenis kelamin harus dipilih.\n';
        isValid = false;
    }

    if (ktp === '' || !/^\d+$/.test(ktp)) {
        errorMessage += 'No. KTP/KTM harus diisi dan berupa angka.\n';
        isValid = false;
    }

    if (tanggal === '') {
        errorMessage += 'Tanggal peminjaman harus diisi.\n';
        isValid = false;
    }

    if (alamat === '') {
        errorMessage += 'Alamat harus diisi.\n';
        isValid = false;
    }

    if (telepon === '' || !/^\d+$/.test(telepon)) {
        errorMessage += 'No. Telefon harus diisi dan berupa angka.\n';
        isValid = false;
    }

    if (jenisBuku === '') {
        errorMessage += 'Jenis buku harus dipilih.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
        event.preventDefault(); // Mencegah pengiriman form jika ada kesalahan
    }
});