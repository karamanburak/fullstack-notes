//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Senkron Programlama
//****************************************** */

// const wait = (ms) => {

// const start = new Date().getTime()

// while(new Date().getTime() < start+ms){

// }

// }

// console.time("timer1")
// wait(3000)
// console.timeEnd("timer1")


//* Asenkron (setTimeout) 1 seferlik
//* *************************** *// 
// setTimeout(() => {
//     console.log("hallo leute");
// },3000)
// console.log("wie geht's dir ?");

// setTimeout(() => {
//     console.log("Guten Morgen");
// },2000)


//!Guten Morgen-hallo leute wie geht's dir? çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking (kod burada takılı kalmaz alttaki kodlarda çalışır)

// let sayac = 0
// const interval1 = setInterval(() =>{
//     console.log(++sayac);

//     if (sayac==6){

//         //! intervali durdurmak icin kullandigimiz kod blogu
//         clearInterval(interval1)
//     }
// },1000)


// //?callback hell

setTimeout(() => {
    console.log("ayse:s.a. ahmet");
    setTimeout(() => {
        console.log("ahmet:a.s. ayse nasılsın");
        setTimeout(() => {
            console.log("ayse:iyiyim sağol");
        }, 1000);
    }, 1000);
}, 1000);
