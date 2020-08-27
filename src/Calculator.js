import React, { Component } from 'react';

class Calculator extends Component {
	// initial state
	constructor(props) {
		super();
		this.state = {
            num1: "",
            num2: ""
        };
	}

	setNum = (e, numName) => {
		this.setState({
			[numName]: e.target.value,
		});
	};

	compute = () => {
        console.log(this.state);
        var a = this.state.num1;
		var b = this.state.num2;
        var math_it = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '*': function (x, y) { return x * y },
            '/': function (x, y) { return x / y }
        }
        var result = math_it[this.state.operator](Number(a), Number(b))
		this.setState({
			result: result
		});
	};


	render() {
		return (
			<div className="container">
				<h1>Add with React!</h1>

				<div className="add">
					<input
						type="number"
						name="num1"
						placeholder="Enter your first number"
						value={this.state.num1}
						onChange={(e) => {
							this.setNum(e, 'num1');
						}}
					/>
                    <select onChange={(e) => {this.setState({operator: e.target.value})}}>
					<option value="+">+</option>
					<option value="-">-</option>
					<option value="*">*</option>
					<option value="/">/</option>
                    </select>
					<input
						type="number"
						name="num2"
						placeholder="Enter your Second number"
						value={this.state.num2}
						onChange={(e) => {
							this.setNum(e, 'num2');
						}}
					/>
					<button onClick={this.compute}>=</button>
					<h3>{this.state.result}</h3>
				</div>
			</div>
		);
	}
}

export default Calculator;
