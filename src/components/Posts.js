import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {



componentWillMount() {
  console.log('4. Post.js - componentWillMount begins.')
  this.props.fetchPosts();
  console.log('8. Posts.js - after fetch' + JSON.stringify(this.props) );
}

componentWillReceiveProps(nextProps) {
  if(nextProps.newPost) {
    this.props.posts.unshift(nextProps.newPost);
  }
}

  render() {

    console.log('8. Posts.js - render begins + this.props '+ JSON.stringify(this.props));

    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>

      </div>
    ));

    return (
      <div>
        <h1> Posts </h1>
        { postItems }
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}


const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
console.log('0. mapStateToProps');

export default connect(mapStateToProps, { fetchPosts })(Posts);