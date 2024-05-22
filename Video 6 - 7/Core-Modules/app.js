// Core Modules
// File System

const fs = require('fs');

// menuliskan string ke file (Synchronous)
//try {
//    fs.writeFileSync('Core Modules/data/pendaftar.json', 'Hello World Secara Synchronous!!');
//} catch(e) {
//    console.log(e);
//}

// menuliskan string ke file (Asynchronous)
//fs.writeFile('Core Modules/data/pendaftar.json', 'Hello World Secara Asynchronous!!', (e) => {
//    console.log(e);
//});

// Membaca Isi File (Synchronous)
//const data = fs.readFileSync('Core Modules/data/pendaftar.json', 'utf-8');
//console.log(data);

// Membaca Isi File (Asynchronous)
//fs.readFile('Core Modules/data/pendaftar.json', 'utf-8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
//});

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama: ', (nama) => {
    rl.question('No HP: ', (noHP) => { 
        const pendaftar = { nama, noHP };
        const file = fs.readFileSync('Core Modules/data/pendaftar.json', 'utf-8');
        const daftar = JSON.parse(file);

        daftar.push(pendaftar);

        fs.writeFileSync('Core Modules/data/pendaftar.json', JSON.stringify(daftar));

        console.log(`Terima kasih telah mendaftar di layanan kami, bro ${nama}.`)

        rl.close();
    });
});