import { combineReducers } from 'redux'
import questionReducer from './questionReducer'
import responsesReducer from './responsesReducer'

export default combineReducers({
  questions: questionReducer,
  responses: responsesReducer,
})
