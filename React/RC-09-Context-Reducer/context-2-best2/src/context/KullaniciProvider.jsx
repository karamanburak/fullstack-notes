import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

//!1-Create Context\\
export const KullaniciContext = createContext()

//!provider\\
const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))

  }, [])

  const changeWidth = (id, size) => {
    setUsers(users.map((a) => a.id === id ? { ...a, width: size } : a))
  }


  return (
    <KullaniciContext.Provider value={{ users, changeWidth }}>
      {children}
    </KullaniciContext.Provider>
  ); 
};


//!Consuming burada yaparsak ihtiyaç duyan child larda bir daha çağırmıyoruz (opsiyonel tercih etmeyebilir, eski yoldan yani verileri çağıran sayfalara useContext yazarak devam edebilirsiniz.)
export const useKullaniciCntx = () => {
  return useContext(KullaniciContext)
}

export default KullaniciProvider;
