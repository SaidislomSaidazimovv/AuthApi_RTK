import Login from "./components/login/Login"
import { useGetProductsQuery } from "./redux/api/products"

function App() {
  const {data} = useGetProductsQuery(undefined);
  console.log(data)
  return (
    <>
      <Login/>
    </>
  )
}

export default App
