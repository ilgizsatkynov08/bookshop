import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './header.css'
import { Link, useNavigate } from 'react-router-dom';

interface YourComponentProps {
    block: boolean;
}

const Header: React.FC<YourComponentProps> = () => {
    const [block, setBlock] = useState(false);
    const [password, setPassword] = useState<string>('');

    const handlePassword = (e:any) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        if (password === '123') {
            navigate('/admin');
            setBlock(false);
        } else {
            alert("не провильный пароль!");
        }
    };

    const toggleModal = () => {
        setBlock(!block);
    };

    const navigate = useNavigate();

    return (
        <div id="header">
            <div className='container'>
                <div className="header">
                    <h1 onClick={() => navigate("/booksApp")}>BOOKShop</h1>
                    <div className="icon">
                        <TextField
                            sx={{
                                color: "white",
                                border: "none",
                                background: "white",
                                width: "400px",
                                borderRadius: "10px",
                                height: "50px"
                            }}
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                        />
                        <div className="bag">
                            <ShoppingCartIcon />
                            <h1>Корзина</h1>
                        </div>
                        <div className="bag" onClick={toggleModal}>
                            <AccountCircleIcon />
                            <h1>Aдмин</h1>
                        </div>
                        {block && (
                            <div className="bg">
                                <div className='password'>
                                    <div className="login">
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "2pc"
                                        }} className="ib">
                                            
                                            <input
                                                type="password"
                                                onChange={handlePassword}
                                                value={password}
                                                placeholder="Password..."
                                            />
                                            <button onClick={handleSignIn}>SIGN IN</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
