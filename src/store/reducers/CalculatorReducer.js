import React from 'react'

const intialState = {
  number: '',
  answer: ''
}
export default function CalculatorReducer(state = intialState, action) {

  let { type, payload } = action;

  switch (type) {
    case 'LOAD_BUTTONS':
    return {
      ...state,
      ...payload,
      number: state.number.concat(action.payload)
    }

    case 'LOAD_CLEAR':
      return {
        ...state,
        ...payload,
        number: '',
        answer: ''
      }

    case 'LOAD_BACKSPACE':
      return {
        ...state,
        ...payload,
        number: (state.number.slice(0, -1)),
        answer: ''
      }

    case 'LOAD_ANS':
      try {
        return {
          ...state,
          ...payload,
          number: eval(state.number).toString()
        }
      } catch (error) {
        return {
          ...state,
          ...payload,
          number: 'Error'
        }
      }

    default:
      return state
  }
}
