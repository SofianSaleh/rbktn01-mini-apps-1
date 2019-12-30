class FormTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            line_1: '', 
            line_2: '', 
            city: '', 
            state: '', 
            zip_code: '', 
            phone_number: ''
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleClick() {
        var data = this.state;
        this.props.handleFormTwo(data);
    }
    render() {
        const { line_1, line_2, city, state, zip_code, phone_number } = this.state;
        return (
            <div>

                <div>
                    <label htmlFor="Address">Address </label>
                    <input type="line_1" name="line_1" id="line_1" onChange={this.handleChange.bind(this)} placeholder="Enter Address line 1" required />
                    <input type="line_2" name="line_2" id="line_2" onChange={this.handleChange.bind(this)} placeholder="Enter Address line 2" required />
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input type="city" name="city" id="city" onChange={this.handleChange.bind(this)} placeholder="Enter city name" required />
                </div>

                <div>
                    <label htmlFor="state">State</label>
                    <input type="state" name="state" id="state" onChange={this.handleChange.bind(this)} placeholder="Enter state" />
                </div>

                <div>
                    <label htmlFor="zip_code">Zip Code</label>
                    <input type="zip_code" name="zip_code" id="zip_code" onChange={this.handleChange.bind(this)} placeholder="Enter Zip Code" />
                </div>

                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <input type="phone_number" name="phone_number" id="phone_number" onChange={this.handleChange.bind(this)} placeholder="Enter Phone Number" />
                </div>

                <div>
                    <button type="submit" onClick={this.handleClick.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}
window.FormTwo = FormTwo;