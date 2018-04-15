import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions'

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.newPost) {
      console.log("nextprops1")
      this.props.posts.unshift(nextProps.newPost);
    }
    /*if(nextProps.deletedPost) {
      console.log("nextprops")
      console.log(this.props.posts)
      var updated_posts=this.props.posts.filter(post=>{
        if (post.id !== 2) {
            return true;
        }
        else {
            return false;
        }        
    })
    this.props.posts = updated_posts;
    console.log(updated_posts)
    }*/
  }

  onClick(deleted_post){
    console.log("ID: "+ deleted_post.id)
    console.log(this.props.posts)
    this.props.deletePost(deleted_post.id);
  }

  render() {
    const postItems = this.props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button type="submit" onClick={this.onClick.bind(this,post)}>Delete</button>
        </div> 
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems} 
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);