var ReservationBox = React.createClass({
    getInitialState: function () {
        return { data: [] , 
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
    loadReservationFromServer: function () {


        $.ajax({
            url: '/getres/',
            data: {
                'reservationid': reservationid.value,


                'reservationnamedj': reservationnamedj.value,
                'reservationplayeramountdj':reservationplayeramountdj.value,
                'reservationdatetimedj': reservationdatetimedj.value,
                'reservationpricedj': reservationpricedj.value,
                'reservationnotesdj': reservationnotesdj.value,
                'reservationplayerdj': resplayer.value,

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
    updateSingleResFromServer: function (reservation) {
        
        $.ajax({
            url: '/updatesingleres',
            dataType: 'json',
            data: reservation,
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
            this.loadReservationFromServer();
        }
    },

    render: function () {
        if (this.state.viewthepage == 0 || this.state.viewpage == 3 || this.state.viewpage == 4){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                    return (
            <div>
                <h1>Update Reservation</h1>
                <Reservationform2 onReservationSubmit={this.loadReservationFromServer} />
                <br />
                <div id = "theresults">
                    <div id = "theleft">
                    <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>ID</th>
                                <th>Player</th>
                                <th></th>
                            </tr>
                         </thead>
                        <ReservationList data={this.state.data} />
                    </table>
                    </div>
                    <div id="theright">
                        <ReservationUpdateform onUpdateSubmit={this.updateSingleResFromServer} />
                    </div>                
                </div>
            </div>
        );
        }

    }
});

var Reservationform2 = React.createClass({
    getInitialState: function () {
        return {
            reservationkey: "",
            reservationid: "",
            reservationnamedj: "",
            reservationplayeramountdj: "",
            reservationdatetimedj: "",
            reservationpricedj:"",
            reservationnotesdj: "",
            data:[],
        };
    },
    handleOptionChange: function (e) {
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
    componentDidMount: function(){
        this.loadPlayer();
    },


    handleSubmit: function (e) {
        e.preventDefault();
        var reservationid = this.state.reservationid.trim();
        var reservationnamedj = this.state.reservationnamedj.trim();
        var reservationplayeramountdj =  this.state.reservationplayeramountdj.trim();
        var reservationdatetimedj = this.state.reservationdatetimedj.trim();
        var reservationnotesdj =  this.state.reservationnotesdj.trim();
        var reservationpricedj = this.state.reservationpricedj.trim();
        var reservationplayerdj = resplayer.value;

        this.props.onReservationSubmit({ 
            reservationnamedj:reservationnamedj,
            reservationid:reservationid,
            reservationplayeramountdj: reservationplayeramountdj,
            reservationdatetimedj: reservationdatetimedj,
            reservationpricedj: reservationpricedj,
            reservationplayerdj: reservationplayerdj,
            reservationnotesdj: reservationnotesdj,
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
                <h2>Reservation</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Reservation ID</th>
                            <td>
                                <input type="text" name="reservationid" id="reservationid" value={this.state.reservationid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Name</th>
                            <td>
                                <input type="text" name="reservationnamedj" id="reservationnamedj" value={this.state.reservationnamedj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Player Amount</th>
                            <td>
                                <input type="text" name="reservationplayeramountdj" id="reservationplayeramountdj" value={this.state.reservationplayeramountdj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Date and Time</th>
                            <td>
                            <input type = "datetime-local" name="reservationdatetimedj" id="reservationdatetimedj" value={this.state.reservationdatetimedj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Price</th>
                            <td>
                                <input name="reservationpricedj" id="reservationpricedj" value={this.state.reservationpricedj} onChange={this.handleChange} />
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
                            <th>Reservation Notes</th>
                            <td>
                            <input name="reservationnotesdj" id="reservationnotesdj" value={this.state.reservationnotesdj} onChange={this.handleChange} />
                            </td>
                        </tr>

                    </tbody>
                </table>
                <input type="submit" value="Search Reservation" />

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

var ReservationUpdateform = React.createClass({
    getInitialState: function () {
        return {
            upreservationkey: "",
            upreservationid: "",
            upreservationdatetime: "",
            upreservationnotes: "",
            upreservationprice: "",
            updata: []
        };
    },
    handleUpOptionChange: function (e) {
        this.setState({
            upselectedOption: e.target.value
        });
    },
    loadPlayer: function (){
        $.ajax({    
            url: '/getplayer',        
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
        this.loadPlayer();
    },
    handleUpSubmit: function (e) {
        e.preventDefault();

        var upreservationkey = upreskey.value;
        var upreservationid = upresid.value;
        var upreservationname = upreservationname.value;
        var upreservationplayeramount = upresplayeramount.value;
        var upreservationdatetime = upresdatetime.value;
        var upreservationnotes = upresnotes.value;
        var upreservationprice = upresprice.value;
        var upreservationplayer = upresplayer.value;


        this.props.onUpdateSubmit({
            upreservationkey: upreservationkey,
            upreservationid: upreservationid,
            upreservationname:upreservationname,
            upreservationplayeramount:upreservationplayeramount,
            upreservationdatetime: upreservationdatetime,
            upreservationnotes: upreservationnotes,
            upreservationprice: upreservationprice,
            upreservationplayer: upreservationplayer,
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
                            <th>Reservation ID</th>
                            <td>
                                <input type="text" name="upresid" id="upresid" value={this.state.upresid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation name</th>
                            <td>
                                <input type="text" name="upreservationname" id="upreservationname" value={this.state.upreservationname} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Player Amount</th>
                            <td>
                                <input type="text" name="upresplayeramount" id="upresplayeramount" value={this.state.upresplayeramount} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Date and Time</th>
                            <td>
                            <input type = "date" name="upresdatetime" id="upresdatetime" value={this.state.upresdatetime} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Price</th>
                            <td>
                                <input name="upresprice" id="upresprice" value={this.state.upresprice} onChange={this.handleChange} />
                            </td>
                        </tr>

                        <tr>
                        <th>
                                Reservation Player
                            </th>
                                <td>
                                    <SelectUpdateList data={this.state.updata} />
                                 </td>
                            </tr>
                            <tr>
                            <th>Reservation Notes</th>
                            <td>
                            <input name="upresnotes" id="upresnotes" value={this.state.upresnotes} onChange={this.handleChange} />
                            </td>
                        </tr>
                    </tbody>
                        </table><br />
                        <input type="hidden" name="upreskey" id="upreskey" onChange={this.handleUpChange} />
                        <input type="submit" value="Update Reservation" />
                    </form>
                </div>
            </div>
        );
    }
});

var ReservationList = React.createClass({
    render: function () {
        var reservationNodes = this.props.data.map(function (reservation) {
            //map the data to individual donations
            return (
                <Reservation
                    key={reservation.dbReservationIDdj}
                    reskey={reservation.dbReservationIDdj}
                    resid={reservation.dbReservationIDdj}
                    resplayer={reservation.dbReservationPlayerdj}
                >
                </Reservation>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {reservationNodes}
            </tbody>
        );
    }
});;

var Reservation = React.createClass({
    getInitialState: function () {
        return {
            upreskey: "",
            singledata: []
        };
    },
    updateRecord: function (e) {
        e.preventDefault();
        var theupreskey = this.props.reskey;
        
        this.loadSingleRes(theupreskey);
    },
    loadSingleRes: function (theupreskey) {
        $.ajax({
            url: '/getsingleres',
            data: {
                'upreskey': theupreskey
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ singledata: data });
                console.log(this.state.singledata);
                var populateRes = this.state.singledata.map(function (reservation) {
                    upreskey.value = theupreskey;
                    upresid.value =reservation.dbReservationIDdj;
                    upreservationname.value = reservation.dbReservationNamedj;
                    upresplayeramount.value = reservation.dbReservationPlayerAmountdj;
                    upresdatetime.value = formatDate(Date(reservation.dbReservationDateTimedj));
                    upresprice.value = reservation.dbReservationPricedj;
                    upresnotes.value = reservation.dbReservationNotesdj;
                    upresplayer.value = reservation.dbReservationPlayerdj;

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
                                {this.props.reskey} 
                            </td>
                            <td>
                                {this.props.resid}
                            </td>
                            <td>
                                {this.props.resplayer}
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
            <select name = "resplayer" id = "resplayer">
                <option value= "0">Choose a Player</option>
                {optionNodes}
            </select>
        );
    }
});

var SelectUpdateList = React.createClass({
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
            <select name = "upresplayer" id = "upresplayer">
                <option value= "0">Choose a Player</option>
                {optionNodes}
            </select>
        );
    }
});

ReactDOM.render(
    <ReservationBox />,
    document.getElementById('content')
);