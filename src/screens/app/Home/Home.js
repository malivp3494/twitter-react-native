import React, { Component } from 'react';
import { Root, Tweet, HomeHeader } from '../../../components';
import { gray, blue } from '../../../components/colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import faker from 'faker';
import { FlatList } from 'react-native';

const TweetTypes = ['reply', 'retweet', 'normal'];

// yeah generating here cause, no time for graphql yet.. fuck Im lazy
const createTweets = async n => {
  return await Array.from({ length: n }).map(each => {
    return {
      id: faker.random.uuid(),
      avatar: faker.internet.avatar(),
      name: faker.internet.userName(),
      username: '@' + faker.internet.userName(),
      type: TweetTypes.random(),
      text: faker.lorem.sentences(6).substring(0, [85, 279, 29, 234].random()),
      replies: [100, 1000, 123004, 23404, 23, 2, 23].random(),
      likes: [100, 1000, 123004, 23404, 23, 2, 23].random(),
      retweets: [100, 1000, 123004, 23404, 23, 2, 23].random(),
      createdAt: faker.date.recent(),
    };
  });
};

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      offset: 0,
      maxOffset: 60,
      currentY: 0,
    };
  }

  async componentDidMount() {
    let data = await createTweets(5);
    this.setState({ data });
  }

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

  handleScroll = e => {
    let y = e.nativeEvent.contentOffset.y;
    //alert(y);
    if (y > this.state.currentY) {
      this.setState({ offset: 60 });
    } else {
      this.setState({ offest: 0 });
    }
  };
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Tweet data={item} />}
        />
      </Root>
    );
  }
}

export default Lists;
