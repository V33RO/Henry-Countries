
let initialState={
    stateFilter:[{"idPais": "gch",
	"name": "Armenia",
	"image": "https://restcountries.eu/data/arm.svg",
	"continent": "Asia",
	"capital": "Yerevan",
	"subregion": "Western Asia",
	"area": "29743",
	"population": 2994400,}],
    stateOrder:'order',
    stateCountries:[{"idPais": "gch",
	"name": "Armenia",
	"image": "https://restcountries.eu/data/arm.svg",
	"continent": "Asia",
	"capital": "Yerevan",
	"subregion": "Western Asia",
	"area": "29743",
	"population": 2994400,}],
	page:1
}

const reducers  = (state = initialState, action) =>{
    switch (action.type) {
		case "ALL_COUNTRIES":
			return {
				...state,
				stateOrder:'aleatorio',
				stateCountries: action.payload.info,
				page:action.page
			};
			case "NEXT_COUNTRIES":
				return {
					...state,
					stateOrder:'aleatorio',
					stateCountries: action.payload,
				};
		case "GET_DATA_COUNTRY":
			return {
				...state,
				stateOrder: 'aleatorio',
				stateCountries: action.payload[0]
			};
		case "ORDER_COUNTRIES_AZ":
			return {
				...state,
				stateOrder: 'A_to_Z',
				stateCountries: action.payload
			};
		case "ORDER_COUNTRIES_ZA":
			return {
				...state,
				stateOrder: 'Z_to_A',
				stateCountries: action.payload
			};
		case "ORDER_POPULATION_AS":
			return {
				...state,
				stateOrder: 'poblacionAS',
				stateCountries: action.payload
			};
		case "ORDER_POPULATION_DS":
			return {
				...state,
				stateOrder: 'poblacionDS',
				stateCountries: action.payload
			};
		case "SEARCH_COUNTRY":
			return {
				...state,
				stateOrder: 'busqueda',
				stateFilter: action.payload
			};
		case "DONT_COUNTRY":
			return {
				...state,
				stateOrder: 'no_encontrado',
				stateCountries: action.payload
			}
		case "FILTRO_CONT":
			return {
				...state,
				stateOrder: 'busqueda',
				stateFilter: action.payload
			};
		case "FILTRADO_CONTINENTE":
			return{
				...state,
				stateOrder: '',
				stateCountries: state.stateCountries.filter( (pais) =>  pais.region === action.payload )
			};
		default:return state;
	}
};
  
export default reducers;