import './Grid.css';
import PropTypes from 'prop-types';

function Grid({ title, paragraphOne, subtitleOne, bodyOne , subtitleTwo, bodyTwo, subtitleThree, bodyThree, imageOne, imageTwo, imageThree}){
    return (
        <div className="contenedor">
        <div className="servicios">
            <h2>
                {title}
            </h2>
            <p>
                {paragraphOne}
            </p>
        </div>
        <div className="grid-container">
            <div className="grid-item">
                <img src= {imageOne} alt="" />
                <h3>{subtitleOne}</h3>
                <p> {bodyOne} </p>
            </div>
            <div className="grid-item">
                <img src={imageTwo} alt="" />
                <h3> {subtitleTwo} </h3>
                <p> {bodyTwo} </p>
            </div>
            <div className="grid-item">
                <img src={imageThree} alt="" />
                <h3> {subtitleThree} </h3>
                <p> {bodyThree} </p>
            </div>
        </div>
        </div>
        
    )
}

// Specifies the default values for props:
Grid.defaultProps = {
    imageOne: '',
    imageTwo: '',
    imageThree: ''
  };

Grid.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphOne: PropTypes.string.isRequired,
    subtitleOne: PropTypes.string.isRequired,
    bodyOne: PropTypes.string.isRequired,
    subtitleTwo: PropTypes.string.isRequired,
    bodyTwo: PropTypes.string.isRequired,
    subtitleThree: PropTypes.string.isRequired,
    bodyThree: PropTypes.string.isRequired,
    imageOne: PropTypes.string.isRequired,
    imageTwo: PropTypes.string.isRequired,
    imageThree: PropTypes.string.isRequired
  };

export default Grid