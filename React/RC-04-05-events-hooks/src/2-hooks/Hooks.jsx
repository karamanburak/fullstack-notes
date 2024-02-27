//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimini cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import { useState } from "react"

const Hooks = () => {
    //! useState hook u her zaman en üste yazilmali
    //********************* */
    const [sayac, setSayac] = useState(0)
    // let sayac=0;

    //********************* */
    const [person, setPerson] = useState({

        name: "saban",
        job: "front-end developer",
        age: 50,
        color: "red"

    });

    //! Object linin 2.yolu
    const [toggle,setToggle]=useState(true);

    const handleSwap =()=>{
        setToggle(!toggle)
        if(toggle){
            
            setPerson({
                        name: "emre",
                        job: "full-stack developer",
                        age: 33,
                        color: "blue"
                    })
        }else {
                    setPerson({

                        name: "saban",
                        job: "front-end developer",
                        age: 50,
                        color: "red"

                    })
        }
    }


    //^^^^^^^^^^^^^

    //! Object linin 1.yolu
    // const handleSwap = () => {

    //     if (person.name === "saban"){
    //         setPerson({
    //             name: "emre",
    //             job: "full-stack developer",
    //             age: 33,
    //             color: "blue"
    //         })

    //     } else {
    //         setPerson({

    //             name: "saban",
    //             job: "developer",
    //             age: 50,
    //             color: "red"

    //         })

    //     }
    // }



    //********************* */

    const arttir = () => {

        // sayac+=1
        setSayac(sayac + 1) // sayac=1


    }



    return (
        <div className="container text-center mt-5">
            <h2>*************************</h2>
            <h2>*************************</h2>
            <h1>USESTATE</h1>

            <h2>COUNT: {sayac}</h2>
            <button onClick={arttir} className="btn btn-primary">ARTTIR</button>


            <h1 className="mt-5">*********************</h1>
            <div>
                <h1 className="text-warning">OBJECT ILE USESTATE KULLANIMI</h1>
                <h2 className="text-danger">{person.name}</h2>
                <h3 className="text-primary">{person.job}</h3>
                <h5 className="text-success">{person.age}</h5>

                <button onClick={handleSwap} style={{ backgroundColor: person.color, fontSize: "1.2rem", color: "white" }} className="btn m-4 p-4">TOOGLE CHANGE</button>
            </div>


        </div>
    )
}

export default Hooks