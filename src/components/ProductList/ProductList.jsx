import ProductCard from "../ProductCard/ProductCard"

function ProductList( {products} ){
    return(
        <>
            {
                products.map( (product)=>(
                    <ProductCard 
                        key={product.id}
                        {...product}
                    />
                ) )
            }
        </>
    )
}

export default ProductList