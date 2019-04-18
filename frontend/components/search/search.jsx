import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.hidden = true;
        this.fetchSearched = this.fetchSearched.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    fetchSearched(e) {
        if (e.currentTarget.value !== "") {
            debugger
            this.props.searchBooks(e.currentTarget.value);
        }
    }

    showDropdown() {
        this.setState({ hidden: true });
    }

    hideDropdown() {
        this.setState({ hidden: false });
    }

    searchDropdown() {
        return (
            <div id="search-dropdown" className={this.hidden === true ? `search-dropdown-hidden` : `search-dropdown-visible`}>
                <ul className="search-dropdown-list">
                    {Object.keys(this.props.searchedBooks).map(id => this.props.searchedBooks[id]).map (book => {
                        return (
                            <Link key={book.id} to={`/books/${book.id}`}>
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
        if (Object.keys(this.props.searchedBooks).length > 0) {
            searchDropdown = this.searchDropdown();
        } else {
            searchDropdown = <div></div>
        }
        
        return (
            <div className="search-area">
                <input type="text" 
                className="navbar-search-bar" 
                placeholder="Search books" 
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