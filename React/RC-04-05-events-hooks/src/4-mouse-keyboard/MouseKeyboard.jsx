import React, { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
const MouseKeyboard = () => {
    const [xEkseni, setXekseni] = useState(0);
    const [yEkseni, setYekseni] = useState(0);

    const [inputData, setInputData] = useState("");

    //!onMouseMove=mouse umun sayfa üzerindeki hareketlerini inceler. pageX ve pageY komutunu kullanırsanız, bulunduğunuz sayfanın etiketlerinin sol üst köşesini 0-0 kabul eder, ona göre konum bildirir

    // pageX/Ykoordinatlar, oluşturulan sayfanın tamamının sol üst köşesine göredir (kaydırılarak gizlenen parçalar dahil),

    // clientX/YKoordinatlar sayfanın görünen kısmının sol üst köşesine göredir ve tarayıcı penceresinden "görünür" .

    // screenX/Yfiziksel ekrana göredir.

    const mouseEvent = (e) => {
        // console.log(e.pageX);
        setXekseni(e.pageX);
        // setXekseni(e.screenX);
        setYekseni(e.pageY);
    };


    const keyboardEvent = (e) => {
        console.log(e);
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            alert("tebrikler rakam girdiniz")
        } else {
            alert("hatalı giriş yaptınız lütfen rakam giriniz")
        }

    }


    return (
        <div
            onMouseMove={mouseEvent}
            className="container text-center mt-4 d-flex flex-column align-items-center"
        >
            <h2 className="text-danger">MOUSE EVENTS</h2>
            <p>X ve Y</p>
            <p className="text-danger fw-bold">
                {xEkseni} - {yEkseni}
            </p>
            <div
                className="bg-success text-light w-50 p-4"
                id="coord"
                onMouseMove={mouseEvent}
            >
                <HiOutlineDesktopComputer /> KOORDİNATLAR <FaReact /> <FaGooglePlus />
            </div>

            <div>
                <h2 className="text-danger mt-4">
                    Keyboard-Clipboard Events{" "}
                    <span className="text-primary">{inputData}</span>
                </h2>

                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setInputData(e.target.value)}
                    //   onKeyDown={(e)=>(e.keyCode>=48 && e.keyCode<=57) ? alert("tebrik"):alert("hata")}
                    onKeyDown={keyboardEvent}
                />
            </div>

            {/* onmouseenter genellikle fare işaretçisi bir öğeden ayrıldığında meydana gelen
      olayla (onmouseleave) birlikte kullanılır .  onmouseenter,onmouseover olayına benzer  . Aradaki fark, onmouseenter
      olayının
      bubble olmamasıdır (belge hiyerarşisini yukarıya taşımaz, child a ve parent a aynı olayı verdiğinizde herkes kendi alanında çalışır, child dan parent etkilenmez) */}
        </div>
    );
};

export default MouseKeyboard;
