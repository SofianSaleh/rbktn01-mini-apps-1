class App extends React.Component {
    constructor() {
        // console.log('g')
        super()
        this.state = {
            Checkout: true,
            formOne: false,
            formTwo: false,
            FormThree: false,
            allData: {},
            user: {},
            count: 0
        }
    }

    handleCheckOut() {
        // if(this.state.count === 0) {
            // console.log('h')
            this.setState({
                checkout: false,
                formOne: true,
                count: 1
            });

        // }
    }
    handleFormOne(data) {
        console.log(data)
        this.setState({
            allData: data,
            formOne: false,
            formTwo: true
        }, _ => console.log(this.state.formOne));
        console.log(this.state.Checkout)
    }
    handleFormTwo(data) {
        this.setState({
            allData: data,
            FormTwo: false,
            FormThree: true
        });
    }

    handleSubmit() {
        this.setState({
            FormThree: false,
            Submit: true
        });

    }
    render() {
        

            const checkOut = (
                <div>
                    {/* <script>{console.log('h')}</script> */}
                    <h1> CHECK OUT</h1>
                    <button onClick={this.handleCheckOut.bind(this)}>Checkout</button>
                </div>
            );
       
        // <script>{console.log(this.state.allData)}</script>
        <script>{console.log(this.state.count)}</script>
        // const formOne = ;
        // const formTwo = ;
        // const formThree =;
        return (
            <div>
                {this.state.Checkout ? checkOut : null}
                {this.state.formOne ? <FormOne handleFormOne={this.handleFormOne.bind(this)} /> : null}
                {this.state.formTwo ? <FormTwo handleFormTwo={this.handleFormTwo.bind(this)} /> : null}
                {this.state.formThree ?  <FormThree handleFormTwo={this.handleSubmit.bind(this)} /> : null}
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
                    <input type="text" name="Name" id="Name" onChange={this.handleChange.bind(this)} placeholder="Enter full name" required/>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="Email" id="Email" onChange={this.handleChange.bind(this)} placeholder="Enter email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="Password" id="Password" onChange={this.handleChange.bind(this)} placeholder="Enter password" required/>
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
                  <button type="submit" onClick={this.handleClick.bind(this)}>Next</button>
              </div>
          </div>
      )
  }
      }



ReactDOM.render(<App />,
    document.getElementById('root'))


