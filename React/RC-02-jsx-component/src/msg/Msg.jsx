//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import React from 'react';

//! localdeki src altinda resimler bu sekilde import edilir.
import resim2 from "../img/dunya-haritasi-min.jpg"



//^ External css harici css dosyalari direk import edilir herhangi bir isim vermeye gerek yok
import "./Msg.css"
import Clock from '../clock/Clock';

const Msg = () => {
  
    //! Javascript alani
  

    //! internal css
    const styleA = {
      color:"green",
      fontFamily: "Tahoma"



    }

    const styleImg={
      width: "705px",
      border:"2px solid blue"

    }

  
    //! return ün alti react alani (jsx alani)
    return (
    <div>

    <h2 style = {styleA}>burasi MSG sayfasi</h2>
    
    {/* inline style */}
    <p style={{color:"red", fontSize:"30px"}}>Hosgeldin REACT</p>

    <Clock/>

     {/* netten alinan resim yolu */}
            <img className="img" src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg" alt=""/>


            <img className="img" src={resim2} alt=""/>

            {/* public klasörüne eklenen resimler direk alttaki gibi kisa yol ile yazilabilir */}
            <img className="img" style={styleImg} src="./assets/Pokemon3.jpg" alt=""/>
            <Clock/>
    </div>
  )
}

export default Msg