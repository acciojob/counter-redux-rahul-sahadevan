import { createStore, combineReducers} from "redux"; 
import counterReducer from "./reducer/counterReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
})

const store = createStore(rootReducer)

export default store;