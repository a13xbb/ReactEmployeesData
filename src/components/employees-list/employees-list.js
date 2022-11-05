import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';
import styled from 'styled-components'

function EmployeesList({data, onDelete, onToggleProp, isEmpty}) {

    const NothingFound = styled.div`
        margin-top: 30px;
        padding: 15px 20px;
        border: solid 1px red;
        border-radius: 5px;
        span {
            line-height: 35px;
            font-size: 20px;
            cursor: pointer;
            min-width: 550px;
        }
    `

    const elements = data.map(item => {
        const {id, ...itemProps} = item; 
        return (
            <EmployeesListItem 
                key={id}
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}/>
        );
    })

    if (isEmpty) {
        return (
            <NothingFound>
                <span>No Employees Found</span>
            </NothingFound>
        )
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;