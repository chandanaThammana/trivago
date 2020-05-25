import React, { Component } from 'react';
class Cart extends Component {
state = {
    data:[ 

    ],
        counter: 0
      }
      componentDidMount() {
        fetch('https://jsonblob.com/api/20b54850-9513-11ea-9b86-2f4e2abf7e53')
        .then(response => response.json())
        .then(json => this.setState({ data: [...json] 
                    })
                );
            }
        
            incrementCounter(index) {

                let { data } = this.state
        
                data[index].d++
        
                this.setState({ data: [...data] })
        
            }
        
            decrementCounter(index) {
        
                let { data } = this.state
        
                data[index].d--
        
                this.setState({ data: [...data] })
        
            }
         deleteHandler(drow) {
        const data = [...this.state.data]
        data.splice(drow, 1);
        this.setState({ data:data })
    }
    render(){
        const {data,counter}=this.state;
        return(
            <div className="row">
                <div className="col-8 shadow ml-5 mt-5" >
                    <h4 className="pt-4">My Cart<hr></hr> <br></br></h4>
                    <div >

                        {
                            data.map(({ a, b, c,d}, index) =>
                                <div className="row">
                                    <div className="col-5 m-2">
                                        <img src={a} width="200px" height="240px" />
                                        <div>{!!d && (<button onClick={() => this.decrementCounter(index)} className="btn-sm rounded-0 btn-success m-2">-</button>
          )}<span className="badge badge-info rounded-0">{d}</span>
          <button onClick={() => this.incrementCounter(index)} className="btn-sm rounded-0 btn-success m-2">+</button></div>

                                        </div>
                                    <div className="col-5">
                                        <p>{b}</p>
                                        <p>${c}</p>
                                        <button type="submit" onClick={() => this.deleteHandler(index)} className="btn btn-success">Remove</button>
                                    </div>
                                </div>
                )}
                </div>
        </div>
        <div className="col-3 shadow ml-4 mt-5 pt-4" style={{height:"230px"}}>
                    <h5>Price Details<hr /></h5>
                    <p>Price <span className="float-right"> ${data.reduce((acc, item) => acc + item.c, 0)}</span></p>
                    <p>Delivery Fee <span className="float-right text-success">Free</span><hr /></p>
                    <p><h5>Total Amount <span className="float-right"> ${data.reduce((acc, item) => acc + item.c, 0)}</span></h5></p>
                </div>
        </div>
        
        )
    }
}
export default Cart;