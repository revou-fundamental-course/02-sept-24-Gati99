// Javasript
function hitungLuas() {
    var alas = parseFloat(document.getElementById('panjang-alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    // Validasi input apakah berupa angka
    if (isNaN(alas) || isNaN(tinggi)){
        alert("Masukan nilai yang valid untuk alas dan tinggi");
        return;
    }

    // Formula untuk menghitung luas segitiga: (1/2 * a * t)
    var luas = 0.5 * alas * tinggi;

    // Menampilkan langkah perhitungan
    var langkah = `L = 1/2 x a x t <br> L = 1/2 x ${alas} x ${tinggi} <br> L = ${luas.toFixed(2)}`;

    // Menampilkan hasil perhitungan di HTML
    document.getElementById('hasilLangkah').innerHTML = langkah;
}

// Fungsi untuk mereset form
function resetForm() {
    document.getElementById('panjang-alas').value = '';
    document.getElementById('tinggi').value = '';

    document.getElementById('hasilLangkah').innerHTML = '';
    document.getElementById('hasilLuas').innerHTML = 'Hasil Perhitungan:';
}

//Fungsi menghitung keliling segitiga
function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)){
        alert("Masukan nilai yang valid untuk ketiga sisi");
        return;
    }

    var keliling = sisi1 + sisi2 + sisi3;

    var langkahPerhitungan = `
        K = S1 + S2 + S3 <br />
        K = ${sisi1} + ${sisi2} + ${sisi3} <br />
        K = ${keliling.toFixed(2)}
    `;
    document.getElementById('hasilRumus').innerHTML = langkahPerhitungan;
}

function resetKeliling() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasilRumus').innerHTML = '';
    document.getElementById('hasilKeliling').innerHTML = 'Hasil Perhitungan:';
}