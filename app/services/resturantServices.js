import { httpAxios } from "./helper/HttpAxios";


export async function registerResturant(resturant) {
    const result = httpAxios.post('/resturant', resturant).then((respopnse) => respopnse.data)
    return result;
}