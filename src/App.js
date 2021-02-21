import React from 'react';
import Posts from './components/posts'

export default class App extends React.Component {
  state = {
      posts: [
        {id: 'xcv44', name: `Home1`},
        {id: 'xcv45', name: 'Home2'},
        {id: 'xcv46', name: 'Home3'}
      ]
  };

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }

  
  render() {
      return (
        <div className="App">
            {<Posts posts={this.state.posts} removePost={this.removePost}/>}
        </div>
      );
  }
}