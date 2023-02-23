let nama = 'Ukasah'
let usia = 20
let kampus = 'Universitas Pendidikan Indonesia'
let hobbi
let uang = true

// Conditional
if(uang == null){ 
    uang = 'nabung'
 } else if(uang == false) {
    uang = 'nabung dulu'
 } else{
    uang = "jajan"
 }
    

// Operator
let saldoAwal = 50000
let saldoTambahan = 100000
const saldoAkhir = saldoAwal + saldoTambahan

console.log(`Saldo saya hari ini Rp.${saldoAwal}, saldo tambahan saya Rp.${saldoTambahan},
Jadi saya memiliki total uang Rp.${saldoAkhir}. Hari ini saya mau ${uang}`,)



