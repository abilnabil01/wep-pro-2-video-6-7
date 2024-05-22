function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}
const mahaiswa = {
  nama: `Nabiilal Karom`,
  umur: 20,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}. Umur saya ${this.umur} tahun.`;
  },
};

const PI = 3.14;

class Orang {
  constructor() {
    console.log(`Objek orang telah di buat!!`);
  }
}

//module.exports.cetakNama = cetakNama;
//module.exports.PI = PI;
//module.exports.mahaiswa = mahaiswa;
//module.exports.Orang = Orang;

module.exports = {
  cetakNama: cetakNama,
  PI: PI,
  mahaiswa: mahaiswa,
  Orang: Orang,
};
