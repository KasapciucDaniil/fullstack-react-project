import {HIDE_ALERT, SHOW_ALERT} from '../types'

export const alertReducer = (state, action) => {

  switch (action.type) {
    case SHOW_ALERT:
      // console.log(action)
      return {
        ...state,
        visible: true,
        text: action.payload.text,
        type: action.payload.type
      }
    case HIDE_ALERT:
      console.log(action)
      return {
        ...state,
        visible: false
      }
    default:
      return state
  } 
}