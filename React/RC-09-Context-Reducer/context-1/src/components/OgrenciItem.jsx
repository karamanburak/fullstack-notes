import { useContext } from "react"
import { StudentContext } from "../App"



const OgrenciItem = () => {
  //! 3- (context consumer) globalde tanimlanan degerleri burada cagirdik\\
  const {students,changeColor} = useContext(StudentContext)
  console.log(students);


  return (
    <div>
{students.map((i)=>{
return(
    <div style={{backgroundColor:i.color}} key={i.id}>
        <h3>NAME: {i.name}</h3>
        <h4>EMAİL: {i.email} </h4>
        <h4> AGE: {i.age}</h4>
        Color: <input type="text" 
        value={i.color}
        onChange={(e)=> changeColor(i.id,e.target.value)}
        />
    </div>  
)


})}
       
    </div>
  )
}

export default OgrenciItem