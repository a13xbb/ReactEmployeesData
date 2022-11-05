import './app-filter.css'
import React from 'react';

function AppFilter(props) {
    
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'liked', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
    ]

    const {onUpdateFilter, filter} = props;

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light";
        return (
            <button className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => onUpdateFilter(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );

}

export default AppFilter;