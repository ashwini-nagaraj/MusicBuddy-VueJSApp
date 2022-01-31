import axios from 'axios';

const url = '/api/artist';

export default class API {
    static async getAllArtists(){
        const res = await axios.get(url);
        return res.data;
    }

    static async getArtistByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    static async addArtist(artist){
        const res = await axios.post(url, artist);
        return res.data;
    }
    static async updateArtist(id, artist){
        const res = await axios.patch(`${url}/${id}`, artist);
        return res.data;
    }

    static async deleteArtist(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
       
}