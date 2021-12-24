import { useState } from "react"
import { getGifts } from "../helpers/getGifts";

export const useFetchGif = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    getGifts(category)
        .then(data => {
            setTimeout(() => {
                setstate({
                    data,
                    loading: false 
                });
            },1500);
        })
    
    

    return state;
}