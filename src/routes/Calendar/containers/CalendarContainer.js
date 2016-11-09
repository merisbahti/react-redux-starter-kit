import { connect } from 'react-redux'
import { fetchCalendarEntries } from '../modules/calendar'

import Calendar from '../components/Calendar'

const mapDispatchToProps = {
  fetchCalendarEntries
}

const mapStateToProps = (state) => ({
  entries: state.calendar.entries,
  loading: state.calendar.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
