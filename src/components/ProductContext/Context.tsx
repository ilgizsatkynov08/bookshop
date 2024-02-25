import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';
interface Product {
    el : string
    id: number
}

interface ProductContextType {
    AddProduct: (newProduct: Product) => Promise<void>;
    readProduct: () => Promise<void>;
    product: Product[];
    deleteProduct: (id: number) => Promise<void>;
}

const productContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = (): ProductContextType => {
    const context = useContext(productContext);
    if (!context) {
        throw new Error('404');
    }
    return context;
};

interface ProductProviderProps {
    children: ReactNode;
}


const ProductProvider = ({ children }: ProductProviderProps): JSX.Element => {
    const API_PRODUCTS = 'http://localhost:3000/product';

    const [product, setProduct] = useState<Product[]>([]);

    async function AddProduct(newProduct: Product): Promise<void> {
        await axios.post(API_PRODUCTS, newProduct);
    }

    async function readProduct(): Promise<void> {
        const { data } = await axios(API_PRODUCTS);
        setProduct(data);
    }


async function deleteProduct(id:any){
    await axios.delete(`${API_PRODUCTS}/${id}`)
    readProduct()
}

    const values: ProductContextType = {
        AddProduct,
        readProduct,
        product,
        deleteProduct
    };

    return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductProvider;
