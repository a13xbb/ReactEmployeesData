import './employees-add-form.css';
import React from 'react';

class EmployeesAddForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    render() {
        const {name, salary} = this.state;
        let {onAdd} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => onAdd(e, name, salary)}>
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        placeholder="Имя"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        placeholder="З/П в $"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;