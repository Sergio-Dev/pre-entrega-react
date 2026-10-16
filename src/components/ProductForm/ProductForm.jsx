import styles from './ProductForm.module.css'

function ProductForm({handleChangeForm, handleSubmit, handleChangeImg, message}){
    return(
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.formTitle}>{message}</h2>

                <div>
                    <label htmlFor="id">ID del producto:</label>
                    <input 
                        id='id'
                        type="text" 
                        name='id'
                        placeholder='5'
                        onChange={handleChangeForm}
                        className={styles.formInput}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="name">Nombre del producto:</label>
                    <input 
                        id='name'
                        type="text" 
                        name='name'
                        placeholder='Ej: Remera Deportiva blanca'
                        onChange={handleChangeForm}
                        className={styles.formInput}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='price'>Precio: </label>
                    <input
                        id='price'
                        type="number"
                        placeholder="Ej: 42000"
                        name="price"
                        onChange={handleChangeForm}
                        className={styles.formInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='stock'>Stock: </label>
                    <input
                        id='stock'
                        type="number"
                        placeholder="Ej: 12"
                        name="stock"
                        onChange={handleChangeForm}
                        className={styles.formInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='image'>Imagen: </label>
                    <input 
                        id='image'
                        name='image' 
                        type="file"
                        onChange={handleChangeImg}
                    />
                </div>

                <button type="submit">Guardar Producto</button>
            </form>
        </>
    )
}

export default ProductForm