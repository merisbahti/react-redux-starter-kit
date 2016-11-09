/* globals fetch */
import moment from 'moment'
// ------------------------------------
// Constants
// ------------------------------------

export const GET_CALENDAR_ENTRIES = 'GET_CALENDAR_ENTRIES'
export const RECIEVE_CALENDAR_ENTRIES = 'RECIEVE_CALENDAR_ENTRIES'

// ------------------------------------
// Actions
// ------------------------------------

export function getCalendarEntries (value = moment()) {
  return {
    type: GET_CALENDAR_ENTRIES,
    payload: value
  }
}

export function recieveCalendarEntries (entries) {
  return {
    type: RECIEVE_CALENDAR_ENTRIES,
    payload: entries
  }
}

export const fetchCalendarEntries = (date) => {
  return (dispatch) => {
    dispatch(getCalendarEntries(date))

    return fetch('/getCal')
      .then(data => data.json())
      .then(text => dispatch(recieveCalendarEntries(text)))
  }
}

export const actions = {
  fetchCalendarEntries,
  getCalendarEntries
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [GET_CALENDAR_ENTRIES]: (state, action) => {
    return {...state, loading: true}
  },
  [RECIEVE_CALENDAR_ENTRIES]: (state, action) => {
    return {...state, loading: false, entries: action.payload}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {loading: false, entries: []}
export default function calendarReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
