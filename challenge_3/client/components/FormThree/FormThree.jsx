class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expiry_date: null,
      CVV: null,
      billing_address: ''
    };
}
handleChange(e) {
    this.setState({
        [e.target.id]: e.target.value
    });
}

handleClick() {
    var data = this.state;
    this.props.handleFormOne(data);
}
render() {
    const { expiry_date, CVV, billing_address } = this.state;
    return (
        <div>
            <div>
                <label htmlFor="expiry_date">expiry_date: </label>
                <input type="date" name="expiry_date" id="expiry_date" onChange={this.handleChange.bind(this)} placeholder="Enter Credit Card Expiry Date" required/>
            </div>
            <div>
                <label htmlFor="CVV">CVV: </label>
                <input type="CVV" name="CVV" id="CVV" onChange={this.handleChange.bind(this)} placeholder="Enter CVV" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" name="Password" id="Password" onChange={this.handleChange.bind(this)} placeholder="Enter password" required/>
            </div>
            <div>
                <button type="submit" onClick={this.handleClick.bind(this)}>Submit</button>
            </div>
        </div>
    )
}
    }
    window.FormThree = FormThree;