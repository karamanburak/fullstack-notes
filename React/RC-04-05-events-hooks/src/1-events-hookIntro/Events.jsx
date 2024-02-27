//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor
const Events = () => {
//! javascript alani
    let title = "HELLO";
    let count = 0;

    const increase = () => {

        count+=1
        console.log(count);
        document.querySelector("span").textContent=count
    }

    const changeTitle = (a)=> {

        title=a
        document.querySelector("h1").textContent=a
    }
    //? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
    //? 1- Herhangi bir state degisirse
    //? 2- Props degisirse
    //? 3- Refresh force edilirse (tercih edilen bir durum olmaz)

    return (
        //! jsx alani
        <div className="container text-center mt-4">
    <h1> INFO: {title}</h1>
        <h2>COUNT: <span className="text-danger">{count}</span></h2>

        <button onClick={increase} className="btn btn-primary">Increase</button>

        <button onClick={()=>changeTitle("hallo")} className="btn btn-danger">Change Title</button>
        <button className="btn btn-info">Clicked</button>






        </div>
    )
}

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Events