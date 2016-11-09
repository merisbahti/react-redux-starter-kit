function weeks (m) {
  const lastOfMonth = m.clone().endOf('month')
  const firstOfMonth = m.clone().startOf('month')
  const output = []
  var currentWeek = firstOfMonth.clone().day(0)
  var currentDay
  var endOfWeek

  while (currentWeek < lastOfMonth) {
    currentDay = currentWeek.clone().day(0)
    endOfWeek = currentWeek.clone().day(6)
    while (currentDay <= endOfWeek) {
      output.push(currentDay)
      currentDay = currentDay.clone().add(1, 'd')
    }
    currentWeek = currentWeek.add(7, 'd')
  }
  return output
}

module.exports = weeks
