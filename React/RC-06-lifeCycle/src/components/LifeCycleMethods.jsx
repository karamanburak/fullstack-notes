import React from "react";



//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?
//?==================================================================


//* Lifecycle yöntemleri, DOM'daki süreleri boyunca componentler üzerinde çalışmak için kullanılan, React'te yerleşik özel yöntemlerdir.
//* Örneğin, bileşen bağlandığında, oluşturduğunda, güncellendiğinde veya bağlantısını kestiğinde.

//* Component in oluşturulması (constructor)
//* DOM ağacına ekleme. (componentDidMount)
//* Component in işlenmesi  (render)
//* (Optional) Componentin update edilmesi (componentDidUpdate)
//* componentin ölümü (DOM ağacından kaldırılıyor) (componentWillUnmount)

class LifeCycleMethods extends React.Component{
  //! 1- componentin oluşturulmasında çağrılır

  constructor(props){
    console.log("constructor is running");
    super(props)

    this.state={count:0}
  }

arttir=()=>{
  this.setState({count:this.state.count+1})
}

  //! 3-) component  monte edildiğinde çağrılır
  //! (ilk renderdan hemen sonra).(database den veri çekme vs...)
  //!  lifecycle döngüsünde yalnızca bir kez çağrılır
  componentDidMount(){
    console.log("component kuruldu");
  }

  //! 4-) bileşen güncellenir ve yeniden oluşturulur hemen sonrasında çağrılır.
  //!ayrıca yeni değiştirilen duruma veya props lara  bir kez erişebilir

  componentDidUpdate(){
    console.log("component updated");
  }

  //! 5- bileşen DOM dan kaldırılmadan önce çağırılır

  componentWillUnmount(){
    console.log("component died");
  }



  //!2- her oluşturmada çağırılır (bileşeni DOM a çizme)

  render(){
    console.log("component rendered");
    return(

      <div className="container text-center p-3">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count} </h3>
        <button className="btn btn-info" 
        onClick={this.arttir}
        >
          INC
        </button>
      </div>




    )
  }


}

export default LifeCycleMethods