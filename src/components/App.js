import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./productDetails";
import ProductList from "./productLists";
import AdminPanel from "./adminPannel";
import AddEditProduct from "./addEditProduct";
import "../styles/App.css";
import Layout from "./layout";

const App = () => {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route exact path="/admin" component={AdminPanel} />
        <Route path="/admin/add" render={() => <AddEditProduct type="add" />} />
        <Route path="/admin/edit/:id" render={() => <AddEditProduct type="edit" />} />
      </Switch>
    </Router>
  );
};

export default App;
