import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.state.tweets = this.state.tweets.concat(this.props.newTweets);
  }
  
  shouldComponentUpdate(nextProps) {
    return (nextProps.newTweets.length > 0)
  }
  
  componentWillReceiveProps(nextProps) {
    this.state.tweets = nextProps.newTweets.concat(this.state.tweets);
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;