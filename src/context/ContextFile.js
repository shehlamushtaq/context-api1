import React,{useState,createContext} from 'react'

export const Shehla = createContext();

export  const  Hiba = ({children}) => {
     
        const [store, setStore] = useState({
                                theme:"red",
                                products:[],
                                amount:0
                                })
    
const changeTheme =(str)=>{
    setStore({...store,theme:str})
}

const AddProduct = (name) =>{
    setStore({...store.products,name})
}
const DeleteProduct = (name) =>[
    setStore(
        {...store,
        products:store.products.filter((item,index)=> name!==index)}
    )
        ]

    return (
        <div>
<Shehla.Provider value={{store,changeTheme,AddProduct,DeleteProduct}  }>
             {children}
         </Shehla.Provider>
        </div>
    )
}
