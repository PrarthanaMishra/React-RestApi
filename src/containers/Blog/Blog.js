import React, {Component} from 'react';
import Post from '../../components/Post/Post';
import './Blog.css';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {
  render () {
    return (
      <div>
        <section className='Posts'>
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}
export default Blog
