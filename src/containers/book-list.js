/**
 * Created by kristiNewMac on 2018/01/14.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';


// A container is react-redux' empowered component; it has the functionality to use redux' state
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}
// whatever is returned will show up as props inside BookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned from this function, will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote booklist from Component to Container - it needs to know about the dispatch
// method: selectBooks. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);