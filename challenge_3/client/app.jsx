// MAIN CLASS APP WHICH HAS 4 FUNCYIONS WITH RENDER FUNCTION WHICH TOGGLES BETWEEN FORMS

class App extends React.Component {
    constructor() {
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
        // console.log(data, obj)
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
            done: true
        });

    }
    render() {


        const checkOut = (
            <div>
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
                {this.state.done ? <Done data={this.state.allData} /> : null}
            </div>
        )
    }
}

// FORM ONE CLASS WHICH GETS THE VALUE OF THE INPUT AREA AND PUTS IT IN AN OBJECT AND THEN GIVES IT BACK TO THE MAIN OBJECT
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
                    <label htmlFor="name">Name: </label>
                    <br />
                    <br />
                    <input type="text" name="Name" id="Name" onChange={this.handleChange.bind(this)} placeholder="Enter full name" required/>
                    <hr />
                </div>
                <div>
                    <label htmlFor="email">Email address: </label>
                    <br />
                    <br />
                    <input type="text" name="Email" id="Email" onChange={this.handleChange.bind(this)} placeholder="Enter email" required/>
                    <hr />
                    <br />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <br />
                    <br />
                    <input type="password" name="Password" id="Password" onChange={this.handleChange.bind(this)} placeholder="Enter password" required/>
                    <hr />
                    <br />
                </div>
                <div>
                    <hr />
                    <button type="submit" onClick={this.handleClick.bind(this)}>Next</button>
                    <br />
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
                    <br />
                    <br />
                    <input type="line_1" name="line_1" id="Line_1" onChange={this.handleChange.bind(this)} placeholder="Enter Address line 1" required/>

                    <input type="line_2" name="line_2" id="Line_2" onChange={this.handleChange.bind(this)} placeholder="Enter Address line 2" required/>
                    <hr />
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <br />
                    <br />
                    <input type="text" name="city" id="City" onChange={this.handleChange.bind(this)} placeholder="Enter city name" required/>
                    <hr />
                </div>

                <div>
                    <label htmlFor="state">State</label>
                    <br />
                    <br />
                    <input type="text" name="state" id="State" onChange={this.handleChange.bind(this)} placeholder="Enter state" />
                    <hr />
                </div>

                <div>
                    <label htmlFor="zip_code">Zip Code</label>
                    <br />
                    <br />
                    <input type="text" name="zip_code" id="Zip_code" onChange={this.handleChange.bind(this)} placeholder="Enter Zip Code" />
                    <hr />
                </div>

                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <br />
                    <br />
                    <input type="number" name="phone_number" id="Phone_number" onChange={this.handleChange.bind(this)} placeholder="Enter Phone Number" />
                    <hr />
                </div>

                <div>
                    <br />
                    <br />
                    <button type="submit" onClick={this.handleClick.bind(this)}>Next</button>
                    <hr />
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
        // console.log(data)
        this.props.handleFormThree(data);
    }
    render() {
        const { Expiry_date, CVV, Billing_address } = this.state;
        return (
            <div>
                <h1>USER INFO</h1>
                <div>
                    <label htmlFor="expiry_date">Expiry date: </label>
                    <br />
                    <br />
                    <input type="date" name="Expiry_date" id="Expiry_date" onChange={this.handleChange.bind(this)} placeholder="Enter Credit Card Expiry Date" required/>
                    <hr />
                </div>
                <div>
                    <label htmlFor="CVV">CVV: </label>
                    <br />
                    <br />
                    <input type="number" name="CVV" id="CVV" onChange={this.handleChange.bind(this)} placeholder="Enter CVV" required/>
                    <hr />
                </div>
                <div>
                    <label htmlFor="Billing">Billing address: </label>
                    <br />
                    <br />
                    <input type="text" name="Billing_address" id="Billing_address" onChange={this.handleChange.bind(this)} placeholder="Enter password" required/>
                    <hr />
                </div>
                <div>
                    <br />
                    <br />
                    <button type="submit" onClick={this.handleClick.bind(this)}>Next</button>
                    <hr />
                </div>
            </div>
        )
    }
}

class Done extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit() {
        console.log(this.props.data)
        $.ajax({
            url: '/user',
            method: 'POST',
            data: this.props.data,
            success: (data) => {
                console.log(`yes ${data}`)
            },
            error: () => {
                console.log('error')
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Thank you for shopping with us her is your information</h1>

                <p>Name: {this.props.data.Name}</p>
                <p>Email: {this.props.data.Email}</p>
                <p>Line 1: {this.props.data.Line_1}</p>
                {this.props.data.Line_2 ? <p>Line 2:{this.props.data.Line_2}</p> : <p>Line 2:null </p>}
                <p>City: {this.props.data.City}</p>
                <p>State: {this.props.data.State}</p>
                <p>Zip_code: {this.props.data.Zip_code}</p>
                <p>Phone number: {this.props.data.Phone_number}</p>
                <p>Expiry date: {this.props.data.Expiry_date}</p>
                <p>CVV: {this.props.data.CVV}</p>
                <p>Billing address: {this.props.data.Billing_address}</p>
            <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root'))


