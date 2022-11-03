import './employees-list-item.css'

function EmployeesListItem(props) {

    const {name, salary, increase, liked, onDelete, onToggleProp} = props;

    let classList = "list-group-item d-flex justify-content-between";
    if (increase) {
        classList += " increase";
    }
    if (liked) {
        classList += " like"
    }

    return (
        <li className={classList}>
            <span className="list-group-item-label"
                  data-toggle="liked"
                  onClick={onToggleProp}>{name}</span>
            <input type="text" className="list-group-item-input"  defaultValue={salary + '$'} />
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    data-toggle="increase"
                    onClick={onToggleProp} 
                    type="button" 
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;