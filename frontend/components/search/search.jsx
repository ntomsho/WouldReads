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
        this.fireSearch = null;
    }

    fetchSearched(e) {
        const target = e.currentTarget.value;
        this.setState({searchValue: e.currentTarget.value});
        clearTimeout(this.fireSearch);
        debugger
        this.fireSearch = setTimeout(() => {
            debugger
            target === "" ? this.props.clearSearchBooks() : this.props.searchBooks(target);
        }, 500);
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
                    {this.props.searchedBooks.items.map(book => {
                        return (
                            <Link key={book.id} to={`/books/${book.id}`} onClick={this.clearInput}>
                                <li key={book.id} className="search-dropdown-item">
                                    <div className="search-dropdown-book-cover">
                                        {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} /> : <p>Placeholder</p>}
                                    </div>
                                    <div className="search-dropdown-title-author">
                                        <div className="search-dropdown-book-title">
                                            {book.volumeInfo.title ? book.volumeInfo.title : "Untitled"}
                                        </div>
                                        <div className="search-dropdown-book-author">
                                            by {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Unknown"}
                                        </div>
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