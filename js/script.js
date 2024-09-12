// Javasript
var segitigaButton = document.getElementById('segitigaButton');
var jajarGenjangButton = document.getElementById('jajarGenjangButton');
var segitigaTab = document.getElementById('segitigaTab');
var jajarGenjangTab = document.getElementById('jajarGenjangTab');

// Fungsi untuk membuka tab baru dengan rumus jajar genjang
function openJajarGenjangTab() {
    jajarGenjangTab.style.display = 'block';
    segitigaTab.style.display = 'none';
}

// Fungsi untuk membuka tab baru dengan rumus segitiga
function openSegitigaTab() {
    segitigaTab.style.display = 'block';
    jajarGenjangTab.style.display = 'none';
}

segitigaButton.addEventListener("click", openSegitigaTab);
jajarGenjangButton.addEventListener("click", openJajarGenjangTab);

openSegitigaTab();

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

// Fungsi untuk menghitung luas jajar genjang
function hitungLuasJajarGenjang() {
    var panjangAlas = parseFloat(document.getElementById('panjang-alas-jajar-genjang').value);
    var tinggi = parseFloat(document.getElementById('tinggi-jajar-genjang').value);

    if (isNaN(panjangAlas) || isNaN(tinggi)) {
        alert("Masukkan nilai yang valid untuk alas dan tinggi");
        return;
    }

    var luas = panjangAlas * tinggi;
    var rumus = `L = a x t <br> L = ${panjangAlas} x ${tinggi} <br> L = ${luas.toFixed(2)}`;
    
    document.getElementById('hasilRumusLuasJajarGenjang').innerHTML = rumus;
    document.getElementById('hasilLuasJajarGenjang').innerHTML = `Luas Jajar Genjang: ${luas.toFixed(2)}`;
}

// Fungsi untuk menghitung keliling jajar genjang
function hitungKelilingJajarGenjang() {
    var panjang = parseFloat(document.getElementById('panjang').value);
    var lebar = parseFloat(document.getElementById('lebar').value);

    if (isNaN(panjang) || isNaN(lebar)) {
        alert("Masukkan nilai yang valid untuk panjang dan lebar");
        return;
    }

    var keliling = 2 * (panjang + lebar);
    var rumus = `K = 2 x (panjang + lebar) <br> K = 2 x (${panjang} + ${lebar}) <br> K = ${keliling.toFixed(2)}`;

    document.getElementById('hasilRumusKelilingJajarGenjang').innerHTML = rumus;
    document.getElementById('hasilKelilingJajarGenjang').innerHTML = `Keliling Jajar Genjang: ${keliling.toFixed(2)}`;
}

// Fungsi untuk mereset form luas jajar genjang
function resetLuas() {
    document.getElementById('panjang-alas-jajar-genjang').value = '';
    document.getElementById('tinggi-jajar-genjang').value = '';
    document.getElementById('hasilRumusLuasJajarGenjang').innerHTML = '';
    document.getElementById('hasilLuasJajarGenjang').innerHTML = 'Hasil Perhitungan:';
}

// Fungsi untuk mereset form keliling jajar genjang
function resetKelilingJajarGenjang() {
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    document.getElementById('hasilRumusKelilingJajarGenjang').innerHTML = '';
    document.getElementById('hasilKelilingJajarGenjang').innerHTML = 'Hasil Perhitungan:';
}



