export class YugiohDm{
    constructor(config = {}){
        this.host = config.host || '';
        this.params = config.params || {}
    }

    async getAllCards(){
        let goApi = await this.doRequest('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        return goApi;
    }

    async doRequest(url){
        let datos;
        await fetch(url).then(response => response.json()).then(json => datos = json)
        return datos
    }
}