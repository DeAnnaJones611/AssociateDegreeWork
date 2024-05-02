var UserBox = React.createClass({
    getInitialState: function () {
        return { data: [], 
            viewthepage:0
    };
},
loadAllowLogin: function (){
    $.ajax({
        url :  '/getloguser',
        dataType: 'json',
        cache: false,
        success: function (datalog){
            this.setState({ data: datalog});
            this.setState({viewthepage: this.state.data[0].dbUserTypedj });
            console.log("Logged in: "+this.state.viewthepage);
        }.bind(this),
        error: function (xhr, status, err){
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
},
    loadUserFromServer: function () {


        $.ajax({
            url: '/getus',
            data: {
                'userid': userid.value,
                'usernamedj': usernamedj.value,
                'userbirthdaydj': userbirthdaydj.value,
                'userphonedj': userphonedj.value,
                'useremaildj': useremaildj.value,
                'userstartdatedj': userstartdatedj.value,
                'userenddatedj': userenddatedj.value,
                'usertypedj': ustypedj.value,
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
    updateSingleUseFromServer: function (user) {
        
        $.ajax({
            url: '/updatesingleuse',
            dataType: 'json',
            data: user,
            type: 'POST',
            cache: false,
            success: function (upsingledata) {
                this.setState({ upsingledata: upsingledata });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        window.location.reload(true);
    },
    componentDidMount: function () {
        this.loadAllowLogin();
        if(this.state.viewthepage !=0){
            this.loadUserFromServer();
        }
    },

    render: function () {
        if (this.state.viewthepage == 0 || this.state.viewthepage != 2){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                    return (
            <div>
                <h1>Update User</h1>
                <Userform2 onUserSubmit={this.loadUserFromServer} />
                <br />
                <div id = "theresults">
                    <div id = "theleft">
                    <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                         </thead>
                        <UserList data={this.state.data} />
                    </table>
                    </div>
                    <div id="theright">
                        <UserUpdateform onUpdateSubmit={this.updateSingleUseFromServer} />
                    </div>                
                </div>
            </div>
        );
        }

    }
});

var Userform2 = React.createClass({
    getInitialState: function () {
        return {
            userkey: "",
            userid: "",
            usernamedj: "",
            userbirthdaydj: "",
            userphonedj: "",
            useremaildj: "",
            userstartdatedj: "",
            userenddatedj: "",
            data:[],
        };
    },
    handleOptionChange: function (e) {
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

    componentDidMount: function(){
        this.loadUserType();
    },


    handleSubmit: function (e) {
        e.preventDefault();
        var userid = this.state.userid.trim();
        var usernamedj =  this.state.usernamedj.trim();
        var userbirthdaydj = this.state.userbirthdaydj.value;
        var userphonedj =  this.state.userphonedj.trim();
        var useremaildj = this.state.useremaildj;
        var userstartdatedj = this.state.userstartdatedj.trim();
        var userenddatedj = this.state.userenddatedj.trim();
        var usertypedj = ustypedj.value;

        this.props.onUserSubmit({ 
            userid:userid,
            usernamedj: usernamedj,
            userbirthdaydj: userbirthdaydj,
            useremaildj: useremaildj,
            userphonedj: userphonedj,
            userstartdatedj: userstartdatedj,
            userenddatedj: userenddatedj,
            usertypedj: ustypedj,
            });

    },
    handleChange: function (event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    },
    render: function () {

        return (
        <div>
            <div id = "theform">
            <form onSubmit={this.handleSubmit}>
                <h2>User</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Player ID</th>
                            <td>
                                <input type="text" name="userid" id="userid" value={this.state.userid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Name</th>
                            <td>
                            <input type="text" name="usernamedj" id="usernamedj" value={this.state.usernamedj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                        <th>Player Birthday</th>
                            <td>
                            <input type = "date" name="userbirthdaydj" id="userbirthdaydj" value={this.state.userbirthdaydj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Email</th>
                            <td>
                                <input name="useremaildj" id="useremaildj" value={this.state.useremaildj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Phone</th>
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
                    </tbody>
                </table>
                <input type="submit" value="Search User" />

            </form>
            </div>
            <div>
                    <br />
                    <form onSubmit={this.getInitialState}>
                        <input type="submit" value="Clear Form" />
                    </form>
            </div>
        </div>
        );
    }
});



function formatDate(date){
    var d  = new Date(date), 
    month = ''+(d.getMonth()+1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2){
        month = '0'+ month;
    }
    if (day.length < 2){
        day = '0'  +day;
    }
    return [year, month, day].join('-');
}

var UserUpdateform = React.createClass({
    getInitialState: function () {
        return {
            upuserkey: "",
            upuserid: "",
            upusername: "",
            upuserbirthday: "",
            upuseremail: "",
            upuserphone: "",
            upuserstartdate: "",
            upuserenddate: "",
            updata: []
        };
    },
    handleUpOptionChange: function (e) {
        this.setState({
            upselectedOption: e.target.value
        });
    },
    loadUserType: function (){
        $.ajax({    
            url: '/getusertype',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ updata: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },

    componentDidMount: function(){
        this.loadUserType();
    },
    handleUpSubmit: function (e) {
        e.preventDefault();

        var upusekey = upusekey.value;
        var upuserid = upuserid.value;
        var upusername =  usename.value;
        var upuserbirthday = usebirthday.value;
        var upuserphone =  usephone.value;
        var upuseremail = useemail.value;
        var upuserstartdate = usestartdate.value;
        var upuserenddate = useenddate.value;
        var upusertype = upustype.value;

        this.props.onUpdateSubmit({
            upuserkey: upuserkey,
            upuserid: upuserid,
            upusername: upusername,
            upuserbirthday: upuserbirthday,
            upuserphone: upuserphone,
            upuseremail: upuseremail,
            upuserstartdate: upuserstartdate,
            upuserenddate: upuserenddate,
            upusertype: upusertype,
        });
    },
    handleUpChange: function (event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    },
    render: function () {

        return (
            <div>
                <div id="theform">
                    <form onSubmit={this.handleUpSubmit}>

                        <table>
                            <tbody>
                            <tr>
                            <th>User ID </th>
                            <td>
                                <input type="text" name="upuserid" id="upuserid" value={this.state.upuserid} onChange={this.handleUpChange} />
                            </td>
                        </tr>
                            <tr>
                            <th>User Name </th>
                            <td>
                                <input type="text" name="upusername" id="upusername" value={this.state.upusername} onChange={this.handleUpChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>User Birthday</th>
                            <td>
                            <input type = "date" name="upuserbirthday" id="upuserbirthday" value={this.state.upuserbirthday} onChange={this.handleUpChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>User Email</th>
                            <td>
                                <input name="upuseremail" id="upuseremail" value={this.state.upuseremail} onChange={this.handleUpChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>User Phone</th>
                            <td>
                                <input name="upuserphone" id="upuserphone" value={this.state.upuserphone} onChange={this.handleUpChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>User Start Date</th>
                            <td>
                            <input type = "date" name="upuserstartdate" id="upuserstartdate" value={this.state.upuserstartdate} onChange={this.handleUpChange}  />
                            </td>
                        </tr>  
                        <tr>
                            <th>User End Date</th>
                            <td>
                            <input type = "date" name="upuserenddate" id="upuserenddate" value={this.state.upuserenddate} onChange={this.handleUpChange}  />
                            </td>
                        </tr> 

                       

                        <tr>
                            <th>
                                User Type
                            </th>
                            <td>
            <SelectUpdateList data={this.state.updata} />
        </td>
    </tr>
</tbody>
                        </table><br />
                        <input type="hidden" name="upusekey" id="upusekey" onChange={this.handleUpChange} />
                        <input type="submit" value="Update User" />
                    </form>
                </div>
            </div>
        );
    }
});

var UserList = React.createClass({
    render: function () {
        var userNodes = this.props.data.map(function (user) {
            return (
                <User
                    key={user.dbUserIDdj}
                    usekey={user.dbUserIDdj}
                    useid={user.dbUserIDdj}
                    usename={user.dbUserNamedj}
                    useemail={user.dbUserEmaildj}
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
    getInitialState: function () {
        return {
            upusekey: "",
            singledata: []
        };
    },
    updateRecord: function (e) {
        e.preventDefault();
        var theupusekey = this.props.usekey;
        
        this.loadSingleUse(theupusekey);
    },
    loadSingleUse: function (theupusekey) {
        $.ajax({
            url: '/getsingleuse',
            data: {
                'upusekey': theupusekey
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ singledata: data });
                console.log(this.state.singledata);
                var populateUse = this.state.singledata.map(function (user) {
                    upusekey.value = theupusekey;
                    upuserid.value = user.dbUserIDdj;
                    upusername.value = user.dbUserNamedj;
                    upuserbirthday.value = formatDate(Date(user.dbUserBirthdaydj));
                    upuseremail.value = user.dbUserEmaildj;
                    upuserphone.value = user.dbUserPhonedj;
                    upuserstartdate.value = formatDate(Date(user.dbUserStartDatedj));
                    
                    upuserenddate.value = formatDate(Date(user.dbUserEndDatedj));

                    upustype.value = user.dbUserTypedj;

                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        
    },

    render: function () {
        


        return (

            <tr>
                            <td>
                                {this.props.usekey} 
                            </td>
                            <td>
                                {this.props.useid}
                            </td>
                            <td>
                                {this.props.usename}
                            </td>
                            <td>
                                {this.props.useemail}
                            </td>
                            <td>
                                <form onSubmit={this.updateRecord}>
                                    <input type="submit" value="Update Record" />
                                </form>
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

var SelectUpdateList = React.createClass({
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
            <select name = "upustype" id = "upustype">
                <option value= "0">Choose User Type</option>
                {optionNodes}
            </select>
        );
    }
});

ReactDOM.render(
    <UserBox />,
    document.getElementById('content')
);