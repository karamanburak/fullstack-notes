
const Card = ({title,image,desc,date}) => {
 
  return (
<>
      {date.includes("February") && (<div className="cards">

        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="date">
          <h1>{date}</h1>
        </div>

        <img src={image} alt="" />

        <div className="desc">
          <p>{desc}</p>
        </div>



      </div>) }
   
</>
  )
}

export default Card