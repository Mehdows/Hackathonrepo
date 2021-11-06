import React from "react"

class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {val: ''};
        this.state = {
          data: this.props.text
        }
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event){
        this.setState({value: event.target.value});
        event.preventDefault();
    }


    render() {
      const {data} = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              {data}
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
        );

    }
    
}
export default InputForm;