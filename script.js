function ambilAngka(id) {
  return parseFloat(document.getElementById(id).value);
}

function angkaValid(...angka) {
  return angka.every(function (n) {
    return !isNaN(n) && n > 0;
  });
}

function hitungPersegi() {
  const sisi = ambilAngka('sisi');
  const valid = angkaValid(sisi);
  if (!valid) return { valid };
  return { valid, luas: sisi * sisi, keliling: 4 * sisi };
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