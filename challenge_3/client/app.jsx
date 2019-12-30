class App extends React.Component {
    constructor() {
        super()
        this.state = {
            Checkout: true,
            FormOne: false,
            FormTwo: false,
            FormThree: false
        }
    }

    handleCheckOut() {
        this.setState({
          checkout: false,
          formOne: true
        });
      }
    handleFormOne() {
        this.setState({
            FormOne: false,
            FormTwo: true
        });
    }
    handleFormTwo() {
        this.setState({
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
        return (
            <div>

                <button onClick={this.handleCheckout}>checkout</button>
                <script>{console.log(this.state.Checkout)}</script>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root'))

