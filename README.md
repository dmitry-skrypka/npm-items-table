# npm-pb-items-table

> Simple table to draw data from array.

[![NPM](https://img.shields.io/npm/v/npm-pb-items-table.svg)](https://www.npmjs.com/package/npm-pb-items-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save npm-pb-items-table
```

## Features

- Can handle objects with any length.
- Configurable background color.
- Ability to add new rows.
- Ability to remove rows.
- Ability to edit data in cells.
- Configurable headers.
- Ability to handle custom Events.

## Example
[**Example with "server" emulation  ▸**](https://dmitry-skrypka.github.io/npm-pb-items-table/)
 
## Basic Usage

#####  Just send data inside

```jsx
import React, { Component } from 'react'

import ItemsTaable from 'npm-pb-items-table'
const Data = {[
                { name: 'Jack', age: 28, address: 'some where', id:1 },
                { name: 'Rose', age: 36, address: 'some where', id:2 },
              ];}
const Headers = ['Name',  'age', 'address', 'anyname', 'id'];
class Example extends Component {
  render () {
    return (
      <ItemsTaable data={Data} headers={Headers} />
    )
  }
}
```

## Api

### Props
<table >
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>Array</td>
      <td>some random data</td>
      <td>Data to render in cells</td>
    </tr>
    <tr>
          <td>headers</td>
          <td>Array</td>
          <td>some random headers</td>
          <td>Headers</td>
        </tr>
        <tr>
         <td>addRowEvent</td>
         <td>Function</td>
                  <td>function that adds a new row</td>
                  <td>Can handle custom event</td>
                </tr>
        <tr>
              <td>delRowEvent</td>
             <td>Function</td>
                <td>function that removes a row</td>
              <td>Can handle custom event</td>
                        </tr>
        <tr>
                      <td>saveEvent</td>
                     <td>Function</td>
                        <td>function that saves edited data in cells</td>
                      <td>Can handle custom event</td>
                                </tr>
             <tr>
                                  <td>BgColor</td>
                                 <td>string</td>
                                    <td> "white" </td>
                                  <td>Prop to change background: "color"</td>
               </tr>                    
                   </tbody>             
 </table>

## License

###### MIT © [dmitry-skrypka](https://github.com/dmitry-skrypka)




