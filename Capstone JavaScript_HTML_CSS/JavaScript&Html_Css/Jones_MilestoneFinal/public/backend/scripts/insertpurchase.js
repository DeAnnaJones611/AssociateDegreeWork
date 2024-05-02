var PurchaseBox = React.createClass({
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


    handlePurchaseSubmit: function(purchase){

        $.ajax({
            url: '/purchase',
            dataType: 'json',  
            type: 'POST',
            data: purchase,
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
            this.handlePurchaseSubmit();
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
            <div className="PurchaseBox">
                <h1>Insert Purchase</h1>
                <Purchaseform2 onPurchaseSubmit={this.handlePurchaseSubmit} />
            </div>
        );
        }

    }
});

var Purchaseform2 = React.createClass({
    getInitialState: function () {
        return {
            purchasetotaldj: "",
            purchasedatetimedj: "",
            userdata:[],
            playerdata:[],
            data:[],
            activedata:[],
        };
    },

    handleOptionChange: function(e){
        this.setState({
            selectedOption: e.target.value
        });
    },
    loadPurchaseTypes: function (){
        $.ajax({    
            url: '/getpurchasetypes',        
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


    loadPurchaseUser: function (){
        $.ajax({    
            url: '/getuser',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ userdata: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },



    loadPurchasePlayer: function (){
        $.ajax({    
            url: '/getplayer',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ playerdata: data });
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
        this.loadPurchaseTypes();
        this.loadPurchaseUser();
        this.loadPurchasePlayer();
        this.loadActive();
    },

    handleSubmit: function (e){

        e.preventDefault();
       const dj = new Date;
      
       
        var purchasetotaldj =  this.state.purchasetotaldj.trim();
        var purchasedatetimedj = dj;
        var purchaseuserdj = puruserdj.value;
        var purchaseplayerdj = purplayerdj.value;
        var purchasetypedj = purtypedj.value;
        var purchaseactive = puractive.value;

       // console.log("pw:" + playerpw);


        
        if (isNaN(purchasetotaldj)){
            console.log("Not a number " + purchasetotaldj);
            return;
        }


       // if (!purchasedatetime || !purchaseuser || !purchaseplayer){
       //     console.log("Field Missing");
        //    return;
       // }

    if ( !purchaseuserdj || !purchaseplayerdj || !purchasetotaldj){
           console.log("Field Missing");
           return;
       }

        this.props.onPurchaseSubmit({
            purchasetotaldj: purchasetotaldj,
            purchasedatetimedj: purchasedatetimedj,
            purchaseuserdj: purchaseuserdj,
            purchaseplayerdj: purchaseplayerdj,
            purchasetypedj: purchasetypedj,
            purchaseactive:purchaseactive,
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
            <form className="purchaseForm" onSubmit={this.handleSubmit}>

                <table>
                    <tbody>
                        <tr>
                            <th>Purchase Player</th>
                            <td>
                            <SelectPlayer data = {this.state.playerdata}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase User </th>
                            <td>
                            <SelectUser data = {this.state.userdata}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Total</th>
                            <td>

                <TextInput
                    value={this.state.purchasetotaldj}
                    uniqueName="purchasetotaldj"
                    textArea={false}
                    required={false}
                    validate={this.validateDollars}
                    onChange={this.setValue.bind(this, 'purchasetotaldj')}
                    errorMessage="Purchase Total is invalid"
                    emptyMessage="Purchase Total is required" />
                            </td>
                        </tr>

                    


                       

                        <tr>
                            <th>
                                Purchase Type
                            </th>
                            <td>
                                <SelectList data = {this.state.data}/>
                            </td>
                        </tr>
                        <tr>
                        <th> Purchase Active</th>
                            <td>
                            <SelectListActive data = {this.state.activedata}/>

                            </td>
                            </tr>

                    </tbody>
                </table>

                <input type = "submit" value = "Insert Product"/>
               
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
        var optionNodes = this.props.data.map(function(purTypes){
                return(
                    <option
                        key = {purTypes.dbPurchaseTypeIDdj}
                        value = {purTypes.dbPurchaseTypeIDdj}
                    >
                        {purTypes.dbPurchaseTypeNamedj}
                    </option>
                );
        });
        return(
            <select name = "purtypedj" id = "purtypedj">
                <option value= "0">Pick a Type</option>
                {optionNodes}
            </select>
        );
    }
});

var SelectUser = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(purUser){
                return(
                    <option
                        key = {purUser.dbUserIDdj}
                        value = {purUser.dbUserIDdj}
                    >
                        {purUser.dbUserNamedj}
                    </option>
                );
        });
        return(
            <select name = "puruserdj" id = "puruserdj">
                <option value= "0">Select  a User</option>
                {optionNodes}
            </select>
        );
    }
});

var SelectPlayer = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(purPlayer){
                return(
                    <option
                        key = {purPlayer.dbPlayerIDdj}
                        value = {purPlayer.dbPlayerIDdj}
                    >
                        {purPlayer.dbPlayerNamedj}
                    </option>
                );
        });
        return(
            <select name = "purplayerdj" id = "purplayerdj">
                <option value= "0">Select a Player</option>
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
            <select name = "puractive" id = "puractive">
                <option value= "0">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});


ReactDOM.render(
    <PurchaseBox />,
    document.getElementById('content')
);
