import { useContext,useState,useEffect,useReducer} from "react";
const appContext = React.createContext();
// https://fakestoreapi.com/products
function AppProvider({ children }) {

   
   
    return <appContext.Provider value={{}}>
    {children}
    </appContext.Provider>
}