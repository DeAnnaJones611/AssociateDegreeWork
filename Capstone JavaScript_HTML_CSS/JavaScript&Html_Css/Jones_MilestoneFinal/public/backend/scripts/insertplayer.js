var PlayerBox = React.createClass({
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
    
    handlePlayerSubmit: function(player){

        $.ajax({
            url: '/player',
            dataType: 'json',  
            type: 'POST',
            data: player,
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
            this.handlePlayerSubmit();
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
            <div className="PlayerBox">
                <h1>Insert Players</h1>
                <Playerform2 onPlayerSubmit={this.handlePlayerSubmit} />
            </div>
        )
        }
;
    }
});

var Playerform2 = React.createClass({
    getInitialState: function () {
        return {
            playername: "",
            playerbirthday: "",
            playerpw:"",
            playerpw2:"",
            playerphone: "",
            playeremail: "",
            playernotes: "",
            data:[],
            activedata:[],
        };

    },

    handleOptionChange: function(e){
        this.setState({
            selectedOption: e.target.value
        });
    },
    handleChange:function(e){
        this.setState({
            playerbirthday: e.target.value,
        });
    },

    loadPlayerReward: function (){
        $.ajax({    
            url: '/getplayerreward',        
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
        this.loadPlayerReward();
        this.loadActive();
    },

    handleSubmit: function (e){
        e.preventDefault();
        
        var playername =  this.state.playername.trim();
        var playerbirthday = this.state.playerbirthday;

        var playerpw = this.state.playerpw.trim();
        var playerpw2 = this.state.playerpw2.trim();

        var playeremail =  this.state.playeremail.trim();
        var playerphone = this.state.playerphone.trim();
        var playernotes = this.state.playernotes.trim();

        var playerrewards = plareward.value;
        var playeractive= plaactive.value;

        console.log("pw:" + playerpw);
        console.log(" 1 active"+playeractive );

        if (!this.validateEmail(playeremail)){
            console.log("Bad Email" + this.validateEmail(playeremail));
            return;
        }


        if( playerpw != playerpw2){
            alert("Password do not match!!");
            return;
        }

       // if (!playername || !playerbirthday || !playerpw){
       //     console.log("Field Missing");
       //     return;
       // }

        if (!playername  || !playerpw ||! playeremail||! playerphone){
            console.log("Field Missing");
            window.alert("Fields are missing");
            return;
        }
        this.props.onPlayerSubmit({
            playername: playername,
            playerbirthday: playerbirthday,
            playeremail: playeremail,
            playerphone: playerphone,
            playernotes: playernotes,
            playerrewards: playerrewards,
            playerpw: playerpw,
            playeractive:playeractive,

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
            <form className="playerForm" onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>Player Name</th>
                            <td>
                <TextInput
                    value={this.state.playername}
                    uniqueName="playername"
                    textArea={false}
                    required={true}
                    minCharacters={2}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'playername')}
                    errorMessage="Player Name is invalid"
                    emptyMessage="Player Name is required" />
                            </td>
                        </tr>

                        
                        <tr>
                            <th>Player Birthday</th>
                            <td>
                                
                            <input type = "date" name="playerbirthday" id="playerbirthday" value={this.state.playerbirthday} onChange={this.handleChange}  />
               
                            </td>
                        </tr>
                        <tr>
                            <th>Player Phone Number</th>
                            <td>

                <TextInput
                    value={this.state.playerphone}
                    uniqueName="playerphone"
                    textArea={false}
                    required={false}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'playerphone')}
                    errorMessage="Player Phone Number is invalid"
                    emptyMessage="Player Phone Number is required" />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Notes</th>
                            <td>

                <TextInput
                    value={this.state.playernotes}
                    uniqueName="playernotes"
                    textArea={false}
                    required={false}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'playernotes')}
                    errorMessage="Player Notes is invalid"
                    emptyMessage=""/>
                            </td>
                        </tr>
                    
                        <tr>
                            <th>Player E-Mail</th>
                            <td>
              

                <TextInput
                    value={this.state.playeremail}
                    uniqueName="playeremail"
                    textArea={false}
                    required={true}
                    validate={this.validateEmail}
                    onChange={this.setValue.bind(this, 'playeremail')}
                    errorMessage="Invalid E-Mail Address"
                    emptyMessage="E-Mail Address is Required" />
                            </td>
                        </tr>


                       

                        <tr>
                            <th>
                                Player Rewards
                            </th>
                            <td>
                                <SelectList data = {this.state.data}/>
                            </td>
                        </tr>
                        <tr>
                        <th>Player Password</th>
                            <td>
                                <TextInput
                                    inputType ="password"
                                    value={this.state.playerpw}
                                    uniqueName="playerpw"
                                    textArea={false}
                                    required={true}
                                    minCharacters={7}
                                    validate={this.commonValidate}
                                    onChange={this.setValue.bind(this, 'playerpw')}
                                    errorMesage="Password is incorrect."
                                    emptyMessage="Passwords must match." />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Password Comfirm it </th>
                            <td>
                                <TextInput
                                    inputType ="password"
                                    value={this.state.playerpw2}
                                    uniqueName="playerpw2"
                                    textArea={false}
                                    required={true}
                                    minCharacters={7}
                                    validate={this.commonValidate}
                                    onChange={this.setValue.bind(this, 'playerpw2')}
                                    errorMesage="Password is incorrect."
                                    emptyMessage="Passwords must match." />
                            </td>
                        </tr>

                        <tr>
                            <th> Player Active</th>
                            <td>
                            <SelectListActive data = {this.state.activedata}/>

                            </td>
                            </tr>

                    </tbody>
                </table>

                <input type = "submit" value = "Insert Player"/>
               
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
        var optionNodes = this.props.data.map(function(plaRewards){
                return(
                    <option
                        key = {plaRewards.dbPlayerRewardsIDdj}
                        value = {plaRewards.dbPlayerRewardsIDdj}
                    >
                        {plaRewards.dbPlayerRewardNamedj}
                    </option>
                );
        });
        return(
            <select name = "plareward" id = "plareward">
                <option value= "0">Choose Rewards Level</option>
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
            <select name = "plaactive" id = "plaactive">
                <option value= "0">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});



ReactDOM.render(
    <PlayerBox />,
    document.getElementById('content')
);
