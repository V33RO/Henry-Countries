import axios from "axios";

let paginado1 = 0;
let paginado2 = 0;
let paginado3 = 0;
let paginado4 = 0;
let random=1;


function Page_random(){
 return Math.ceil(Math.random((25-1+1))+1);
}

export const allcountries = (pagina)=>{
 
   //random=Page_random();
    //console.log("numero pagina  llama",pagina)
    //pagina=random;
      return function(dispatch){
            return axios
             .get(`http://localhost:3001/countries?page=${pagina}`)
             .then((res)=>{dispatch({ 
                  type:"ALL_COUNTRIES",
                  payload:{info:res.data,page:pagina}})
             })
             .catch((err) => {
               console.log("Falla servidor local", err);
            });
   };
};
export const next1 = (pagina) => {
   return function(dispatch){
      return axios
       .get(`http://localhost:3001/countries?page=${pagina}`)
       .then((res)=>{dispatch({ 
            type:"NEXT_COUNTRIES",
            payload:res.data})
       })
       .catch((err) => {
         console.log("Falla servidor local", err);
      });
};

};
export const next = (orden) => {
	switch (orden) {
		case "A_to_Z":
			if (paginado1 < 239) paginado1 += 10;
			return orderAZ("Ultim");
		case "Z_to_A":
			if (paginado2 < 239) paginado2 += 10;
			return orderZA("Ultim");
		case "poblacionAS":
			if (paginado3 < 239) paginado3 += 10;
			return poblacionAS("Ultim");
		case "poblacionDS":
			if (paginado4 < 239) paginado4 += 10;
            return poblacionDS("Ultim");
		default:
			random = Page_random();
			return allcountries();
	}
};

export const prev = (orden) => {
	switch (orden) {
		case "A_to_Z":
			if (paginado1 > 9) paginado1 -= 10;
			return orderAZ("Ultim");
		case "Z_to_A":
			if (paginado2 > 9) paginado2 -= 10;
			return orderZA("Ultim");
		case "poblacionAS":
			if (paginado3 > 9) paginado3 -= 10;
			return poblacionAS("Ultim");
		case "poblacionDS":
			if (paginado4 > 9) paginado4 -= 10;
            return poblacionDS("Ultim");
		default:
			random = Page_random();
			return allcountries();
	}
};
   export const orderAZ = (Norestart) => {
      if (!Norestart) paginado1 = 0;
      return function (dispatch) {
         return axios
            .get(`http://localhost:3001/countries/filtros?offset=${paginado1}`)
            .then((res) => {
               dispatch({ type: "ORDER_COUNTRIES_AZ", payload: res.data });
            })
            .catch((err) => {
               console.log("error", err);
            });
      };
   };
   export const orderZA = (Norestart) => {
      if (!Norestart) paginado2 = 0;
      return function (dispatch) {
         return axios
            .get(`http://localhost:3001/countries/filtros?order=DESC&offset=${paginado2}`)
            .then((res) => {
               dispatch({ type: "ORDER_COUNTRIES_ZA", payload: res.data });
            })
            .catch((err) => {
               console.log("error", err);
            });
      };
   };
   export const poblacionAS = (Norestart) => {
      if (!Norestart) paginado3 = 0;
      return function (dispatch) {
         return axios
            .get(`http://localhost:3001/countries/filtros?order=POPASC&offset=${paginado3}`)
            .then((res) => {
               dispatch({ type: "ORDER_POPULATION_AS", payload: res.data });
            })
            .catch((err) => {
               console.log("error", err);
            });
      };
   };
   
   export const poblacionDS = (Norestart) => {
      if (!Norestart) paginado4 = 0;
      return function (dispatch) {
         return axios
            .get(`http://localhost:3001/countries/filtros?order=POPDESC&offset=${paginado4}`)
            .then((res) => {
               dispatch({ type: "ORDER_POPULATION_DS", payload: res.data });
            })
            .catch((err) => {
               console.log("error", err);
            });
      };
   };

   export const getDetail = (idPais) => {
      return function (dispatch) {
         return axios
            .get(`http://localhost:3001/countries/${idPais}`)
               .then((res) => {				
               console.log('res data :', res.data);
               dispatch({ type: "GET_DATA_COUNTRY", payload: res.data });
            })
               .catch((err) => {
                   console.log("No pudo conectarse serv local", err);
               });
      }
   }
   export const buscador = (PaisBuscado) => {
      return function (dispatch) {
          return axios
              .get(`http://localhost:3001/countries?name=${PaisBuscado}`)
              .then( (res) => {
                  console.log('res :', res.data);
                  dispatch({ type: 'SEARCH_COUNTRY', payload: res.data });
              })
              .catch((err) => {
                  dispatch({ type: 'DONT_COUNTRY', payload: [{name:'ERROR 404: COUNTRY NOT FOUND'}] })
              });
      }
  };

  export const filtroContinente = (filtro) => {
   return function (dispatch) {
       return axios
           .get(`http://localhost:3001/countries/filtros?filtro=${filtro}`)
           .then( (res) => {
               console.log('res :', res.data);
               dispatch({ type: 'FILTRO_CONT', payload: res.data });
           })
           .catch((err) => {
               dispatch({ type: 'DONT_COUNTRY', payload: [{name:'ERROR 404: COUNTRY NOT FOUND'}] })
           });
   }
};
  
  export const filtradoContinente = (continente) => {
     return {
        type: 'FILTRADO_CONTINENTE', payload: continente
     }
  };