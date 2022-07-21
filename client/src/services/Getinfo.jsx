export default function Getinfo(){
    return fetch('http://localhost:1234/tipo')  
        .then(res => res.json())
            .then(data => {
                return data;
            })
}