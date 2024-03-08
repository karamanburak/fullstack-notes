import React, { useEffect, useState } from 'react'
import moment from 'moment'

const Clock = () => {

    // //?==================================================================
    // //?                       USEEFFECT HOOK
    // //?==================================================================
    // //! Use Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
    // //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (yani istediğim bişeyi yap) demek için kullanılır

    // //! useEffect(() => {
    // //*   /* ComponentDidMount code */
    // //! }, []);

    // //! useEffect(() => {
    // //*   */ componentDidUpdate code */
    // //! }, [var1, var2]);

    // //! useEffect(() => {

    // //!   return () => {
    // //*     //* componentWillUnmount code */
    // //!   };
    // //! }, []);

    // //! useEffect(() => {
    // //*   //* componentDidMount code + componentDidUpdate code */

    // //!   return () => {
    // //*     //* componentWillUnmount code */
    // //!   };
    // //! }, [var1, var2]);


    const [time,setTime]= useState(moment())
    const [sayac,setSayac]= useState(0)

    //!componentDidMount= ilk render da çalış bir daha burayı görme
    useEffect(() => {
    
const zaman = setInterval(() => {
    // console.log("merhaba");
    setTime(moment())
},1000);


        //!component kapandığında yada başka sayfaya gidildiğinde çalışmamız dursun istersek alttaki return ü yazıyoruz
        //!componentWillUnmount()
return ()=>{
    console.log("baska sayfaya gidildi");

    clearInterval(zaman)

}
     
    }, [])

    useEffect(()=>{
        sayac > 0 && alert("sayac arttirildi")
        

    },[sayac])
    



  return (
    <div>
    <div className='text-primary fw-bold fs-5'>
    {time.format("HH")}
    {time.format("ss") %2 ? ":" : " "}
    {time.format("mm")}
    {time.format("ss") % 2===1 ? ":" : " "}
    {time.format("ss")}

    </div>

    <div>
    <h2>*************************************</h2>
    <h1>
    SAYAC: {sayac}
    </h1>

    <button onClick={()=>setSayac(sayac+1)} className='btn btn-warning'>ARTTIR</button>
    </div>
    </div>
  )
}

export default Clock