import './NavBar.css';

function NavBar(){
    return(
        <div className="nav-bar">
            <img src="./src/assets/react.svg" alt="proyecto v logo" />
            <div className='icons'>
                <a href="https://www.instagram.com/proyectovoficial/"
                target="_blank" rel="noopener noreferrer">
                    <img src="./src/assets/instagram.svg" alt="Instagram url" />
                </a>
                <a href="https://www.tiktok.com/@elacordeondejuancho?_t=8i9ZGsy6cju&_r=1"
                target="_blank" rel="noopener noreferrer">
                    <img src="./src/assets/tik-tok.svg" alt="TikTok url" />
                </a>
                
            </div>
        </div>
    )
}

export default NavBar