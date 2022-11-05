import './app.css';
import React from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John B.", salary: 2000, increase: false, liked: false, id: 1},
                {name: "Vincent M.", salary: 3000, increase: false, liked: false, id: 2},
                {name: "Tommy G.", salary: 5000, increase: false, liked: false, id: 3},
            ],
            searchTerm: '',
            filterTerm: 'all',
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                // eslint-disable-next-line eqeqeq
                data: data.filter((item) => item.id != id)
                // data: data.filter((item) => item.id != id).map((item, i) => item.id = i + 1)
            }
        })
    }

    addItem = (event, name, salary) => {
        try {
            event.preventDefault();
            if (!name || !salary) {
                // eslint-disable-next-line no-throw-literal
                throw 'AN ERROR OCCURED: [NOT ENOUGH INFO TO ADD EMPLOYEE]';
            }
            console.log('added new employee!' + name + salary);
            this.setState(({data}) => {
                const newItem = {
                    name: name,
                    salary: salary,
                    increase: false,
                    liked: false,
                    id: this.maxId++
                }
                let newData = [...data, newItem];
                return {
                    data: newData
                }
            })
        }
        catch(error) {
            console.error(error);
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmployee = (items, searchTerm) => {
        if (searchTerm.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        })
    }

    onUpdateSearch = (searchTerm) => {
        this.setState({searchTerm: searchTerm})
    }

    filterEmployee = (items, filterTerm) => {
        try {
            switch (filterTerm) {
                case "all":
                    return items;
                case "liked":
                    return items.filter(item => item.liked);
                case "salary":
                    return items.filter(item => item.salary > 1000);
                default:
                    // eslint-disable-next-line no-throw-literal
                    throw "UNEXPECTED FILTER VALUE";
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({
            filterTerm: filter,
        })
    }

    render() {
        const {data, searchTerm, filterTerm} = this.state;
        const employeesCnt = data.length;
        const increasedEmployeesCnt = data.filter(item => item.increase).length;
        let visibleData = this.filterEmployee(this.searchEmployee(data, searchTerm), filterTerm);
        return (
            <div className="app">
                <AppInfo 
                    employeesCnt={employeesCnt}
                    increasedEmployeesCnt={increasedEmployeesCnt}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filterTerm}
                        onUpdateFilter={this.onUpdateFilter} />
                </div>
                <EmployeesList
                    isEmpty={!Boolean(visibleData.length)}
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;