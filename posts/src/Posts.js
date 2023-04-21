import React from 'react';
import { Box } from '@mui/material';

let PostAPI = `https://dummyjson.com/posts`;

class Post extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    fetch(PostAPI)
      .then((res) => res.json())
      .then(({ posts }) => {
        this.setState({ posts });
      });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <Box>
          <h1
            style={{ textAlign: 'center', color: '#2272E5', fontSize: '42px' }}
          >
            POST TITLE
          </h1>
          <ul>
            {this.state.posts.map((post) => {
              return (
                <li className="li">
                  <span>Title:</span> {post.title}
                  <hr></hr>
                  <p>{post.body}</p>
                </li>
              );
            })}
          </ul>
        </Box>
      </div>
    );
  }
}
export default Post;
