import React,{useContext,useState,useEffect,useReducer} from "react";
import reducer from './reducer';
const appContext = React.createContext();
const url = 'https://course-api.com/javascript-store-products';
const initialState = {
    ProductsData: [],
    sliderIndex: 0,
    cart:[],
    total: 0,
    id: 0,
    sliderButtonClicked: false,
    searchTerm: '',
    loginNumber: 1,
    userInfo: [localStorage.getItem(`login1`)],
    passwordError:false
}
function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
        const [loading, setLoading] = useState(true);
    const [sliderIndex, setSliderIndex] = useState(0);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            let data = await response.json();
            data = data.map((item) => {
               return {...item,amount:1} 
            })
            console.log(data);
            dispatch({ type: 'DISPLAY_DATA', payload: data });
            
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false);
      }
  }
    
    useEffect(() => {
        fetchData();  
        
    }, []);

    useEffect(() => {
        if (!loading) {
            const interval = setInterval(() => dispatch({ type: 'ANIMATION_SLIDER', payload: { checkNumber, number: 1 } }), 5000);
        
            return () => {
                clearInterval(interval)
            }
        }
    }, [loading, state.sliderButtonClicked]);
    
    useEffect(() => {
      dispatch({type:'GET_TOTAL'})  
    },[state.cart])
    
    function submitInfo(data) {
        const { name, email, password, confirm } = data;
        if (name && email && password && confirm) {
            if (password !== confirm) {
                state.passwordError = true;
                console.log(state.passwordError)
          return
            }
            
            state.loginNumber += 1;
            console.log(state.loginNumber)       
            return dispatch({ type: "SUBMIT_INFO", payload: data })     
        }
        
        
       return
    }


    function checkNumberSlider(number, number2, type) {
        if (type === 'increment') {
        if (number < 0) {
            return state.ProductsData.length - 1;
        }
        if (number >= (state.ProductsData.length - 1)) {
            return 0
        }
          return number += number2  
        }
        if (type === 'decrement') {
            if (number < 1) {
                return state.ProductsData.length - 1;
            }
         if (number >= (state.ProductsData.length - 1)) {
            return state.ProductsData.length - 2
        }
          return number -= number2  
        }
        
    }


    function checkNumber(number,number2){
        // console.log(number2);
         if (number < 0) {
           return state.ProductsData.length - 1;
           
        }
        if (number >= (state.ProductsData.length - 1)) {
            return 0;
        }
        return number += number2 ;
    }
    function addToCart(id) {
        dispatch({ type: 'ADD_CART', payload: id });
    }
    function changeAmount(id, value,type) {
        // console.log(id, value);
        dispatch({ type: 'CHANGE_AMOUNT', payload: { id, value,type } });
    }

    function removeItem(id) {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }
    
    function moveRight() {
      dispatch({ type: 'SLIDER_RIGHT', payload: { checkNumberSlider, number: 1 ,type:'increment'} })
    }
     function moveLeft() {
      dispatch({ type: 'SLIDER_LEFT', payload: { checkNumberSlider, number: 1 ,type:'decrement'} })
    }
     function sliderInput(index) {
         dispatch({ type: 'SLIDER_INPUT', payload: index });
  }
    
 function search(text) {
     dispatch({ type: 'SEARCHING', payload: text });    
}
   
   
    return <appContext.Provider value={{...state,loading,addToCart,changeAmount,removeItem,moveRight,moveLeft,sliderInput,search,submitInfo}}>
    {children}
    </appContext.Provider>
}
export default AppProvider;

export const useGlobalContext = () => {
    return useContext(appContext);
}