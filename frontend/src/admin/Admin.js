import './admin.css';
import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {listCategory, editCategory, createCategory} from './components/Category';
import {listProduct, editProduct, createProduct} from './components/Product';

export default function Admins() {
    return (
        <div className="Admins">
            <Admin dataProvider={simpleRestProvider('http://localhost:8000/v1')}>
                <Resource name="category" list = {listCategory} edit = {editCategory} create = {createCategory}/>
                <Resource name="product" list = {listProduct} edit = {editProduct} create = {createProduct}/>
            </Admin>
        </div>
    );
}