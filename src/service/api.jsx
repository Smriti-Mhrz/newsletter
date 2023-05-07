import axios from "axios";

const news__Url= "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

export const getNews= async()=>{
    try{
        return await axios.get(news__Url);
    }catch(error){
        console.log(error);
    }

}