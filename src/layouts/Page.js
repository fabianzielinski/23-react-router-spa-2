import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import ErrorPage from '../pages/ErrorPage'


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/products" exact component={ProductsPage}/>
                <Route path="/contact" exact component={ContactPage}/>        
                <Route path="/admin" exact component={AdminPage}/>
                <Route exact component={ErrorPage}/>
            </Switch>
        </>
    );
}
 
export default Page;