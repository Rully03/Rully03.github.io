

function hitungBMI() {
    // Mendapatkan nilai tinggi badan dan berat badan dari input user
    var tinggi = parseFloat(document.getElementById("tinggi-badan").value);
    var berat = parseFloat(document.getElementById("berat-badan").value);

    // Menghitung BMI
    var bmi = berat / Math.pow(tinggi / 100, 2);

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML = bmi.toFixed(1);

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        klasifikasi = "Berat badan rendah";
        klasifikasi2 = "Anda memiliki berat badan rendah";
        range = "Hasil BMI dibawah 18.5";
        kategori = "Anda berada dalam kategori Kekurangan berat badan. Dalam 60% kasus, pola makan yang buruk dapat berisiko Diabetes Cara terbaik untuk menaikan berat badan adalah dengan mengatur pola makan yang benar dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikan berat badan hingga batas normal";
        info = "Berat rendah dapat menyebabkan berbagai masalah penyakit <br> Infertilitas <br> Anemia Osteoporosis <br> Sistem imun lemah";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        klasifikasi = "Berat badan ideal";
        klasifikasi2 = "Anda memiliki berat badan Normal (ideal)";
        range = "Hasil BMI diantara 18.5 dan 24.9";
        kategori = "Anda berada dalam kategori ideal. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat, Diet yang baik dapat mempertahankan kesehatan & imun";
        info = "Tingkatkan kesehatanmu dengan vitamin dan suplemen <br> Vitamin C <br> vitamin D3 <br> vitamin E";
    } else if (bmi >= 25 && bmi < 29.9) {
        klasifikasi = "Berat badan berlebih";
        klasifikasi2 = "Anda memiliki berat badan lebih";
        range = "Hasil BMI diantara 25 dan 29.9";
        kategori = "Anda berada dalam kategori overweight atau berat badan berlebih Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal";
        info = "Beberapa penyakit yang berasal dari kegemukan <br> Diabetes <br> Hipertensi <br> Sakit jantung <br> Osteoarthitis";
    } else {
        klasifikasi = "Berat badan kegemukan (Obesitas)";
        klasifikasi2 = "Anda memiliki berat badan gemuk (Obesitas)";
        range = "Hasil BMI diatas 30";
        kategori = "Anda berada dalam kategori obesitas. Dalam 60% kasus, pola makan yang buruk dapat berisiko Diabetes. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal";
        info = "Beberapa penyakit yang berasal dari kegemukan <br> Diabetes <br> Hipertensi <br> Sakit jantung <br> Osteoarthitis";
    }

    document.getElementById("klasifikasi").innerHTML = klasifikasi;
    document.getElementById("klasifikasi2").innerHTML = klasifikasi2;
    document.getElementById("range").innerHTML = range;
    document.getElementById("kategori").innerHTML = kategori;
    document.getElementById("info").innerHTML = info;

    //Validasi inputan
    var jeniskelamin = document.forms["calculator"]["jenis-kelamin"].value;
    var beratbadan = document.forms["calculator"]["berat-badan"].value;
    var usia = document.forms["calculator"]["usia"].value;
    var tinggibadan = document.forms["calculator"]["tinggi-badan"].value;
    if (jeniskelamin == "") {
        alert("jenis kelamin harus diisi");
        return false;
    }
    if (beratbadan == "") {
        alert("berat badan harus diisi");
        return false;
    }
    if (usia == "") {
        alert("usia harus diisi");
        return false;
    }
    if (tinggibadan == "") {
        alert("tinggi badan harus diisi");
        return false;
    }

    //show form kanan (form hasil)
    var x = document.getElementById("formKanan");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}

function reset() {
    document.getElementById("calculator").reset();
}

function downloadResult() {
    // Menyiapkan data hasil untuk diunduh
    var result = "Sorry masih error ;)";

    // Membuat elemen blob untuk data hasil
    var blob = new Blob([result], { type: "txt" });

    // Membuat elemen anchor untuk hasil download
    var anchor = document.createElement("a");
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = "result.txt";

    // Klik tombol download secara otomatis
    anchor.click();
}

function visitKonsultasi() {
    // Mengatur URL halaman website lain yang ingin dibuka di tab baru
    var url = "https://www.alodokter.com/seputar-ahli-gizi-tugas-dan-kondisi-yang-memerlukan-konsultasi";

    // Membuka URL di tab baru menggunakan fungsi window.open
    window.open(url, "_blank");
}
function visitRegistrasi() {
    var url = "https://www.alodokter.com/komunitas/diskusi/penyakit";

    window.open(url, "_blank");
}
function visitGoogleplay() {
    var url = "https://play.google.com/";

    window.open(url, "_blank");
}
function visitAppstore() {
    var url = "https://www.apple.com/id/app-store/";

    window.open(url, "_blank");
}



