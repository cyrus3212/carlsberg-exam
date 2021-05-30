import { call, put } from "redux-saga/effects";
import { requestGetProducts } from '../requests/products';
import { setProducts } from '../../actions/productsActions';
import Product from '../../../classes/product';

export default function* handleGetProducts() {
    try {
        const { data } = yield call(requestGetProducts);
        const products = data.map(product => {
            const prod = new Product(product);

            return prod;
        });

        yield put(setProducts(products))
    } catch {}
};