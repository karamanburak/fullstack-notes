
import "./Card.scss"


const Card = ({data}) => {

    console.log(data);
  return (
    <div className="container">

    {
        data.map(({name,job,comment,img,id})=> {

            return (
                <div className="card" key={id}>
                <h1>{name}</h1>
                <h2>{job}</h2>
                <p>{comment}</p>
                <img src={img} alt="" />
                </div>

            )
        })
        
        }

    </div>
  )
}

export default Card