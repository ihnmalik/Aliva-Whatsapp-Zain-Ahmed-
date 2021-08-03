import { useEffect } from "react"
import axios from "axios"
import store from '../store/store'

useEffect(()=>{
    axios
        .get("https://run.mocky.io/v3/0326c07f-89f8-49af-aa67-569e44ab2790")
        .then((response: any) => {
            store.dispatch({
                type: "NEW_CHAT",
                data: response.data,
            })
            
        })
        .catch((error:any) => {
            store.dispatch({ type: "FAILED" })
        });
})