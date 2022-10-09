import axios from "axios";

export default class PostService {

    static async getAll() {
        // Получение всех эвентов
        const response = await axios.get('http://localhost:8000/api/v1/events');
        return response;
    }

    static async getRequstEvents() { 
        // получение заявок
        const response = await axios.post(`http://localhost:8000/api/v1/admin/get/applications`, {
            api_token: localStorage.getItem('api_token')
        });
        return response
    }


    static async postAdminLogin(pLogin, pPassword) {
        // авторизация
        const responce = await axios.post('http://localhost:8000/api/v1/admin/auth', {
                login: pLogin,
                password: pPassword
            });
        return responce;
    }

    static async postEventRequest(data) {
        // добавление заявки в бд
        const responce = await axios.post('http://localhost:8000/api/v1/admin/add/application', data);
        return responce;
    }

    static async addEventRequest(data) {
        // Одобрение заявки и переведение её в БД основных эвентов
        const responce = await axios.post('http://localhost:8000/api/v1/admin/add/events/', data);
        return responce;
    }

    static async deleteEventRequest(data) {
        // удаление заявки
        const responce = await axios.post(`http://localhost:8000/api/v1/admin/delete/application`, data);
        return responce;
    }

}