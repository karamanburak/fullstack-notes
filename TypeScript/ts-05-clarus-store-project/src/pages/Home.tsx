import axios from "axios";
import SearchComp from "../components/SearchComp";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchFail, fetchStart, getSuccessProduct } from "../features/productsSlice";

export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const Home = () => {
  const [search, setSearch] = useState("")
  const dispatch = useAppDispatch()
  const getData = async () => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.get<Products>(`https://dummyjson.com/products/search?q=${search}`)
      console.log(data.products);
      dispatch(getSuccessProduct(data.products))
    } catch (error) {
      dispatch(fetchFail())
      console.log(error);


    }
  }

  
  useEffect(() => {
    getData()
  }, [search])
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value)
}

return (
  <div>
    <SearchComp handleChange={handleChange} />
  </div>
)
};

export default Home;
