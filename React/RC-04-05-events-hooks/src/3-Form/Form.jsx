import { useState } from "react"

const Form = () => {
    const [isim, setIsim] = useState("")
    const [pass, setPass] = useState("")
    const [country, setCountry] = useState("")

    const getDatabase = () => {
        //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
        //? const res = axios.post("url", { isim, pass, country })

        alert(`name:${isim}
               password: ${pass}
               ülkeler: ${country}
        `)
    
    }


  return (
    <div className="container text-center mt-4">
    <h1>****************************************</h1>
    <h1>FORM (EVENTS)</h1>

    <form onSubmit={getDatabase}>
    <div className="mb-3">
                  <label className="form-label" htmlFor="isim">NAME: <span className="text-danger">{isim}</span></label>
        <input className="form-control"
         id="isim" 
         type="text" 
         onInput={(e)=>setIsim(e.target.value)}
         
         />
    </div>
    <div className="mb-3">
        <label className="form-label" htmlFor="password">PASSWORD</label>
        <input className="form-control"
         id="password" 
         type="password" 
         onChange={(e)=>setPass(e.target.value)}
         
         />
    </div>
    <div className="mb-3">
        <label className="form-label" htmlFor="country">COUNTRY: <span className="text-danger">{country}</span></label>
      <select onChange={(e)=>setCountry(e.target.value)} className="form-select">
    
        <option selected>COUNTRIES</option>
        <option value="Türkiye">TURKEY</option>
        <option value="Almanya">GERMANY</option>
        <option value="Amerika">USA</option>
      </select>
    </div>
    
    <button type="submit" className="btn btn-primary">SUBMIT</button>
    </form>
    
    
    </div>
  )
}

export default Form