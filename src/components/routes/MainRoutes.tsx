import React from 'react';
import { Route, Routes } from 'react-router';
import AdminProduct from '../Admin';
import PagesProduct from '../../Pages';

const MainRoutes = () => {
    const PUBLIC = [
        { link: "/admin", element: <AdminProduct/>, id: 1 },
        { link: "/", element: <PagesProduct/>, id: 2 },
        { link: "/booksApp", element: <PagesProduct/>, id: 2 },
        { link: "/save", element: <PagesProduct/>, id: 2 }

    ];

    
    return (
        <Routes>
            {PUBLIC.map((el) => (
                <Route path={el.link} element={el.element} key={el.id}/> 
            ))}
        </Routes>
    );
};

export default MainRoutes;