import React, { Component } from 'react'

import { Data, Headers } from './config';



import ItemsTable from 'npm-pb-items-table'

import { generateId, getItemTemplate } from './helpers';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.data = Data;
    this.state.touched = false;
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  handleAddEvent = () => {
    let newItem, newId, newRow;
    let newData = this.state.data;

    const ServerAddCall = ms => {
      return new Promise(resolve => {
        setTimeout(() => {
          newItem = getItemTemplate(Data);
          newId = generateId();
          newRow = {
            ...newItem,
            id: newId,
          };
          newData.push(newRow);
          resolve('200');
        }, ms);
      });
    };

    const response = ServerAddCall(600);
    response.then(() => {

      this.setState({ data: newData });
      console.log("status 200 - Row Added")
    });
  };

  handleRowDelEvent = item => {
    const index = this.state.data.indexOf(item);
    let newData = this.state.data.splice();

    const ServerDelCall = ms => {
      return new Promise(resolve => {
        setTimeout(() => {
          newData = newData.splice(index, 1);

          resolve('200');
        }, ms);
      });
    };

    const response = ServerDelCall(600);
    response.then(() => {
      this.state.data.splice(index, 1);
      this.setState(newData);
      console.log("status 200 - Row Deleted")
    });
  };


  handleSaveEvent = dataToSave => {
    const ServerSaveCall = ms => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('200');
        }, ms);
      });
    };

    const response = ServerSaveCall(600);
    response
      .then(() => {
        this.setState({ data: dataToSave });
      })
      .then(() => {
        this.setState({ touched: true });
        console.log("status 200 - Data Saved")
      });
  };

  render() {
    const TableData = this.state.data;


    return (
      <ItemsTable
        data={TableData}
        headers={Headers}
        addRowEvent={this.handleAddEvent}
        delRowEvent={this.handleRowDelEvent}
        saveEvent={this.handleSaveEvent}

        BgColor={"#D8E6F3"}
      />
    );
  }
}
