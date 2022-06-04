import { combineReducers } from 'redux'
import questionReducer from './questionReducer'
import responsesReducer from './responsesReducer'
import digitalResponsesReducer from './digitalResponsesReducer'
import maturityLevelsReducer from './maturityLevelsReducer'

export default combineReducers({
  questions: questionReducer,
  responses: responsesReducer,
  digitalResponses: digitalResponsesReducer,
  maturityLevels: maturityLevelsReducer,
})
