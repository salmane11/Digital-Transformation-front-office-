import { GET_SAMPLE, SAMPLE_ERROR, GET_QUESTIONS } from '../types'

export const getQuestions = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_QUESTIONS,
      payload: ['Question 1', 'Question 2', 'Question 3', 'Question 4'],
    })
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: 'error message',
    })
  }
}
