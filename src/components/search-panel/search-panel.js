import './search-panel.css'
import React from 'react';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    onUpdateSearch = (event) => {
        const searchTerm = event.target.value;
        this.setState({searchTerm: searchTerm});
        this.props.onUpdateSearch(searchTerm)
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.searchTerm}
                    onChange={this.onUpdateSearch} />
        )
    }
}

export default SearchPanel;