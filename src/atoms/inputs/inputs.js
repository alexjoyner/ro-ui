import React, {Component} from 'react';

export class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            blurred: false
        }
    }
    handleInputChange(e){
        let value = e.target.value;
        this.setState({
            inputValue: value
        })
    }
    render(){
        let hasValue = (this.state.inputValue === '')? '' : ' has-value';
        let blurred = (this.state.blurred)? ' touched' : '';
        return (
            <div className={'ro-input-group'}>
                <input
                    className={
                        `ro-input${hasValue}${blurred}`}
                    onBlur={() => this.setState({blurred: true})}
                    onChange={(e) => this.handleInputChange(e)}
                    type={this.props.type}/>
                <label>{this.props.placeholder}</label>
            </div>
        )
    }
}