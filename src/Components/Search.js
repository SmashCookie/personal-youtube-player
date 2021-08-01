import React from 'react';
import './Search.css';

class Search extends React.Component{
    state={title:""}

    // Sets the state of the title everytime the value of the input box changes.
    onSearchChanged = event => {
        const _title = event.target.value;
        this.setState({title:_title});
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.title);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className='form-controls'>
                        <label>Search Youtube: </label>
                        <input 
                            value={this.state.title}
                            onChange={this.onSearchChanged} 
                            id='video-search' 
                            type="text" 
                            placeholder='Enter your text here'>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;