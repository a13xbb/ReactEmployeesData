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

    onAdd = (e, name, salary) => {
        this.props.onAdd(e, name, salary);
        let inputs = e.target.querySelectorAll('input');
        for (let input of inputs) {
            if (!input.value) {
                input.classList.add('bc-red');
                setTimeout(() => input.classList.remove('bc-red'), 4000)
            }
        }
        if (name && salary) {
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => this.onAdd(e, name, salary)}>
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