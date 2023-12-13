
import './App.css';
import Header from './components/header';
import Grid from './components/Grid';
import NavBar from './components/navbar';
import Contacto from './components/Contacto';
import Toggle  from './components/Toggle';
import useLocalStorage from "use-local-storage";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <>
    <div className='app' data-theme={isDark ? "dark" : "light"}>
    <NavBar />
    <Header />
    <Toggle 
    isChecked={isDark}
    handleChange={()=> setIsDark(!isDark)} />
    <Grid
    title={"¿Que experiencia te ofrece Proyecto V?"} 
    paragraphOne = {"Ofrecemos servicios musicales completos para todo tipo de eventos, desde fiestas privadas hasta festivales. Nuestro experimentado grupo vallenato hará vibrar a tus invitados con su enérgica interpretación y su autenticidad única"}
    subtitleOne='Bailes Animados'
    subtitleTwo='Ambiente Romántico'
    subtitleThree='Música Tradicional'
    bodyOne='Música alegre y bailable 
    para llenar de alegría tu 
    evento.
     Ritmos auténticos y 
    contagiosos.
     Interacción con el público 
    para crear un ambiente 
    festivo.'
    bodyTwo='Canciones melódicas 
    para momentos 
    especiales.
     Interpretaciones 
    sentimentales y emotivas.
     Serena y encantadora 
    atmósfera musical.'
    bodyThree='Repertorio completo de 
    clásicos vallenatos.
     Preservación de la 
    esencia del vallenato 
    auténtico.
     Experiencia única de la 
    tradición musical de la 
    costa colombiana.'
    imageOne="./src/assets/fuerte.png"
    imageTwo="./src/assets/fuerte.png"
    imageThree="./src/assets/fuerte.png" />
    <Grid
    title={"Sobre Nosotros"} 
    paragraphOne = {"Somos una agrupación de vallenato con más de 10 años de experiencia en el mundo de la música. Nuestro principal objetivo es llevar la alegría y la pasión del vallenato a cada evento al que asistimos, creando recuerdos inolvidables y dejando una huella musical en cada corazón."}
    subtitleOne='Experiencia en Vivo'
    subtitleTwo='Talento Excepcional'
    subtitleThree='Diversidad Musical'
    bodyOne='Nuestro grupo ha deleitado a 
    multitudes en diversos 
    escenarios, desde pequeñas 
    fiestas locales hasta grandes 
    festivales internacionales.'
    bodyTwo='Contamos con músicos 
    talentosos y apasionados que 
    se han destacado en la 
    escena musical vallenata.'
    bodyThree='Además del vallenato 
    tradicional, también 
    interpretamos otros géneros 
    musicales para adaptarnos a 
    la preferencia de cada evento.'
    imageOne="./src/assets/legionarioalacarga.jpeg"
    imageTwo="./src/assets/legionarioalacarga.jpeg"
    imageThree="./src/assets/legionarioalacarga.jpeg"    
    /> 
    <Grid
    title={"Nuestro Repertorio Musical"} 
    paragraphOne = {"Amplio repertorio musical que abarca diferentes épocas del vallenato. Nuestro objetivo es complacer a todos los gustos y edades, creando una experiencia musical única en cada evento."}
    subtitleOne='Vallenato Clásico'
    subtitleTwo='Vallenato 
    Contemporáneo'
    subtitleThree='Canciones 
    Personalizadas'
    bodyOne=' Interpretamos los clásicos 
    del vallenato que han 
    dejado huella en la historia 
    de la música colombiana.'
    bodyTwo='Nos mantenemos al día 
    con las tendencias 
    actuales del género 
    vallenato, interpretando las 
    canciones más populares 
    de hoy.'
    bodyThree='Ofrecemos la opción de 
    crear canciones 
    personalizadas para 
    eventos especiales, 
    agregando un toque único 
    y emocionante.'    
    />
    <Grid
    title={"Videos y Audio de Presentaciones en Vivo"} 
    paragraphOne = 'Revive la emoción de nuestras presentaciones en vivo con nuestros videos y grabaciones de audio. Disfruta de la energía contagiosa, la calidad musical y la pasión inigualable de nuestro grupo vallenato.'
    subtitleOne='Fiesteros por 
    Siempre'
    subtitleTwo='Emoción 
    Sentimental'
    subtitleThree='Festival 
    Vallenato'
    bodyOne='Vive la fiesta con nuestras 
    interpretaciones en vivo de 
    los éxitos más populares del 
    vallenato.'
    bodyTwo=' Sumérgete en la emotividad 
    de nuestras interpretaciones 
    románticas.'
    bodyThree='Disfruta de nuestras 
    destacadas presentaciones 
    en festivales vallenatos, 
    donde hemos conquistado al 
    público y a los jueces.'    
    />
    <Contacto />
    </div>
    </>
    
)
}

export default App
