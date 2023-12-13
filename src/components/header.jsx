import './header.css';

function Header(){
    return (
        <div className='container'>
        <div className="text-container">
            <h1>
                Proyecto V
            </h1>
            <p>
                ¡Descubre la auténtica música vallenata para alegrar tus fiestas y 
                reuniones! Nuestro grupo experto se especializa en ofrecer servicios 
                musicales de alta calidad, con un amplio repertorio de los éxitos más 
                populares del vallenato tradicional.
            </p>
            <a href="http://wa.me/+584141639387" 
            target="_blank" rel="noopener noreferrer">
                <button>
                    Reservar Ahora
                </button>
            </a>
       </div>
        <div className='image-container'>
            <img className='ppal-img'
                src='./src/assets/legionariovencedor.jpeg'
                alt="foto del acordeonero" 
            />
        </div>
    </div>
        
    )
}

export default Header