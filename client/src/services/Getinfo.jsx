import axios from "axios"

const Getinfo= {   
    async getCardio(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/cardio")
        return result.data    
    },   
    async getOneCardio(){
        const result = await axios.get (process.env.REACT_APP_API_URL+"/cardio/:id")
        return result.data 
    },

    async getBodyCombat(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/bodyCombat")
        return result.data    
    },   
    async getOneBodyCombat(){
        const result = await axios.get (process.env.REACT_APP_API_URL+"/bodyCombat/:id")
        return result.data 
    },

    async getMeditacion(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/meditacion")
        return result.data    
    },   
    async getOneMeditacion(){
        const result = await axios.get (process.env.REACT_APP_API_URL+"/meditacion/:id")
        return result.data 
    },

    async getPilates(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/pilates")
        return result.data    
    },   
    async getOnePilates(){
        const result = await axios.get (process.env.REACT_APP_API_URL+"/pilates/:id")
        return result.data 
    },

    async getYoga(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/yoga")
        return result.data    
    },   
    async getOneYoga(){
        const result = await axios.get (process.env.REACT_APP_API_URL+"/yoga/:id")
        return result.data 
    },

    async getResistencia(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/yoga")
        return result.data    
    },   
    async getOneResistencia(){
        const result = await axios.get (process.env.REACT_APP_API_URL+"/yoga/:id")
        return result.data 
    }
}

export default Getinfo;