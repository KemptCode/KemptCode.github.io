import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './components/App'; // App Wrapper
import HomePage from './components/pages/HomePage';
import PageNotFound from './components/pages/PageNotFound';


export default function AppRoutes(){
    return <Router>
        <Routes>
            <Route path="/" exact element={<App/>}/>
            {/* <Route path="/markup" exact component={MarkupPage}/> */}
            <Route path="/login" exact element={<HomePage/>}/>
            <Route path="/PageNotFound" exact element={<PageNotFound/>}/>
            <Route path="*" element={<Navigate to="/PageNotFound" replace/>} />
        </Routes>
    </Router>;
};
