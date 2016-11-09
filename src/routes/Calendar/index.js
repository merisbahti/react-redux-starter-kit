import { injectReducer } from '../../store/reducers'
import { fetchCalendarEntries } from './modules/calendar'
export default (store) => ({
  path: 'calendar',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      console.log('require.ensure cb called')
      const Calendar = require('./containers/CalendarContainer').default
      const reducer = require('./modules/calendar').default
      injectReducer(store, { key: 'calendar', reducer })
      cb(null, Calendar)
    }, 'calendar')
  }
})
