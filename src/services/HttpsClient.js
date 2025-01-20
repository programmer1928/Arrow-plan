import axios from "axios";
const BIN = '677e9093ad19ca34f8e7b06a';
const DAYS_BIN = '678bb3e1e41b4d34e47a23ec';
const XMasterKey = '$2a$10$OaR8XKiv61XTfunZ76Op2eaNqopJE6qxWQes1roaip.RsDUnkvlnO'
axios.defaults.headers.common["X-Master-Key"] = XMasterKey;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'https://api.jsonbin.io/v3/b/';

export function getTasks() {
    return axios.get(BIN)
}

export function postTasks(data) {
    return axios.put(BIN, JSON.stringify(data))
}

export function getDays() {
    return axios.get(DAYS_BIN)
}

export function postDays(data, day) {
    return getDays().then(res => {
        const newData = res.data.record;
        newData[day] = data;
        return axios.put(DAYS_BIN, JSON.stringify(newData))
    }).catch(err => console.error('کیر توش وقتی خاستم postDays رو بگیرم کیر خوردم!'))
}