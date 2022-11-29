import React, { Component } from 'react';

class Lottery extends Component {
    static defaultProps = {
        title: 'lotto',
        maxBalls: 6,
        maxNum: 40
    };
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    };
    generate() {
        //
    };
    handleClick() {
        this.generate();
    };
    render() {
        return (
            <section className='lottery'>
            <h1>{this.props.title}</h1>
            <div></div>
            <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    };
};

export default Lottery;