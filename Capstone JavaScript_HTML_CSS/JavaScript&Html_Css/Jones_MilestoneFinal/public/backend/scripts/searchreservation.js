var ReservationBox = React.createClass({
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
    loadReservationFromServer: function () {


        $.ajax({
            url: '/getres/',
            data: {
                'reservationnamedj' :  reservationnamedj.value,
                'reservationplayeramountdj': reservationplayeramountdj.value,
                'reservationdatetimedj': reservationdatetimedj.value,
                'reservationpricedj': reservationpricedj.value,
                'reservationnotesdj': reservationnotesdj.value,
                'reservationplayerdj': resplayerdj.value,
                'reservationactive': resactive.value,
                'reservationteetime':resteetime.value,
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
            this.loadReservationFromServer();
        }
       // setInterval(this.loadCustomersFromServer, this.props.pollInterval);
    },

    render: function () {
        if (this.state.viewthepage == 0 ||  this.state.viewthepage == 3){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                   return (
            <div>
                <h1>Search Reservation</h1>
                <Reservationform2 onPReservationSubmit={this.loadReservationFromServer} />
                <br />
                <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Name</th>
                                <th> Amount</th>
                                <th> Date Time</th>

                                <th>Price</th>
                                <th>Player</th>
                                <th>Notes</th>
                                <th>Active</th>
                                <th>Tee Time</th>
                            </tr>
                         </thead>
                        <ReservationList data={this.state.data} />
                    </table>
                
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
            reservationpricedj:"",
            reservationnotesdj: "",
            data:[],
            activedata:[],
            teeTimedata:[],
        };
    },

    handleChange:function(e){
        this.setState({
            reservationdatetime: e.target.value,
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
        this.loadActive();
        this.TeePrices();
        this.loadTeetimes();
    },

    handleSubmit: function (e) {
        e.preventDefault();

        var reservationnamedj =  this.state.reservationnamedj.trim();
        var reservationplayeramountdj =  this.state.reservationplayeramountdj.trim();
        var reservationdatetimedj = this.state.reservationdatetimedj.trim();
        var reservationnotesdj =  this.state.reservationnotesdj.trim();
        var reservationpricedj = this.state.reservationpricedj.trim();
        var reservationplayerdj = resplayerdj.value;
        var reservationactive = resactive.value;
        var reservationteetime = resteetime.value;

        this.props.onPReservationSubmit({
            reservationnamedj:reservationnamedj, 
            reservationplayeramountdj: reservationplayeramountdj,
            reservationdatetimedj: reservationdatetimedj,
            reservationpricedj: reservationpricedj,
            reservationplayerdj: reservationplayerdj,
            reservationnotesdj: reservationnotesdj,
            reservationactive:reservationactive,
            reservationteetime:reservationteetime,
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
                            <input type = "date" name="reservationdatetimedj" id="reservationdatetimedj" value={this.state.reservationdatetimedj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Reservation Price</th>
                            <td>
                                <input type="text"  name="reservationpricedj" id="reservationpricedj" value={this.state.reservationpricedj} onChange={this.handleChange} />
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
                            <input type="text" name="reservationnotesdj" id="reservationnotesdj" value={this.state.reservationnotesdj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th> Reservation Active</th>
                            <td>
                            <SelectListActive data = {this.state.activedata}/>

                            </td>
                            </tr>
                            <tr>
                            <th> Reservation Time</th>
                            <td>
                            <SelectListTeeTime data = {this.state.teeTimedata} onChange={this.TeePrices}/>

                            </td>
                            </tr>
                    </tbody>
                </table>
                <input type="submit" value="Search Reservation" />

            </form>
        );
    }
});

var ReservationList = React.createClass({
    render: function () {
        var reservationNodes = this.props.data.map(function (reservation) {
            //map the data to individual donations
            return (
                <Reservation
                    key={reservation.dbReservationIDdj }
                    reskey={reservation.dbReservationIDdj }
                    resname = {reservation.dbReservationNamedj}
                    resplayeramount={reservation.dbReservationPlayerAmountdj}
                    resdatetime = {reservation.dbReservationDateTimedj}
                    resprice={reservation.dbTeeTimePricedj}
                    resplayer={reservation.dbPlayerNamedj}
                    resnotes={reservation.dbReservationNotesdj}
                    resactive={reservation.StatusName}
                    restee={reservation.dbTeeTimeNumberdj}
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
});


var ReservationPrice = React.createClass({
    render: function () {
        var reservationPriceNodes = this.props.data.map(function (price) {
            //map the data to individual donations
            return (
                <TeePrice

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


var Reservation = React.createClass({

    render: function () {
        //display an individual donation

        return (

            <tr>
                            <td>
                                {this.props.reskey} 
                            </td>
                            <td>
                                {this.props.resname}
                            </td>
                            <td>
                                {this.props.resplayeramount}
                            </td>
                            <td>
                                {this.props.resdatetime}
                            </td>
                            <td>
                                {this.props.resprice}
                            </td>
                            <td>
                                {this.props.resplayer}
                            </td>

                            <td>
                                {this.props.resnotes}
                            </td>
                            <td>
                                {this.props.resactive}
                            </td>
                            <td>
                                {this.props.restee}
                            </td>
                </tr>
        );
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


var SelectListActive = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(resActive){
                return(
                    <option
                        key = {resActive.Statusid }
                        value = {resActive.Statusid }
                    >
                        {resActive.StatusName}
                    </option>
                );
        });
        return(
            <select name = "resactive" id = "resactive">
                <option value= "3">Choose an Activity</option>
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
    <ReservationBox />,
    document.getElementById('content')
);

