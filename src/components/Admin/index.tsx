import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import "./admin.css"
import { useProduct } from '../ProductContext/Context';
import { Link } from 'react-router-dom';

const AdminProduct = () => {
    const { AddProduct } = useProduct();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);

    const handleNameChange = (e:any) => setName(e.target.value);
    const handleImageChange = (e:any) => setImage(e.target.value);
    const handleTypeChange = (e:any) => setType(e.target.value);
    const handlePriceChange = (e:any) => setPrice(e.target.value);

    function handleSave() {
        let newObj:any = {
          name: name,
          image: image,
          type: type,
          price: price,
        };
        AddProduct(newObj)
    }
    
    return (
        <div className='container'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70vh"}} className="admin">
                <div className="admin-file">
                    <TextField
                        sx={{marginTop: "7pc"}}
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        onChange={handleImageChange}
                    />
                </div>
                <div className="admin-menu" style={{ display: "flex", gap: "2pc", flexDirection: "column" }}>
                    <TextField
                        sx={{ width: "450px" }}
                        id="outlined-basic"
                        label="Product Name"
                        variant="outlined"
                        onChange={handleNameChange}
                    />
                    <div className="category">
                        <TextField
                            sx={{ width: "200px", marginRight: "3pc" }}
                            id="outlined-basic"
                            label="Category"
                            variant="outlined"
                            onChange={handleTypeChange}
                        />
                        <TextField
                            sx={{ width: "200px" }}
                            id="outlined-basic"
                            label="Price"
                            variant="outlined"
                            onChange={handlePriceChange}
                        />
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Product description..."
                        multiline
                        rows={4}
                    />
                    <Link to={"/save"}>
                    <Button style={{
                        width: "500px"
                    }} variant="outlined" onClick={handleSave}>SAVE</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminProduct;
