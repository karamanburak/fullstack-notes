import { useState } from "react"
import { Card } from "react-bootstrap"

const PlayerCard = ({img, name, statistics}) => {

const [showImg, setShowImg] = useState(true)



  return (
    <Card className="player-card m-auto"
    onClick={()=>setShowImg(!showImg)}
    >

      
      {showImg 
      ? (<Card.Img className="player-logo" src={img} variant="top" />)
      : (
        <ul className="m-auto">
          {statistics.map((item,i)=>(
            <li key={i} className="h5 list-unstyled text-start">
              {i===0 ? "🏀" : i===1 ? "🗑️" : i===2 ? "👋" :"💯"}
              {item}</li>
          ))}
        </ul>
        )
      }


      
    <Card.Footer>
      <Card.Title>
        {name}
      </Card.Title>
    </Card.Footer>

    </Card>
  )
}

export default PlayerCard