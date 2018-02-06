import React, { Component } from 'react';
import axios from 'axios';
import FolderTree from 'react-folder-tree';

var files = {};

class DataTree extends Component {
  constructor(props) {
    super(props);
    this.state = {data: { id: 1, filename: 'Root', children: null }};
  }

  componentDidMount() {
    const self = this;
    axios.get(this.props.url).then((d) => {
      self.setState({ data: d.data });
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <FolderTree data={this.state.data} />
      </div>
    );
  }
}

export default DataTree;
