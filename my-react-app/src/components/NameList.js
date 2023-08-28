import React from 'react'
import PersonListUI from './PersonListUI'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Naveen',
            age: 23
        },
        {
            id: 2,
            name: 'Mugunthan',
            age: 28
        },
        {
            id: 3,
            name: 'Prabu',
            age: 20
        },
        {
            id: 4,
            name: 'Nagul',
            age: 23
        }
    ]

    var personList = persons.map(x => <PersonListUI perons={x}></PersonListUI>)

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
