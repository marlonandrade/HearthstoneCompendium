'use strict';

var React = require('react-native');
var {
  ListView,
  StyleSheet,
  View,
} = React;

var Card = require('./Card');

class CardList extends React.Component {

  constructor(props: {}) {
    super(props);

    var dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource: dataSource
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      dataSource: this.state.dataSource.cloneWithRows(nextProps.cards)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderCard}
        renderSeparator={this._renderSeparator}
      />
    );
  }

  _renderCard(card) {
    return (
      <Card card={card} />
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        style={styles.separator}
        key={rowID}
      ></View>
    );
  }
}

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'black'
  }
});

module.exports = CardList;
