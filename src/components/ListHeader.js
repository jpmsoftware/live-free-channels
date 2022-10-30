function ListHeader({ channels }) {
  function loadRegions() {
    return channels.map((channel) => (
      <option key={channel.id}>{channel.country}</option>
    ))
  }

  return (
    <div className="channels-list-header">
      <h2>Explore all channels</h2>

      <div className="filter-options">
        <div>
          <label>Region: </label>
          <select name="region" id="region" className="dropdown-region">
            {
              loadRegions()
            }
          </select>
        </div>
      </div>
    </div>
  )
}

export default ListHeader;