import React, { Component } from 'react';
import Tbody from "./Tbody";
class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: { ...this.props },
      formData: {
        start: '',
        end: ''
      },
      counter: 0
    }
  }
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }
  decrmentCounter() {
    // this.setState({counter: this.state.counter - 1})
    this.setState(prevState => {
      return {
        ...prevState,
        counter: prevState.counter - 1
      }
    })
  }
  updateTable() {
    this.setState({ tableData: { ...this.state.tableData, ...this.state.formData } })
  }
  handleInput(e) {
    //console.log(e.target.value);
    const { target: {
      value,
      id
    } } = e
    this.setState({ formData: { ...this.state.formData, [id]: value } })
  }
  render() {
   
    // console.log("hiii this is vineela");
    const { tableData: { start = 7, end = 5 }, formData, counter } = this.state;
    return (
      <div>
        <div className="jumbotron ">
          {!!counter && (<button onClick={() => this.decrmentCounter()} className="btn btn-success m-2">-</button>
          )}<span className="badge badge-info">{counter}</span>
          <button onClick={() => this.incrementCounter()} className="btn btn-success m-2">+</button>
        </div>
        <table class="table table-bordered bg-info">
          <thead>
            <tr>
              <th scope="col">start</th>
              <th scope="col">operation</th>
              <th scope="col">end</th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            {
              [...new Array(parseInt(end))].map((item, index) => (
                <Tbody start={start} index={index}></Tbody>
              ))
            }
          </tbody>
        </table>
        <br />
        <pre>
          {JSON.stringify(this.state, null, 4)}
        </pre>
        <form>
          <div className="form-group">
            <label for="start">Starts with</label>
            <input type="text" className="form-control" value={formData.start} onChange={(e) => this.handleInput(e)} id="start" />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="end">Ends</label>
            <input type="text" className="form-control" value={formData.end} onChange={(e) => this.handleInput(e)} id="end" />
          </div>
          <button type="submit" onClick={() => this.updateTable()} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}



export default Table;