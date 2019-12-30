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
                    <button type="submit" onClick={this.handleClick.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}
window.FormOne = FormOne;