import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import React from 'react'
const teamsJSON = require('../../assets/teams-list.json');

const teamArray = [];

for (let i = 0; i < teamsJSON.competitions.length; i++) {
    for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
      let teamObj = {
        name: teamsJSON.competitions[i].teams[j].name,
        id: teamsJSON.competitions[i].teams[j].id
      }
        teamArray.push(teamObj);
    }
}

console.log(teamArray);

function TeamAutoComplete() {

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={teamArray}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default TeamAutoComplete;