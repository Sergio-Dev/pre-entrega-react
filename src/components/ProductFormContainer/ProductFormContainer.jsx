import { useState } from 'react'
import styles from './ProductFormContainer.module.css'
import ProductForm from '../ProductForm/ProductForm'

function ProductFormContainer({message}){

    const [dataForm, setDataForm] = useState(
        {
            id: "",
            name: "",
            price: "",
            stock: ""
        }
    )

    const [imgFile, setImgFile] = useState(null)

    const handleChangeForm = (e)=>{
        const {name, value} = e.target

        setDataForm(
            {
                ...dataForm,
                [name]: value
            }
        )
    }

    const handleChangeImg = (e)=>{
        setImgFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if( !imgFile ){
            alert("Es necesario seleccionar una imagen para el producto")
            return
        }

        const apiKey = 'ff51c1f770c82b7eed841dab4b3979b3'
        const formData = new FormData()
        formData.append('image', imgFile)

        try{
            console.log("Subiendo imagen a ImgBB...")
            
            const resImgBb = await
                fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData
                })

            const datosImgbb = await resImgBb.json()
            
            if(datosImgbb.success){
                console.log("La imagen se subio sin errores", datosImgbb.data.url)
                
                const productoComplete = {
                    ...dataForm,
                    urlImg: datosImgbb.data.url
                }

                console.log('Enviando los siguientes datos a la api: ',
                    productoComplete
                )
            } else {
                throw new Error('Fallo en la subida de la imagen a ImgBB')
            }

        } catch (error){
            console.error("Error en el proceso de envio: ", error)
            alert("Hubo un error al subir la imagen.")
        }
    }

    return(
        <>
        <div className={styles.formContainer}>
            <ProductForm 
                dataForm={dataForm}
                handleChangeForm={handleChangeForm}
                handleSubmit={handleSubmit}
                handleChangeImg={handleChangeImg}
                message={message}
            />
        </div>
        </>
    )
}

export default ProductFormContainer