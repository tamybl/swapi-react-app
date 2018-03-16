import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ForecastItem from './CategoryItem';


const swapiModule = function () {
  var rootURL = 'http://swapi.co/api/';

  function request(url, cb) {
    function listener(e) {
      if(oReq.readyState != 4 && e.type !== 'load') return;
      if(oReq.status && oReq.status != 200) {
        //this will be the error handler
      } else {
        cb(JSON.parse(oReq.responseText));
      }
    }

    var oReq;
    // Use XDomainRequest if it's available (to support IE<10)
    if (window.XDomainRequest) {
      oReq = new XDomainRequest();
      oReq.open('get', url, true);

      // Update the timeout to 30 seconds for XDomainRequests. 
      oReq.timeout = 30000;
    } else {
      oReq = new XMLHttpRequest();
      oReq.open('get', url, true);
      //oReq.setRequestHeader('User-Agent', 'swapi-javascript');
      oReq.setRequestHeader('Accept', 'application/json');
    }
    oReq.onload = listener;

    // Wrap in a 0 millisecond timeout.
    // XDomainRequests appear to randomly fail unless kicked into a new scope.
    setTimeout(function(){
      oReq.send();
    }, 0);
  }

  function getResources(cb) {
    request(rootURL, cb);
  }

  //generic for ALL calls, todo, why optimize now!
  function getResource(u, cb) {

  }

  function singularRequestGenerator(path) {
    return function(id, cb) {
      request(rootURL + path + '/'+id+'/', cb);
    };
  }

  function pluralRequestGenerator(path) {
    return function() {
      if(arguments.length === 1) {
        request(rootURL + path + '/', arguments[0]);
      } else {
        request(rootURL + path + '/?page=' + arguments[0], arguments[1]);
      }
    };
  }

  return {
    getResources:  getResources,
    getPerson:     singularRequestGenerator('people'),
    getPeople:     pluralRequestGenerator('people'),
    getFilm:       singularRequestGenerator('films'),
    getFilms:      pluralRequestGenerator('films'),
    getPlanet:     singularRequestGenerator('planets'),
    getPlanets:    pluralRequestGenerator('planets'),
    getSpecies:    singularRequestGenerator('species'),
    getAllSpecies: pluralRequestGenerator('species'),
    getStarship:   singularRequestGenerator('starships'),
    getStarships:  pluralRequestGenerator('starships'),
    getVehicle:    singularRequestGenerator('vehicles'),
    getVehicles:   pluralRequestGenerator('vehicles')
  };

}();


export default swapiModule;
/* const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}*/

const url = 'http://swapi.co/api';

/*class swapiModule6 extends Component {
    constructor() {
        super();
        this.state = {
            categoryData: null
        }
    }
    componentDidMount() {
        this.updateCategory(this.props.category);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.category !== this.props.category) {
            // simulando carga de datos 
            this.setState({
                categoryData: null
            })
            this.updateCategory(nextProps.category);
        }
    }
    updateCategory = (category) => {
        const url_swapi = `${url}/${category}`;
        fetch(url_swapi).then(data => (data.json())
        ).then(category_data => {
            console.log(category_data);
            //console.log(forecastData);
            this.setState({category_data})
        })
    }
    renderForecastItemDays(category_Data) {
        return categoryData.map(category => (
            <CatogeryItem key= {`${category.weekDay}${category.hour}`} weekDay = {category.weekDay} hour = {category.hour} data = {category.data}>
            </ForecastItem>
        ))
        // return 'render items';
        return days.map(day => (<CategoryItem key={day} weekDay={day} hour = {10} data = {data}> </ForecastItem>))
            // <CategoryItem weekDay={'Miércoles'}> </CategoryItem> */
   /* }
    renderProgress = () => {
        return (<h3>Cargando resultados... </h3>)
    }
    render() {
        const { category } = this.props;
        const { category_data } = this.state;
        return (
            <div>
                <h2 className='categoryTitle'>Pronóstico entendido para {city} </h2>
                {category_data !== null ? this.renderForecastItemDays(category_data) : this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;*/