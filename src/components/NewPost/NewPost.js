import React, {Component} from 'react';
import './NewPost.css';
class NewPost extends Component {
  render () {
    return (
      <div className='NewPost'>
        <h1>Add a Post</h1>
        <p>Title</p>
        <input type='text'></input>
        <p>Content</p>
        <textarea type='text'></textarea>
        <p>Author</p>
        <select>
          <option>Max</option>
          <option>Min</option>
        </select>
        <div>
          <button>Add Post</button>
        </div>
      </div>
    )
  }
}
export default NewPost;
