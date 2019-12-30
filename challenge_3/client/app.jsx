class App extends React.Component {
    constructor() {
        super()
        this.state = {
            Checkout: true,
            FormOne: false,
            FormTwo: false,
            FormThree: false,
            allData: {},
            user: {},
            count: 0
        }
    }

    handleCheckOut() {
        if(this.state.count === 0) {
            console.log('h')
            this.setState({
                checkout: false,
                formOne: true,
                count: 1
            });

        }
    }
    handleFormOne(data) {
        this.setState({
            allData: data,
            FormOne: false,
            FormTwo: true
        });
        // console.log(this.state.FormTwo)
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
        const formOne = <FormOne handleFormOne={this.handleFormOne.bind(this)} />;
        const formTwo = <FormTwo handleFormTwo={this.handleFormTwo.bind(this)} />;
        const formThree = <FormThree handleFormTwo={this.handleSubmit.bind(this)} />;
        return (
            <div>
                {this.state.Checkout ? checkOut : null}
                {this.state.formOne ? formOne : null}
                {this.state.formTwo ? formTwo : null}
                {this.state.formThree ? formThree : null}
                {this.state.completed ? <Done user={this.state.user} /> : null}
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root'))


