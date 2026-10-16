import './App.css'
import Layout from './components/Layout/Layout'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import ProductFormContainer from './components/ProductFormContainer/ProductFormContainer'

function App() {
  

  return (
    <>
      <Layout >
        <ProductListContainer message={"Productos Destacados"} />
        <ProductFormContainer message={"Agregar producto"} />
      </Layout>
    </>
  )
}

export default App
