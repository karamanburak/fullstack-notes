import React from 'react';

//! localdeki src altinda resimler bu sekilde import edilir.
import resim2 from "../img/dunya-haritasi-min.jpg"

const Msg = () => {
  
    //! Javascript alani
  
  
    //! return ün alti react alani (jsx alani)
    return (
    <div>
    <h2>burasi MSG sayfasi</h2>
    <p>Hosgeldin REACT</p>

     {/* netten alinan resim yolu */}
            <img src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg" alt="" width="200px"/>
            <img src={resim2} alt="" width="555px" />

            {/* public klasörüne eklenen resimler direk alttaki gibi kisa yol ile yazilabilir */}
            <img src="./assets/Pokemon3.jpg" alt="" width="758px"/>
    </div>
  )
}

export default Msg