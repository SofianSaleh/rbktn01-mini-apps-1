class App extends React.Component {
    constructor() {
        // console.log('g')
        super()
        this.state = {
            Checkout: true,
            formOne: false,
            formTwo: false,
            formThree: false,
            done: false,
            allData: {}
        }
    }

    handleCheckOut() {
        this.setState({
            checkout: false,
            formOne: true,
            count: 1
        });
    }
    handleFormOne(data) {
        var obj = Object.assign({}, this.state.allData, data);
        this.setState({
            allData: obj,
            formOne: false,
            formTwo: true
        });
        // console.log(aldata)

    }
    handleFormTwo(data) {
        var obj = Object.assign({}, this.state.allData, data);
        console.log(data, obj)
        this.setState({
            allData: obj,
            formTwo: false,
            formThree: true
        });

    }

    handleFormThree(data) {
        var obj = Object.assign({}, this.state.allData, data);
        this.setState({
            allData: obj,
            formThree: false,
            Submit: true
        }, ()=> console.log(this.state.allData));

    }
    render() {


        const checkOut = (
            <div>
                {/* <script>{console.log('h')}</script> */}
                <h1> CHECK OUT</h1>
                <button onClick={this.handleCheckOut.bind(this)}>Checkout</button>
            </div>
        );
        return (
            // <script>{console.log(allData)}</script>
            <div>
                {this.state.Checkout ? checkOut : null}
                {this.state.formOne ? <FormOne handleFormOne={this.handleFormOne.bind(this)} /> : null}
                {this.state.formTwo ? <FormTwo handleFormTwo={this.handleFormTwo.bind(this)} /> : null}
                {this.state.formThree ? <FormThree handleFormThree={this.handleFormThree.bind(this)} /> : null}
                {this.state.completed ? <Done user={this.state.user} /> : null}
            </div>
        )
    }
}


class FormOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Password: ''
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
        const { Name, Email, Password } = this.state;
        return (
            <div>
                <h1>USER INFO</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="Name" id="Name" onChange={this.handleChange.bind(this)} placeholder="Enter full name" required />
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="Email" id="Email" onChange={this.handleChange.bind(this)} placeholder="Enter email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="Password" id="Password" onChange={this.handleChange.bind(this)} placeholder="Enter password" required />
                </div>
                <div>
                    <button type="submit" onClick={this.handleClick.bind(this)}>Next</button>
                </div>
            </div>
        )
    }
}

class FormTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Line_1: '', 
            Line_2: '', 
            City: '', 
            State: '', 
            Zip_code: '', 
            Phone_number: ''
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleClick(data) {
        var data = this.state;
        // console.log(data)
        this.props.handleFormTwo(data);
    }
    render() {
        const { Line_1, Line_2, City, State, Zip_code, Phone_number } = this.state;
        return (
            <div>
                <h1>USER INFO</h1>
                <div>
                    <label htmlFor="Address">Address </label>
                    <input type="line_1" name="line_1" id="Line_1" onChange={this.handleChange.bind(this)} placeholder="Enter Address line 1" required />
                    <input type="line_2" name="line_2" id="Line_2" onChange={this.handleChange.bind(this)} placeholder="Enter Address line 2" required />
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input type="city" name="city" id="City" onChange={this.handleChange.bind(this)} placeholder="Enter city name" required />
                </div>

                <div>
                    <label htmlFor="state">State</label>
                    <input type="state" name="state" id="State" onChange={this.handleChange.bind(this)} placeholder="Enter state" />
                </div>

                <div>
                    <label htmlFor="zip_code">Zip Code</label>
                    <input type="zip_code" name="zip_code" id="Zip_code" onChange={this.handleChange.bind(this)} placeholder="Enter Zip Code" />
                </div>

                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <input type="phone_number" name="phone_number" id="Phone_number" onChange={this.handleChange.bind(this)} placeholder="Enter Phone Number" />
                </div>

                <div>
                    <button type="submit" onClick={this.handleClick.bind(this)}>Next</button>
                </div>
            </div>
        )
    }
}

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
        console.log(data)
        this.props.handleFormThree(data);
    }
    render() {
        const { Expiry_date, CVV, Billing_address } = this.state;
        return (
            <div>
                <h1>USER INFO</h1>
                <div>
                    <label htmlFor="expiry_date">Expiry date: </label>
                    <input type="date" name="Expiry_date" id="Expiry_date" onChange={this.handleChange.bind(this)} placeholder="Enter Credit Card Expiry Date" required />
                </div>
                <div>
                    <label htmlFor="CVV">CVV: </label>
                    <input type="CVV" name="CVV" id="CVV" onChange={this.handleChange.bind(this)} placeholder="Enter CVV" required />
                </div>
                <div>
                    <label htmlFor="password">Billing address: </label>
                    <input type="text" name="Billing_address" id="Billing_address" onChange={this.handleChange.bind(this)} placeholder="Enter password" required />
                </div>
                <div>
                    <button type="submit" onClick={this.handleClick.bind(this)}>Next</button>
                </div>
            </div>
        )
    }
}

class Done extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Thank you for shopping with us her is your information</h1>
                <div>
                    Name: {this.props.allData.Name}
                </div>
                    
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root'))


