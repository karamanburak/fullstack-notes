// let user = 'Mark'

// aa('merhaba' , user)

// function aa(selam, name = 'User'){

//     console.log(selam, name)
//     a(name)
//     a(name)
//     a(name)
//     a(name)

// }

// // aa('merhaba')

// function a(name = 'user' ){

//     console.log('selam' , name)

// }

// // a('Mark')

/* let myNum = 3

square(myNum)

function square(num){
    console.log(num **2)
     myNum  = num **2
    console.log('Fonksiyonun içi :',myNum)

}

console.log(myNum) */


// let aTopla = function(num1, num2){
//     // return num1 + num2
//     // console.log(num1 + num2)
//     if(num1 == 3) return 0
//     if(num2 == 2) return 1
//     return 5


// }

// console.log(aTopla(4,4))

// console.log(aTopla(3,5))


// let carp = (num1, num2)=>{
//     console.log(num1 * num2)

// }

// carp(aTopla(3,5),aTopla(2,3))

// carp(8,5)

/* let num3 = 8

let divide = num => {
    
    console.log(num / 2)
}

divide(num3)
 */


//! Üçgenin kenar ölçülerini alacak, Eşkenar, İkizkenar, Çeşitkenar
function ucgenTipi(a, b, c) {
    if (a == b && a == c) {
        console.log("Eşkenar ücgen")
    } else if ((a == b) || (a == c) || (b == c)) {
        return "İkizkenar ücgen"
    }
    else {
        console.log("Ceşitkenar ücgen")
    }
}

ucgenTipi(3, 3, 3) //eşkenar
console.log(ucgenTipi(2, 4, 2))  //ikizkenar
ucgenTipi(6, 8, 10) //çeşitkenar

//! saat dakika ve saniye parametreleri alıp toplam saniyeyi döndür

// function convertToSeconds(){

// }

// convertToSeconds(3,50,41) //13841


/* function convertToSeconds(saat,dakika,saniye){
  return saat * 3600 + dakika * 60 + saniye
}
console.log(`${convertToSeconds(3,50,41)} saniyedir`); */

/* function convertToSeconds(saat, dakika, saniye) {
  
    let toplamSaniye = (saat * 3600) + (dakika * 60) + saniye;
    return toplamSaniye;
  }
  
  let saniyecinsinden = convertToSeconds(3,50,41)
  console.log(saniyecinsinden); */

/* const minuteToSeconds = minute => minute * 60;
const hourToSeconds = (hour) => hour * 60 * 60;
const convertToSeconds = (second, minute, hour) => {
  console.log(
    `${hour} hours ${minute} minutes ${second} seconds : ${
      second + minuteToSeconds(minute) + hourToSeconds(hour)
    } seconds`
  );
};
convertToSeconds(41, 50, 3); */


const returnNegative = (num) => {
    if (num <= 0) return num;
    return -num;
};





console.log(returnNegative(-1)) //-1
console.log(returnNegative(5)) // -5
console.log(returnNegative(0)) //0

//! verilen sayının çarpım tablosunu yazdıran fonksiyon

//printMultiplicationTable(4);

/* 4 * 1 = 4
4 * 2 = 8
4 * 3 = 12
4 * 4 = 16
4 * 5 = 20
4 * 6 = 24
4 * 7 = 28
4 * 8 = 32
4 * 9 = 36
4 * 10 = 40 */