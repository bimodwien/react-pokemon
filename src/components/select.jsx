import React from 'react'

const Select = () => {
  return (
    <select onChange={handleSelect} defaultValue={""}>
    <option value="" disabled>
      Select
    </option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
  </select>
  )
}

export default Select