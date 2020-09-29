import React, { Component } from "react";

export default class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initialNum: 1,
			isSeven: false,
		};

		// Привяжем this ко вновь созданным экземплярам класса
		this.changeNum = this.changeNum.bind(this);
	}
	changeNum() {
		// Зададим случайное число от 0 до this.props.max = 13
		const randNum = Math.floor(Math.random() * this.props.max) + 1;

		// Зададим получившееся случайное значение для this.state.initialNum
		this.setState({ initialNum: randNum });

		// Проверим, если выпало 7. Если 7, то зададим this.state.isSeven = true
		if (randNum === 7) {
			this.setState({ isSeven: true });
		}
	}

	render() {
		// Проверим, выпало ли 7. Если да, то закончим игру.
		const msg = this.state.isSeven ? (
			<h1>Congrats! You win!</h1>
		) : (
			<button onClick={this.changeNum}>Ghange it!</button>
		);
		return (
			<div>
				<h1>Your number is {this.state.initialNum}</h1>
				{msg}
			</div>
		);
	}
}
