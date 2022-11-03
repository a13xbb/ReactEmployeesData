import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data, onDelete, onToggleProp}) {

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

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;