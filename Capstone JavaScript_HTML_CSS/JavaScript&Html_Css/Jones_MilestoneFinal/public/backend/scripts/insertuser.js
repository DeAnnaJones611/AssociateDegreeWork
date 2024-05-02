var UserBox = React.createClass({
    getInitialState: function () {
        return { 
            viewthepage:0
        
        };
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

    handleUserSubmit: function(user){

        $.ajax({
            url: '/user',
            dataType: 'json',  
            type: 'POST',
            data: user,
            sucess: function (data){
                this.setState({ data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.loadAllowLogin();
        if(this.state.viewthepage !=0){
            this.handleUserSubmit();
        }
       // setInterval(this.loadCustomersFromServer, this.props.pollInterval);
    },
    render: function () {
        
        if (this.state.viewthepage == 0 || this.state.viewthepage != 2){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                    return (
            <div className="UserBox">
                <h1>Insert User</h1>
                <Userform2 onUserSubmit={this.handleUserSubmit} />
            </div>
        );
        }

    }
});

var Userform2 = React.createClass({
    getInitialState: function () {
        return {
            username: "",
            userbirthday: "",
            userpw:"",
            userpw2:"",
            userphone: "",
            useremail: "",
            userstartdate: "",
            userenddate: "",
            data:[],
            activedata : [],
        };
    },

    handleOptionChange: function(e){
        this.setState({
            selectedOption: e.target.value
        });
    },

    handleChange:function(e){
        this.setState({
            userbirthday: e.target.value,
        });
    },

    handleStartChange:function(e){
        this.setState({
            userstartdate: e.target.value,
        });
    },

    handleEndChange:function(e){
        this.setState({
            userenddate: e.target.value,
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

    handleSubmit: function (e){

        e.preventDefault();
        const d = new Date;
        

        var username =  this.state.username.trim();
        var userbirthday = this.state.userbirthday;

        var userpw = this.state.userpw.trim();
        var userpw2 = this.state.userpw2.trim();

        var userphone =  this.state.userphone.trim();
        var useremail = this.state.useremail;
        var userstartdate = this.state.userstartdate;

        
        var userenddate = this.state.userenddate;
        var usertypes = ustype.value;
        var useractive = usactive.value;

        console.log("pw:" + userpw);

        if (!this.validateEmail(useremail)){
            console.log("Bad Email" + this.validateEmail(useremail));
            return;
        }


        if( userpw != userpw2){
            alert("Password do not match!!");
            return;
        }

     //   if (!username || !userbirthday || !userpw){
       //     console.log("Field Missing");
           // return;
      //  }

           if (!username || !userpw){
          console.log("Field Missing");
       return;
      }

        this.props.onUserSubmit({
            username: username,
            userbirthday: userbirthday,
            useremail: useremail,
            userphone: userphone,
            userstartdate: userstartdate,
            userenddate: userenddate,
            usertypes: usertypes,
            userpw: userpw,
            useractive: useractive,

        });
        window.alert("Record Inserted");
    },
    validateEmail: function (value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    },
    validateDollars: function (value) {
        var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
        return regex.test(value);
    },
    commonValidate: function () {
        return true;
    },
    setValue: function (field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    },
    render: function () {

        return (
            <form className="userForm" onSubmit={this.handleSubmit}>

                <table>
                    <tbody>
                        <tr>
                            <th>User Name</th>
                            <td>
                <TextInput
                    value={this.state.username}
                    uniqueName="username"
                    textArea={false}
                    required={true}
                    minCharacters={6}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'username')}
                    errorMessage="User Name is invalid"
                    emptyMessage="User Name is required" />
                            </td>
                        </tr>

                        
                        <tr>
                            <th>User Birthday</th>
                            <td>
                                
                            <input type = "date" name="userbirthday" id="userbirthday" value={this.state.userbirthday} onChange={this.handleChange}  />
               
                            </td>
                        </tr>
                        <tr>
                            <th>User Phone Number</th>
                            <td>

                <TextInput
                    value={this.state.userphone}
                    uniqueName="userphone"
                    textArea={false}
                    required={false}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'userphone')}
                    errorMessage="User Phone Number is invalid"
                    emptyMessage="User Phone Number is required" />
                            </td>
                        </tr>

                    
                        <tr>
                            <th>User E-Mail</th>
                            <td>
              

                <TextInput
                    value={this.state.useremail}
                    uniqueName="useremail"
                    textArea={false}
                    required={true}
                    validate={this.validateEmail}
                    onChange={this.setValue.bind(this, 'useremail')}
                    errorMessage="Invalid E-Mail Address"
                    emptyMessage="E-Mail Address is Required" />
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
                            <th>User Start Date</th>
                            <td>
                                
                            <input type = "date" name="userstartdate" id="userstartdate" value={this.state.userstartdate} onChange={this.handleStartChange}  />
               
                            </td>
                        </tr>


                        <tr>
                            <th>User End Date</th>
                            <td>
                                
                            <input type = "date" name="userenddate" id="userenddate" value={this.state.userenddate} onChange={this.handleEndChange}  />
               
                            </td>
                        </tr>




                        <tr>
                        <th>user Password</th>
                            <td>
                                <TextInput
                                    inputType ="password"
                                    value={this.state.userpw}
                                    uniqueName="userpw"
                                    textArea={false}
                                    required={true}
                                    minCharacters={6}
                                    validate={this.commonValidate}
                                    onChange={this.setValue.bind(this, 'userpw')}
                                    errorMesage="Password is incorrect."
                                    emptyMessage="Passwords must match." />
                            </td>
                        </tr>
                        <tr>
                            <th>User Password Comfirm it </th>
                            <td>
                                <TextInput
                                    inputType ="password"
                                    value={this.state.userpw2}
                                    uniqueName="userpw2"
                                    textArea={false}
                                    required={true}
                                    minCharacters={6}
                                    validate={this.commonValidate}
                                    onChange={this.setValue.bind(this, 'userpw2')}
                                    errorMesage="Password is incorrect."
                                    emptyMessage="Passwords must match." />
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

                <input type = "submit" value = "Insert User"/>
               
            </form>
        );
    }
});

var InputError = React.createClass({
    getInitialState: function () {
        return {
            message: 'Input is invalid'
        };
    },
    render: function () {
        var errorClass = classNames(this.props.className, {
            'error_container': true,
            'visible': this.props.visible,
            'invisible': !this.props.visible
        });

        return (
                <td> {this.props.errorMessage} </td>
        )
    }
});

var TextInput = React.createClass({
    getInitialState: function () {
        return {
            isEmpty: true,
            value: null,
            valid: false,
            errorMessage: "",
            errorVisible: false
        };
    },

    handleChange: function (event) {
        this.validation(event.target.value);

        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },

    validation: function (value, valid) {
        if (typeof valid === 'undefined') {
            valid = true;
        }

        var message = "";
        var errorVisible = false;

        if (!valid) {
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }
        else if (this.props.required && jQuery.isEmptyObject(value)) {
            message = this.props.emptyMessage;
            valid = false;
            errorVisible = true;
        }
        else if (value.length < this.props.minCharacters) {
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }

        this.setState({
            value: value,
            isEmpty: jQuery.isEmptyObject(value),
            valid: valid,
            errorMessage: message,
            errorVisible: errorVisible
        });

    },

    handleBlur: function (event) {
        var valid = this.props.validate(event.target.value);
        this.validation(event.target.value, valid);
    },
    render: function () {
        if (this.props.textArea) {
            return (
                <div className={this.props.uniqueName}>
                    <textarea
                        placeholder={this.props.text}
                        className={'input input-' + this.props.uniqueName}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        value={this.props.value} />

                    <InputError
                        visible={this.state.errorVisible}
                        errorMessage={this.state.errorMessage} />
                </div>
            );
        } else {
            return (
                <div className={this.props.uniqueName}>
                    <input
                        type = {this.props.inputType}
                        name = {this.props.uniqueName}
                        id = {this.props.uniqueName}
                        placeholder={this.props.text}
                        className={'input input-' + this.props.uniqueName}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        value={this.props.value} />

                    <InputError
                        visible={this.state.errorVisible}
                        errorMessage={this.state.errorMessage} />
                </div>
            );
        }
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
            <select name = "ustype" id = "ustype">
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
                <option value= "0">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});


ReactDOM.render(
    <UserBox />,
    document.getElementById('content')
);
