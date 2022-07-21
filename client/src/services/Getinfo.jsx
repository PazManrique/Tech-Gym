export default function Getinfo(){
    return fetch("http://localhost:1234")  
        .then(res => res.json())
            .then(data => {
                return data;
            })
}