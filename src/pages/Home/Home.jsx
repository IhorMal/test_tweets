import { useEffect } from 'react';
import saylet from './Home.module.css'

function Home() {

    return (
       <div className={saylet.conteiner}>    
        <h1>Welcome to my app!</h1>
        <p>Here you can find all sorts of interesting things.</p>
       </div>
    )
}

export default Home;
