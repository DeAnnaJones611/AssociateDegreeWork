var ReservationBox = React.createClass({
    getInitialState: function () {
        return { 
            viewthepage:0,
           // viewthename:0,
        };
    },
    loadAllowLogin: function (){
        $.ajax({
            url : '/getlogplayer',
            dataType: 'json',
            cache: false,
            success: function (datalog){
                this.setState({ data: datalog});
                this.setState({viewthepage: this.state.data[0].dbPlayerIDdj });
               // this.setState({viewthename: this.state.data[0].dbPlayerNamedj });
                console.log("Logged in: "+ this.state.viewthepage);
                //console.log("player "+this.state.viewthename);
            }.bind(this),
            error: function (xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });


    },
    handleReservationSubmit: function(reservation){
        $.ajax({
            url: '/reservation',
            dataType: 'json',  
            type: 'POST',
            data: reservation,
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
            this.handleReservationSubmit();
        }
       // setInterval(this.loadCustomersFromServer, this.props.pollInterval);
    },

    render: function () {
        if (this.state.viewthepage == 0){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                    return (
            <div className="ReservationrBox">
                <h1> Insert Reservation</h1>
                <Reservationform2 onReservationSubmit={this.handleReservationSubmit} />
            </div>
        );
        }

    }
});

var Reservationform2 = React.createClass({
    getInitialState: function () {
        return {
            reservationnamedj: "",
            reservationplayeramountdj: "",
            reservationdatetimedj: "",
            reservationpricedatadj:[],
            data:[],
            reservationnotesdj: "",
            reservationactive :"",
            teeTimedata:[],
 
        };
    },

    handleChange:function(e){
        this.setState({
            reservationdatetimedj: e.target.value,
        });
    },
    handleOptionChange: function(e){
        this.setState({
            selectedOption: e.target.value
        });
    },
    loadPlayer: function (){
        $.ajax({    
            url: '/getplayer',        
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

    loadTeetimes: function (){
        $.ajax({    
            url: '/getteetime',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ teeTimedata: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },

    TeePrices: function (){
    $("#resteetime").change(function(){
        $.ajax({
            url: '/getteeprice/',
            data: {
                'teepricedj' :  resteetime.value,
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ reservationpricedatadj: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }.bind(this));

    },
    componentDidMount: function(){
        this.loadPlayer();
        this.loadTeetimes();
        this.TeePrices();
    },

    handleSubmit: function (e){

        e.preventDefault();
        var reservationnamedj =  this.state.reservationnamedj.trim();
        var reservationplayeramountdj =  this.state.reservationplayeramountdj.trim();
        var reservationdatetimedj = this.state.reservationdatetimedj;
        var reservationnotesdj =  this.state.reservationnotesdj.trim();
        //var reservationpricedj = this.state.reservationpricedj.trim();
        var reservationplayerdj = resplayerdj.value;
        var reservationactive  = 1;
        var reservationteetime = resteetime.value;
        console.log("res"+reservationnamedj);
        







        if (!reservationplayeramountdj  || resplayerdj ===0 || !reservationplayerdj || !reservationnamedj){
            console.log("Field Missing");
            return;
        }

        this.props.onReservationSubmit({
            reservationnamedj:reservationnamedj,
            reservationplayeramountdj: reservationplayeramountdj,
            reservationdatetimedj: reservationdatetimedj,
          //  reservationpricedj: reservationpricedj,
            reservationplayerdj: reservationplayerdj,
            reservationnotesdj: reservationnotesdj,
            reservationactive:reservationactive,
            reservationteetime:reservationteetime,
            

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

    validateNumber: function (value) {
        var regex = /^[1-9][0-9]*$/;
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
            <form className="reservationForm" onSubmit={this.handleSubmit}>

                <table>
                    <tbody>
                    <tr>
                            <th>Reservation Name</th>
                            <td>
                <TextInput
                    value={this.state.reservationnamedj}
                    uniqueName="reservationnamedj"
                    textArea={false}
                    required={true}
                    minCharacters={2}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'reservationnamedj')}
                    errorMessage="Reservation Name is invalid"
                    emptyMessage="Reservation Name is required" />
                            </td>
                        </tr>
                      <tr>
                            <th>
                                Reservation Player
                            </th>
                            <td>
                                <SelectList data = {this.state.data}/>
                            </td>
                        </tr>

                        <tr>
                            <th>Reservation Price</th>

                            <ReservationPrice data={this.state.reservationpricedatadj} />
                        </tr>


                        <tr>
                            <th>Reservation Player Amount</th>
                            <td>
                <TextInput
                    value={this.state.reservationplayeramountdj}
                    uniqueName="reservationplayeramountdj"
                    textArea={false}
                    required={true}
                    minCharacters={1}
                    validate={this.validateNumber}
                    onChange={this.setValue.bind(this, 'reservationplayeramountdj')}
                    errorMessage="Reservation Player Amount is invalid"
                    emptyMessage="Reservation Player Amount is required" />
                            </td>
                        </tr>


                        <tr>
                            <th>Reservation Date time</th>
                            <td>
                                
                            <input type = "date" name="reservationdatetimedj" id="reservationdatetimedj" value={this.state.reservationdatetimedj} onChange={this.handleChange}  />
               
                            </td>
                        </tr>

  
                        <tr>
                            <th>Reservation Notes</th>
                            <td>

                <TextInput
                    value={this.state.reservationnotesdj}
                    uniqueName="reservationnotesdj"
                    textArea={false}
                    required={false}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'reservationnotesdj')}
                    errorMessage=""
                    emptyMessage="" />
                            </td>
                        </tr>
        

                        <tr>
                            <th> Reservation Time</th>
                            <td>
                            <SelectListTeeTime data = {this.state.teeTimedata} />

                            </td>
                            </tr>

                    </tbody>
                </table>

                <input type = "submit" value = "Insert Reservation"/>
               
            </form>
        );
    }
});
var ReservationPrice = React.createClass({
    render: function () {
        var reservationPriceNodes = this.props.data.map(function (price) {
            //map the data to individual donations
            return (
                <TeePrice                   
                    key= {price.dbTeeTimePricedj}
                    value= {price.dbTeeTimePricedj}
                    resprice= {price.dbTeeTimePricedj}
                >
                </TeePrice>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <td>
               {reservationPriceNodes}
            </td>
        );
    }
});



var TeePrice = React.createClass({

    render: function () {
        //display an individual donation

        return (
                            <p>
                              {this.props.resprice} 
                            </p>
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
        var optionNodes = this.props.data.map(function(resPlayer){
                return(
                    <option
                        key = {resPlayer.dbPlayerIDdj}
                        value = {resPlayer.dbPlayerIDdj}
                    >
                        {resPlayer.dbPlayerNamedj}
                    </option>
                );
        });
        return(
            <select name = "resplayerdj" id = "resplayerdj">
                <option value= "0">Choose a Player</option>
                {optionNodes}
            </select>
        );
    }
});


var SelectListTeeTime = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(teeTime){
                return(
                    <option
                        key = {teeTime.dbTeeTimeIDdj}
                        value = {teeTime.dbTeeTimeIDdj }
                    >
                        {teeTime.dbTeeTimeNumberdj}
                    </option>
                );
        });

        return(
            <select name = "resteetime" id = "resteetime">
                <option value= "0">Choose a time</option>
                {optionNodes}
            </select>
        );
    }
});


ReactDOM.render(
    <ReservationBox/>,
    document.getElementById('content')
);
