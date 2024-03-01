import { Card } from "react-bootstrap"

const PlayerCard = ({img, name, statistics}) => {
  return (
    <Card className="player-card">
    <Card.Img className="player-logo" src={img} variant="top" />
      
    </Card>
  )
}

export default PlayerCard