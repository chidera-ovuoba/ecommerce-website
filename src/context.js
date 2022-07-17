import React,{useContext,useState,useEffect,useReducer} from "react";
import reducer from './reducer';
const appContext = React.createContext();
const url = 'https://course-api.com/javascript-store-products';
const initialState = {
    ProductsData: [],
    sliderIndex:0
    
}
function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
        const [loading, setLoading] = useState(true);
    const [sliderIndex, setSliderIndex] = useState(0);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
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
    }, [loading])
    
    
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
   

    

    
   
   
    return <appContext.Provider value={{...state,loading}}>
    {children}
    </appContext.Provider>
}
export default AppProvider;

export const useGlobalContext = () => {
    return useContext(appContext);
}