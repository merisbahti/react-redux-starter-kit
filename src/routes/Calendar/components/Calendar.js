import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import moment from 'moment'

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.props.fetchCalendarEntries()
  }

  splitIntoWeeks (entries) {
    const chunkSize = 7
    const groups = entries.map(function (e, i) {
      return i % chunkSize === 0 ? entries.slice(i, i + chunkSize) : null
    }).filter(function (e) { return e })
    return groups
  }

  render () {
    return (
      <div>
        <p>
          <Button onClick={this.props.fetchCalendarEntries}>
          ppdate
          </Button>
        </p>
        <p>
          loading is: {this.props.loading ? 'true' : 'false'}
        </p>
        entries are
        {this.splitIntoWeeks(this.props.entries).map(
          (week, i) => {
            return <Row key={i}>
              {week.map(
                (x, i) => {
                  return <Col md={2} style={{width: '' + 1 / 7 * 100 + '%'}} key={x.date}>
                    <Row>
                      <h1>
                        <Col md={6} mdOffset={6}>
                          { moment(x.date).date() }
                        </Col>
                      </h1>
                    </Row>
                    <Row style={{marginTop: 20}}>
                      { x.startHour}  to { x.endHour}
                    </Row>
                  </Col>
                })
              }
            </Row>
          })
        }
      </div>
    )
  }

}

Calendar.propTypes = {}

export default Calendar
