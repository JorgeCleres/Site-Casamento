import Api from './Api'

export default {
    sendRequisition(rota, param) {
        return Api().post(rota, param)
    }
}