import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="center">
        <h1>Calculator</h1>
        <div className="Container">
          <div className="display-name"><p>0</p></div>
          <div className="row-1">
            <div className="box"><p>AC</p></div>
            <div className="box"><p>+/-</p></div>
            <div className="box"><p>%</p></div>
            <div className="box orange"><p>+</p></div>
          </div>
          <div className="row-1">
            <div className="box"><p>7</p></div>
            <div className="box"><p>8</p></div>
            <div className="box"><p>9</p></div>
            <div className="box orange"><p>*</p></div>
          </div>
          <div className="row-1">
            <div className="box"><p>4</p></div>
            <div className="box"><p>5</p></div>
            <div className="box"><p>6</p></div>
            <div className="box orange"><p>-</p></div>
          </div>
          <div className="row-1">
            <div className="box"><p>1</p></div>
            <div className="box"><p>2</p></div>
            <div className="box"><p>3</p></div>
            <div className="box orange"><p>+</p></div>
          </div>
          <div className="row-1">
            <div className="box-50"><p>0</p></div>
            <div className="box"><p>.</p></div>
            <div className="box orange"><p>=</p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;