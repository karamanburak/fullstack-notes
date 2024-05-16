import { Product } from "../models/models";

interface ICard {
    item: Product;
    text: string;
    handleFunc: (item:Product) => void
}

const Card:React.FC<ICard> = ({item,text,handleFunc}) => {
    return (
        <div className="w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex-col justify-between bg-white rounded-lg">
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            <img src={item.images[0]} alt={item.title} />
            <div>
                <h2>${item.price}</h2>
                <button onClick={()=>handleFunc(item)}>{text}</button>
            </div>
        </div>
    )
};

export default Card;
