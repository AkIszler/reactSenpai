import React from 'react'

function Lists() {

    let names = ["Mai Sakurajima", "Masayuki Hori", "Kakashi"]

    const showList = ()  => {
        for (let i = 0; i < names.length; i++) {
            return <li>{names}</li>
    }
  return (
    <div>
        <h2>This is a list</h2>
        <ul>
            <li>{names}</li>
        </ul>
    </div>
  )
}
}

export default Lists 