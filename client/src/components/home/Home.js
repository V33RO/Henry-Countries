import {Link} from 'react-router-dom';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {allcountries} from '../../actions/Index.js';


function Home(props){

    console.log('pagina',props)
    useEffect( () => {props.show_countries()},[])
    
    return (
        <div>
            <Link to='/NavBar'></Link>
        </div>
        
      );
  }

  const mapStateToProps = (state) => {
    return {
       stateCountries: state.stateCountries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        show_countries: () => dispatch(allcountries()),
    }
}
  
  export default connect( mapStateToProps, mapDispatchToProps )(Home);