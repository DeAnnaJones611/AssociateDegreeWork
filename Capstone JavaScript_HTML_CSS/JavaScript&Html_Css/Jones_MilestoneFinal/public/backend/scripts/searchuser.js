var UserBox = React.createClass({
    getInitialState: function () {
        return { data: [], 
            viewthepage:0 };
    },
    
    loadAllowLogin: function (){
        $.ajax({
            url : '/getloguser',
            dataType: 'json',
            cache: false,
            success: function (datalog){
                this.setState({ data: datalog});
                this.setState({viewthepage: this.state.data[0].dbUserTypedj });
                console.log("Logged in: "+ this.state.viewthepage);
            }.bind(this),
            error: function (xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

    },
    loadUserFromServer: function () {


        $.ajax({
            url: '/getus/',
            data: {
                'usernamedj': usernamedj.value,
                'userbirthdaydj': userbirthdaydj.value,
                'userphonedj': userphonedj.value,
                'useremaildj': useremaildj.value,
                'userstartdatedj': userstartdatedj.value,
                'userenddatedj': userenddatedj.value,
                'usertypedj': ustypedj.value,
                'useractive' : usactive.value,
            },
            
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ data: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.loadAllowLogin();
        if(this.state.viewthepage !=0){
            this.loadUserFromServer();
        }
       // setInterval(this.loadCustomersFromServer, this.props.pollInterval);
    },

    render: function () {
        if (this.state.viewthepage == 0 || this.state.viewthepage == 1 || this.state.viewthepage == 3){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                    return (
            <div>
                <h1>Search User</h1>
                <Userform2 onUserSubmit={this.loadUserFromServer} />
                <br />
                <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Name</th>
                                <th> Birthday</th>
                                <th> Email</th>
                                <th>Phone</th>
                                <th> Start Date</th>
                                <th>End Date</th>
                                <th>Type</th>
                                <th>Active</th>
                            </tr>
                         </thead>
                        <UserList data={this.state.data} />
                    </table>
                
            </div>
        );
        }

    }
});

var Userform2 = React.createClass({
    getInitialState: function () {
        return {
            usernamedj: "",
            userbirthdaydj: "",
            userphonedj: "",
            useremaildj: "",
            userstartdatedj: "",
            userenddatedj: "",
            data:[],
            activedata : [],
        };
    },
    handleOptionChange: function(e){
            this.setState({
                selectedOption: e.target.value
            });
    },
    loadUserType: function (){
        $.ajax({    
            url: '/getusertype',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ data: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },
    loadActive: function (){
        $.ajax({    
            url: '/getactive',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ activedata: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },
    componentDidMount: function(){
        this.loadUserType();
        this.loadActive();
    },

    handleSubmit: function (e) {
        e.preventDefault();

        var usernamedj =  this.state.usernamedj.trim();
        var userbirthdaydj = this.state.userbirthdaydj.value;
        var userphonedj =  this.state.userphonedj.trim();
        var useremaildj = this.state.useremaildj;
        var userstartdatedj = this.state.userstartdatedj.trim();
        var userenddatedj = this.state.userenddatedj.trim();
        var usertypedj = ustypedj.value;
        var useractive = usactive.value;

        this.props.onUserSubmit({ 
            usernamedj: usernamedj,
            userbirthdaydj: userbirthdaydj,
            useremaildj: useremaildj,
            userphonedj: userphonedj,
            userstartdatedj: userstartdatedj,
            userenddatedj: userenddatedj,
            usertypedj: ustypedj,
            useractive: useractive,
            });

    },


    handleChange: function (event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    },
    render: function () {

        return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>User Name </th>
                            <td>
                                <input type="text" name="usernamedj" id="usernamedj" value={this.state.usernamedj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>User Birthday</th>
                            <td>
                            <input type = "date" name="userbirthdaydj" id="userbirthdaydj" value={this.state.userbirthdaydj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>User Email</th>
                            <td>
                                <input name="useremaildj" id="useremaildj" value={this.state.useremaildj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>User Phone</th>
                            <td>
                                <input name="userphonedj" id="userphonedj" value={this.state.userphonedj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>User Start Date</th>
                            <td>
                            <input type = "date" name="userstartdatedj" id="userstartdatedj" value={this.state.userstartdatedj} onChange={this.handleChange}  />
                            </td>
                        </tr>  
                        <tr>
                            <th>User End Date</th>
                            <td>
                            <input type = "date" name="userenddatedj" id="userenddatedj" value={this.state.userenddatedj} onChange={this.handleChange}  />
                            </td>
                        </tr> 

                       

                        <tr>
                            <th>
                                User Type
                            </th>
                            <td>
                                <SelectList data = {this.state.data}/>
                            </td>
                        </tr>
                        <tr>
                            <th> User Active</th>
                            <td>
                            <SelectListActive data = {this.state.activedata}/>

                            </td>
                            </tr>

                    </tbody>
                </table>
                <input type="submit" value="Search User" />

            </form>
        );
    }
});

var UserList = React.createClass({
    render: function () {
        var userNodes = this.props.data.map(function (user) {
            //map the data to individual donations
            return (
                <User
                    key={user.dbUserIDdj}
                    usekey={user.dbUserIDdj}
                    usename={user.dbUserNamedj}
                    usebirthday = {user.dbUserBirthdaydj}
                    useemail={user.dbUserEmaildj}
                    usephone={user.dbUserPhonedj}
                    usestartdate={user.dbUserStartDatedj}
                    useenddate={user.dbUserEndDatedj}
                    ustype = {user.dbUserTypeNamedj}
                    usactive = {user.StatusName}
                >
                </User>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {userNodes}
            </tbody>
        );
    }
});



var User = React.createClass({

    render: function () {
        //display an individual donation

        return (

            <tr>
                            <td>
                                {this.props.usekey} 
                            </td>
                            <td>
                                {this.props.usename}
                            </td>
                            <td>
                                {this.props.usebirthday}
                            </td>
                            <td>
                                {this.props.useemail}
                            </td>
                            <td>
                                {this.props.usephone}
                            </td>
                            <td>
                                {this.props.usestartdate}
                            </td>

                            <td>
                                {this.props.useenddate}
                            </td>
                            <td>
                                {this.props.ustype}
                            </td>
                            <td>
                                {this.props.usactive}
                            </td>
                </tr>
        );
    }
});

var SelectList = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(usTypes){
                return(
                    <option
                        key = {usTypes.dbUserTypeIDdj}
                        value = {usTypes.dbUserTypeIDdj}
                    >
                        {usTypes.dbUserTypeNamedj}
                    </option>
                );
        });
        return(
            <select name = "ustypedj" id = "ustypedj">
                <option value= "0">Choose User Type</option>
                {optionNodes}
            </select>
        );
    }
});

var SelectListActive = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(plaActive){
                return(
                    <option
                        key = {plaActive.Statusid }
                        value = {plaActive.Statusid }
                    >
                        {plaActive.StatusName}
                    </option>
                );
        });
        return(
            <select name = "usactive" id = "usactive">
                <option value= "3">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});
ReactDOM.render(
    <UserBox />,
    document.getElementById('content')
);

