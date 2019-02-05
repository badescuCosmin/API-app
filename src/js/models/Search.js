import axios from 'axios';
export default class Movie {
        constructor(query){
            this.query = query;
        }
        async getMovie(){
            const key = 'f84d63b6';
        try {
            let res = await axios
            (`http://www.omdbapi.com/?apikey=${key}&t=${this.query}`);
             this.result = res.data;
            // console.log(this.result);
        } catch(error){
                alert(error);
            }   
        }
    };