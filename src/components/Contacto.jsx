import "./Contacto.css";

function Contacto(){
    return(
        <div className="contacto">
            <h2>
            Contáctanos para tu Evento
            </h2>
            <h3>
            Si estás listo para llevar la verdadera esencia del vallenato a tu próximo evento, no dudes en 
            contactarnos. Estamos disponibles para responder a tus preguntas y ayudarte a hacer de tu evento 
            una experiencia musical única.
            </h3>
            <a href="http://wa.me/+584141639387"
            target="_blank" rel="noopener noreferrer">
                <button>
                    ¡Contáctanos!
                </button>
            </a>
        </div>
    )
}

export default Contacto