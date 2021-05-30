import http from '../../../common/http';
import { GET_PRODUCTS_URL }from '../../../common/api';

export function requestGetProducts() {
    return http.get(GET_PRODUCTS_URL);
};