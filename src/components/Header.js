import React, {useContext} from 'react'
import {Shehla} from '../context/ContextFile' 

export default function Header() {
    
    const {store,changeTheme,AddProduct,DeleteProduct} = useContext(Shehla);

    

return (
    <div>
        number of products: {store.products.length} 
    </div>
)

    
}
