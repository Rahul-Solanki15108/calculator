import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import CalculatorReducer from "./CalculatorReducer";

const rootReducer = combineReducers({
    form : formReducer,
    calc : CalculatorReducer
});

export default rootReducer; 