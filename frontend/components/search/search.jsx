import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            searchValue: ""
        };
        this.fetchSearched = this.fetchSearched.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    fetchSearched(e) {
        this.setState({searchValue: e.currentTarget.value});
        e.currentTarget.value === "" ? this.props.clearSearchBooks() : this.props.searchBooks(e.currentTarget.value);
    }

    clearInput() {
        this.setState({searchValue: ""});
        this.props.clearSearchBooks();
    }

    showDropdown() {
        this.setState({ hidden: false });
    }

    hideDropdown() {
        let blurTimer = setTimeout(() => {
            this.setState({ hidden: true });
            }, 200);
    };

    searchDropdown() {
        return (
            <div id="search-dropdown" className={this.state.hidden === true ? `search-dropdown-hidden` : `search-dropdown-visible`}>
                <ul className="search-dropdown-list">
                    {Object.keys(this.props.searchedBooks).map(id => this.props.searchedBooks[id]).map (book => {
                        return (
                            <Link key={book.id} to={`/books/${book.id}`} onClick={this.clearInput}>
                                <li key={book.id} className="search-dropdown-item">
                                    <div className="search-dropdown-book-cover"><img src={book.coverUrl} /></div>
                                    <div className="search-dropdown-title-author">
                                        <div className="search-dropdown-book-title">{book.title}</div>
                                        <div className="search-dropdown-book-author">by {book.author}</div>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }

    render() {
        let searchDropdown
        if (Object.keys(this.props.searchedBooks).length > 0 && this.state.hidden === false) {
            searchDropdown = this.searchDropdown();
        } else {
            searchDropdown = <div></div>
        }
        
        return (
            <div className="search-area">
                <input type="text" 
                className="navbar-search-bar" 
                placeholder="Search books" 
                value={this.state.searchValue}
                onChange={this.fetchSearched}
                onFocus={this.showDropdown}
                onBlur={this.hideDropdown}
                ></input>
                {searchDropdown}
            </div>
        );
    }
}

export default withRouter(Search);