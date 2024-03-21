import React from 'react'

import AnaUser from './AnaUser'
import { useKullaniciCntx } from '../context/KullaniciProvider'


const Isimler = () => {
//! 1.yol\\
// const {users} = useContext(KullaniciContext)
//! 2.yol\\
const {users} = useKullaniciCntx()


  return (
    <div>
        {/* diziden 4 kişinin ismini bastir */}
        {users.slice(0,4).map((i)=>(<div style={{textAlign:"center",background:"pink"}}>
            {i.login}
        </div>))}

        <AnaUser users={users}/>

    </div>
  )
}

export default Isimler