import React from 'react'
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'

class DatePicker extends React.Component {
  /*
    constructor (props) {
    super(props)
  } */

  render () {
    return (
      <ButtonGroup>
        <Button>Previous</Button>
        <DropdownButton title='Month' id='bg-nested-dropdown'>
          <MenuItem eventKey='1'>Dropdown link</MenuItem>
          <MenuItem eventKey='2'>Dropdown link</MenuItem>
        </DropdownButton>
        <Button>Next</Button>
      </ButtonGroup>
    )
  }

}

DatePicker.propTypes = {}

export default DatePicker
