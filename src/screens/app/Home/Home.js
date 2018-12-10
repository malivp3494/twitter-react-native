import React, { Component } from 'react';
import {
  FloatingButton as CreateTweetButton,
  Root,
  Tweet,
  HomeHeader,
  Menu,
  MenuItem,
} from '../../../components';
import { gray, blue } from '../../../components/colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import faker from 'faker';
import { FlatList, RefreshControl, Modal } from 'react-native';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const TweetTypes = ['reply', 'retweet', 'normal'];

// yeah generating here cause, no time for graphql yet.. fuck Im lazy
//also, the replace the menuIcon with avatar, once the user logs in, so,
//store user info in redux store? apollo-link-state?
const createTweets = async n => {
  return await Array.from({ length: n }).map(each => {
    return {
      id: faker.random.uuid(),
      avatar: faker.internet.avatar(),
      name: faker.internet.userName(),
      username: '@' + faker.internet.userName(),
      type: TweetTypes.random(),
      text: faker.lorem.sentences(6).substring(0, [85, 279, 29, 234].random()),
      replies: [100, 1000, 123004, 23404, 23, 2, 23]
        .random()
        .toString()
        .convertNumber(),
      likes: [100, 1000, 123004, 23404, 23, 2, 23]
        .random()
        .toString()
        .convertNumber(),
      retweets: [100, 1000, 123004, 23404, 23, 2, 23]
        .random()
        .toString()
        .convertNumber(),
      createdAt: distanceInWordsToNow(faker.date.recent()),
    };
  });
};

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: props => (
      <FAIcon name="home" size={26} color={props.focused ? blue : gray} />
    ),
    tabBarOptions: {
      activeTintColor: blue,
      style: {
        backgroundColor: blue,
        minHeight: 60,
      },
      showLabel: false,
      inactiveTintColor: gray,
      inactiveBackgroundColor: 'white',
      activeBackgroundColor: 'white',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      offset: 0,
      loading: false,
      maxOffset: 60,
      currentY: 0,
      showModal: false,
    };
    this.handleUsernamePress = this.handleUsernamePress.bind(this);
    this.handleOnRefresh = this.handleOnRefresh.bind(this);
    this.handleLikePress = this.handleLikePress.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.handleReplyPress = this.handleReplyPress.bind(this);
    this.handleRetweetPress = this.handleRetweetPress.bind(this);
    this.handleSharePress = this.handleSharePress.bind(this);
    this.handleCreateNewTweet = this.handleCreateNewTweet.bind(this);
  }

  async componentDidMount() {
    let data = await createTweets(24);
    this.setState({ data });
  }

  handleCreateNewTweet() {
    //navigate to create new tweet
  }

  handleScroll = e => {
    let y = e.nativeEvent.contentOffset.y;
    //alert(y);
    if (y > this.state.currentY) {
      this.setState({ offset: 60 });
    } else {
      this.setState({ offest: 0 });
    }
  };

  handleUsernamePress(username) {
    //navigate to Username's profile screen
    this.props.navigation.navigate('Profile', { username: username });
  }

  handleOnRefresh() {
    //fetch new tweets, apollo!
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  handleLikePress(id) {
    //mutate like
    //alert(id + ' liked');
  }

  handleRetweetPress(id) {
    //alert(id + ' retweeted');
    //mutate retweet
  }

  handleReplyPress(id) {
    //navigate to
    // create new tweet with replying to.. usernames
    this.props.navigation.navigate('CreateTweet', { parentTweetId: id });
  }

  handlePress(id) {
    //navigate to single tweet thread
    this.props.navigation.navigate('SingleThread', { tweetId: id });
  }

  handleSharePress(id) {
    //share, copy to clipboard etc?
  }

  render() {
    //this.state.data && alert(this.state.data[0].avatar);
    return (
      <Root>
        <HomeHeader
          title="Home"
          style={{
            position: 'absolute',
            elevation: 3,
            backgroundColor: 'white',
          }}
          onBackPress={() => this.props.navigation.openDrawer()}
        />
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          refreshControl={
            <RefreshControl
              colors={[blue]}
              onRefresh={this.handleOnRefresh}
              refreshing={this.state.loading}
            />
          }
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Tweet
              data={item}
              handleUsernamePress={this.handleUsernamePress}
              handlePress={this.handlePress}
              handleReplyPress={this.handleReplyPress}
              handleSharePress={this.handleSharePress}
              handleRetweetPress={this.handleRetweetPress}
              handleLikePress={this.handleLikePress}
            />
          )}
        />
        <CreateTweetButton handlePress={this.handleCreateNewTweet} />
      </Root>
    );
  }
}

export default Home;
