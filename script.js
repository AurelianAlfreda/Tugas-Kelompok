function ambilAngka(id) {
  return parseFloat(document.getElementById(id).value);
}

function angkaValid(...angka) {
  return angka.every(function (n) {
    return !isNaN(n) && n > 0;
  });
}

function hitungPersegi() {
  const panjang = ambilAngka('panjang');
  const lebar = ambilAngka('lebar');
  const valid = angkaValid(panjang, lebar);
  if (!valid) return { valid };
  const luas = panjang * lebar;
  const keliling = 2 * (panjang + lebar);
  return {valid, luas, keliling};
}

function hitungPersegiPanjang() {
  const p = ambilAngka('panjang');
  const l = ambilAngka('lebar');
  const valid = angkaValid(p, l);
  if (!valid) return { valid };
  return { valid, luas: p * l, keliling: 2 * (p + l) };
}

function hitungSegitiga() {
  const alas = ambilAngka('panjang');
  const tinggi = ambilAngka('tinggi');
  const valid = angkaValid(alas, tinggi);
  if (!valid) return { valid };
  const luas = 0.5 * alas * tinggi;
  const keliling = alas * 3;
  return { valid, luas, keliling };
}

function hitungLingkaran() {
  const r = ambilAngka('jariJari');
  const valid = angkaValid(r);
  if (!valid) return { valid };
  return { valid, luas: Math.PI * r * r, keliling: 2 * Math.PI * r };
}

function hitungJajarGenjang() {
  const alas = ambilAngka('alas');
  const tinggi = ambilAngka('tinggi');
  const sisiMiring = ambilAngka('sisiMiring');
  const valid = angkaValid(alas, tinggi, sisiMiring);
  if (!valid) return { valid };
  const luas = alas * tinggi;
  const keliling = 2 * (alas + sisiMiring);
  return { valid, luas, keliling };
}

function hitungTrapesium() {
  const sisiAtas = ambilAngka('sisiAtas');
  const sisiBawah = ambilAngka('sisiBawah');
  const tinggi = ambilAngka('tinggi');
  const sisiKiri = ambilAngka('sisiKiri');
  const sisiKanan = ambilAngka('sisiKanan');
  const valid = angkaValid(sisiAtas, sisiBawah, tinggi, sisiKiri, sisiKanan);
  if (!valid) return { valid };
  const luas = 0.5 * (sisiAtas + sisiBawah) * tinggi;
  const keliling = sisiAtas + sisiBawah + sisiKiri + sisiKanan;
  return { valid, luas, keliling };
}

// event tobol hitungnya
const tombolHitung = document.getElementById("hitung");

if (tombolHitung) {

    tombolHitung.addEventListener("click", function () {

        let hasil;

        if (document.getElementById("jariJari")) {
          hasil = hitungLingkaran();

        } else if (document.getElementById("sisiMiring")) {
          hasil = hitungJajarGenjang();

        } else if (document.getElementById("sisiAtas")) {
          hasil = hitungTrapesium();

        } else if (document.title.includes("Segitiga")) {
          hasil = hitungSegitiga();

        } else if (document.title.includes("Persegi Panjang")) {
          hasil = hitungPersegiPanjang();

        } else if (document.title.includes("Persegi")) {
          hasil = hitungPersegi();
        }

        if (!hasil || !hasil.valid) {

            document.getElementById("hasilLuas").textContent =
              "Input tidak valid";

            document.getElementById("hasilKeliling").textContent =
              "Input tidak valid";

            return;
        }

        document.getElementById("hasilLuas").textContent =
          hasil.luas.toFixed(2);

        document.getElementById("hasilKeliling").textContent =
          hasil.keliling.toFixed(2);

    });

}