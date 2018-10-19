import React, { Component, Fragment } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types'
export const DefaultHeaders = ['ID', 'category', 'price', 'qty', 'Name'];
export const Headers = ['ID`s', 'category', 'price', 'qty', 'Name'];
export const DefaultData = [
  {
    id: 'no data',
  },
];
export const Data = [
  {
    id: 1,
    category: 'Sporting Goods',
    price: '49.99',
    qty: '12',
    name: 'football',


  },
  {
    id: 2,
    category: 'Sporting Goods',
    price: '9.99',
    qty: '15',
    name: 'baseball',
  },
  {
    id: 3,
    category: 'Sporting Goods',
    price: '29.99',
    qty: '14',
    name: 'basketball',
  },
  {
    id: 4,
    category: 'Electronics',
    price: '99.99',
    qty: '34',
    name: 'iPod Touch',
  },
  {
    id: 5,
    category: 'Electronics',
    price: '399.99',
    qty: '12',
    name: 'iPhone 5',
  },
  {
    id: 6,
    category: 'Electronics',
    price: '199.99',
    qty: '23',
    name: 'nexus 7',
  },
];

export function getItemTemplate(dataArray) {
  let itemTemplate = {};
  if (dataArray.length > 0 && Array.isArray(dataArray)) {
    const originItem = dataArray[0];

    for (let key in originItem) {
      itemTemplate = {
        ...itemTemplate,
        [key]: '',
      };
    }
  }
  return itemTemplate;
}

export function generateId() {
  return Math.floor(Math.random() * 999999);
}

const Header = styled.th`
  text-transform: uppercase;
`;

export class DrawRow extends React.Component {
  static propTypes = {
    row: PropTypes.object,
    handleRowDelEvent: PropTypes.func,
    handleCellDataChangeEvent: PropTypes.func,
    BgColor: PropTypes.string
  };
  handleRowDelEvent = () => {
    this.props.handleRowDelEvent(this.props.row);
  };

  handleDataChange = event => {
    this.props.handleCellDataChangeEvent(event);
  };
  render() {
    const row = this.props.row;
    const BgColor = this.props.BgColor;

    return (
      <Fragment>
        <tr>
          {Object.getOwnPropertyNames(row).map((key, index) => (
            <DrawCell
              id={row.id}
              name={key}
              value={row[key]}
              key={index}
              handleCellDataChangeEvent={this.handleDataChange}
              BgColor={BgColor}
            />
          ))}
          <td>
            <DrawButton onClick={this.handleRowDelEvent} value="X" />
          </td>
        </tr>
      </Fragment>
    );
  }
}
const Input = styled.input`
border-style: solid;
    border-width: 0 0 1px 0;
    border-color: white;
	background: ${props => (props.BgColor ? props.BgColor : 'white')};
	width: ${props => props.idWidth}
	outline: none;
	text-align: ${props => props.idAlign};
	
`;

export class DrawInput extends React.Component {
  static propTypes = {


    handleCellDataChangeEvent: PropTypes.func,
    BgColor: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any
  };
  handleInputEvent = event => {
    this.props.handleCellDataChangeEvent(event);
  };
  render() {
    const { id, name, type, value, BgColor } = this.props;

    return (
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={this.handleInputEvent}

        disabled={name === 'id' ? 'readonly' : null}
        BgColor={name === 'id' ? '#AFCDE7' : BgColor}
        idWidth={name === 'id' ? '60px' : 'unset'}
        idAlign={name === 'id' ? 'center' : 'left'}
      />
    );
  }
}

export class DrawHeaders extends React.Component {
  static propTypes = {


    headers: PropTypes.array

  };
  render() {
    const Headers = this.props.headers ? this.props.headers : DefaultHeaders;

    return Headers.map((name, index) => <Header key={index}>{name}</Header>);
  }
}

export class DrawCell extends React.Component {
  static propTypes = {


    handleCellDataChangeEvent: PropTypes.func,
    BgColor: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    value: PropTypes.any
  };
  render() {
    const { handleCellDataChangeEvent, id, name, value, BgColor } = this.props;
    return (
      <td>
        <DrawInput
          type={'text'}
          id={id}
          name={name}
          value={value}
          handleCellDataChangeEvent={handleCellDataChangeEvent}
          BgColor={BgColor}
        />
      </td>
    );
  }
}

const TableWrapper = styled.div`
  background: ${props => (props.BgColor ? 'white' : 'white')};

  text-align: -webkit-center;
  padding: 20px;
`;

const TableStyled = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  text-align: left;
  border-collapse: separate;
  border-spacing: 5px;
  background: ${props => (props.BgColor ? props.BgColor : 'white')};
  color: #656665;
`;
const Warning = styled.div`
  color: red;
  flex-direction: column;
  width: 30%;
`;

const TableHead = styled.thead`
  text-align: center;
`;
export class DrawButton extends React.Component {
  render() {
    const Button = styled.button`
      display: inline-block;
      font-size: 100%;
      font-weight: 700;
      color: #fff;
      text-shadow: #053852 -1px 1px, #053852 1px 1px, #053852 1px -1px,
        #053852 -1px -1px;
      text-decoration: none;
      user-select: none;
      padding: 5px;
      
      background: #053852
        repeating-linear-gradient(
          135deg,
          #053852,
          #053852 10px,
          #1679ad 10px,
          #1679ad 20px,
          #053852 20px
        );
      cursor: pointer;
    `;

    const { onClick, value } = this.props;

    return <Button onClick={onClick}>{value}</Button>;
  }
}

class ItemsTable extends Component {
  static propTypes = {


    addRowEvent: PropTypes.func,
    delRowEvent: PropTypes.func,
    saveEvent: PropTypes.func,
    BgColor: PropTypes.string,
    data: PropTypes.array,
    headers: PropTypes.array

  };


  constructor(props) {
    super(props);

    this.state = {};

    this.state.data = this.props.data;
    this.state.touched = this.props.touched;
  }

  handleAddRowEvent = () => {
    if (!this.state.touched && this.props.addRowEvent) {
      this.props.addRowEvent();
    } else if (!this.state.touched) {
      let newData = this.state.data;
      const newItem = getItemTemplate(this.state.data),
        newId = generateId(),
        newRow = {
          ...newItem,
          id: newId,
        };
      this.state.data.push(newRow);

      this.setState({ data: newData });
    } else console.log('need save');
  };

  handleRowDelEvent(item) {
    if (!this.state.touched && this.props.delRowEvent) {
      this.props.delRowEvent(item);
    } else if (!this.state.touched) {
      const index = this.state.data.indexOf(item);

      this.state.data.splice(index, 1);

      this.setState({ data: this.state.data });
    } else console.log('need save');
  }
  handleCellDataChangeEvent = event => {
    let item = {
      id: parseInt(event.target.id),
      name: event.target.name,
      value: event.target.value,
    };
    let items = this.state.data.slice();

    items.forEach(i => {
      for (let key in i) {
        if (key === item.name && i.id === item.id) {
          i[key] = item.value;
        }
      }
    });

    this.setState({ edited: items });

    if (!this.state.touched) {
      this.setState({ touched: true });
    }
  };
  handleSave = () => {
    this.setState({ data: this.state.edited });
    this.setState({ touched: false });
    if (this.props.saveEvent) {
      this.props.saveEvent(this.state.edited);
    }
  };
  render() {
    const tableData = this.state.data ? this.state.data : Data;
    const touched = this.state.touched;
    const BgColor = this.props.BgColor;

    return (
      <Fragment>
        <TableWrapper BgColor={BgColor}>
          <TableStyled BgColor={BgColor}>
            <TableHead>
              <tr>
                <DrawHeaders headers={this.props.headers} />
              </tr>
            </TableHead>

            <tbody>
              {tableData.map((item, index) => (
                <DrawRow
                  row={item}
                  key={index}
                  handleRowDelEvent={this.handleRowDelEvent.bind(this)}
                  handleCellDataChangeEvent={this.handleCellDataChangeEvent.bind(
                    this,
                  )}
                  BgColor={BgColor}
                />
              ))}
            </tbody>
          </TableStyled>

          <DrawButton
            onClick={this.handleAddRowEvent.bind(this)}
            value="ADD ROW"
          />
          <Warning
            style={{
              display: touched ? 'flex' : 'none',
            }}
          >
            Unsaved data in cells. Please save progress before adding/removing
            rows!
            <DrawButton onClick={this.handleSave} value="SAVE" />
          </Warning>
        </TableWrapper>
      </Fragment>
    );
  }
}

export default ItemsTable;
