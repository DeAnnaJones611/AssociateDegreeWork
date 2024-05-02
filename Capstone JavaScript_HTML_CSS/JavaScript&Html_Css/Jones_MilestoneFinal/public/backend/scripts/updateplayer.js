var PlayerBox = React.createClass({
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
    loadPlayerFromServer: function () {
        $.ajax({
            url: '/getpla/',
            data: {
                'playerid': playerid.value,
                'playernamedj': playernamedj.value,
                'playerbirthdaydj': playerbirthdaydj.value,
                'playeremaildj': playeremaildj.value,
                'playerphonedj': playerphonedj.value,
                'playernotesdj': playernotesdj.value,
                'playerrewardsdj': plarewarddj.value,
                'playeractive': plactive.value,
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
    updateSinglePlaFromServer: function (player) {
        
        $.ajax({
            url: '/upsinpla',
            dataType: 'json',
            data: player,
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
            this.loadPlayerFromServer();
        }
        
       // setInterval(this.loadEmployeesFromServer, this.props.pollInterval);
    },

    render: function () {
        //|| this.state.viewpage != 2
        if (this.state.viewthepage == 0 || this.state.viewthepage != 2){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                   return (
            <div>
                <h1>Update Player</h1>
                <Playerform2 onPlayerSubmit={this.loadPlayerFromServer} />
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
                        <PlayerList data={this.state.data} />
                    </table>
                    </div>
                    <div id="theright">
                        <PlayerUpdateform onUpdateSubmit={this.updateSinglePlaFromServer} />
                    </div>                
                </div>
            </div>
        );
        }
 
    }
});

var Playerform2 = React.createClass({
    getInitialState: function () {
        return {
            playerkey: "",
            playerid: "",
            playernamedj: "",
            playerbirthdaydj: "",
            playeremaildj: "",
            playerphonedj: "",
            playernotesdj: "",
            data:[],           
            activedata:[],
        };
    },
    handleOptionChange: function (e) {
        this.setState({
            selectedOption: e.target.value
        });
    },
    loadPlayerRewards: function(){
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
        this.loadPlayerRewards();
        this.loadActive();
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var playerid = this.state.playerid.trim();
        var playernamedj = this.state.playernamedj.trim();
        var playerbirthdaydj = this.state.playerbirthdaydj.value;
        var playeremaildj = this.state.playeremaildj.trim();
        var playerphonedj = this.state.playerphonedj.trim();
        var playernotesdj = this.state.playernotesdj.trim();
        var playerrewardsdj = plarewarddj.value;
        var playeractive= plaactive.value;

        this.props.onPlayerSubmit({ 
            playerid:playerid,
            playernamedj: playernamedj,
            playerbirthdaydj: playerbirthdaydj,
            playeremaildj: playeremaildj,
            playerphonedj: playerphonedj,
            playernotesdj: playernotesdj,
            playerrewardsdj: playerrewardsdj,
            playeractive:playeractive,
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
                <h2>Player</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Player ID</th>
                            <td>
                                <input type="text" name="playerid" id="playerid" value={this.state.playerid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Name</th>
                            <td>
                            <input type="text" name="playernamedj" id="playernamedj" value={this.state.playernamedj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                        <th>Player Birthday</th>
                            <td>
                            <input type = "date" name="playerbirthdaydj" id="playerbirthdaydj" value={this.state.playerbirthdaydj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Email</th>
                            <td>
                                <input name="playeremaildj" id="playeremaildj" value={this.state.playeremaildj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Phone</th>
                            <td>
                                <input name="playerphonedj" id="playerphonedj" value={this.state.playerphonedj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Player Notes</th>
                            <td>
                                <input name="playernotesdj" id="playernotesdj" value={this.state.playernotesdj} onChange={this.handleChange} />
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
                            <th> Player Active</th>
                            <td>
                            <SelectListActive data = {this.state.activedata}/>

                            </td>
                            </tr>
                    </tbody>
                </table>
                <input type="submit" value="Search Player" />

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

var PlayerUpdateform = React.createClass({
    getInitialState: function () {
        return {
            upplayerkey: "",
            upplayerid: "",
            upplayername: "",
            upplayerbirthday: "",
            upplayeremail: "",
            upplayerphone: "",
            upplayernotes: "",
            updata: [],
            upactivedata:[],
        };
    },
    handleUpOptionChange: function (e) {
        this.setState({
            upselectedOption: e.target.value
        });
    },
    loadPlayerRewards: function(){
        $.ajax({
            url: '/getplayerreward',
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
    
    loadActive: function (){
        $.ajax({    
            url: '/getactive',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ upactivedata: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },

    componentDidMount: function() {
        this.loadPlayerRewards();
        this.loadActive();
    },
    handleUpSubmit: function (e) {
        e.preventDefault();

        var upplayerkey = upplakey.value;
        var upplayerid = upplaid.value;
        var upplayername = upplaname.value;
        var upplayerbirthday = upplabirthday.value;
        var upplayeremail = upplaemail.value;
        var upplayerphone = upplaphone.value;
        var upplayernotes = upplanotes.value;
        var upplayerrewards = upplareward.value;
        var upplayeractive= upplaactive.value;


        this.props.onUpdateSubmit({
            upplayerkey: upplayerkey,
            upplayerid: upplayerid,
            upplayername: upplayername,
            upplayerbirthday: upplayerbirthday,
            upplayeremail: upplayeremail,
            upplayerphone: upplayerphone,
            upplayernotes: upplayernotes,
            upplayerrewards: upplayerrewards,
            upplayeractive:upplayeractive,
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
        <th>Player ID</th>
        <td>
<input type="text" name="upplaid" id="upplaid" value={this.state.upplaid} onChange={this.handleUpChange} />
        </td>
    </tr>
    <tr>
        <th>Player Name</th>
        <td>
<input name="upplaname" id="upplaname" value={this.state.upplaname} onChange={this.handleUpChange} />
        </td>
    </tr>
<tr>
         <th>Player Birthday</th>
            <td>
            <input type = "date" name="upplabirthday" id="upplabirthday" value={this.state.upplabirthday} onChange={this.handleUpChange}  />
             </td>
</tr>
    <tr>
        <th>Player Email</th>
        <td>
<input name="upplaemail" id="upplaemail" value={this.state.upplaemail} onChange={this.handleUpChange} />
        </td>
    </tr>
    <tr>
        <th>Player Phone</th>
        <td>
<input name="upplaphone" id="upplaphone" value={this.state.upplaphone} onChange={this.handleUpChange} />
        </td>
    </tr>
    <tr>
        <th>Player Notes</th>
        <td>
<input name="upplanotes" id="upplanotes" value={this.state.upplanotes} onChange={this.handleUpChange} />
        </td>
    </tr>
<tr>
        <th>
            Player Rewards
        </th>
        <td>
            <SelectUpdateList data={this.state.updata} />
        </td>
    </tr>
    <tr>
                            <th> Player Active</th>
                            <td>
                            <SelectUdateListActive data = {this.state.upactivedata}/>

                            </td>
                            </tr>
</tbody>
                        </table><br />
                        <input type="hidden" name="upplakey" id="upplakey" onChange={this.handleUpChange} />
                        <input type="submit" value="Update Player" />
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


var PlayerList = React.createClass({
    render: function () {
        var playerNodes = this.props.data.map(function (player) {
            return (
                <Player
                    key={player.dbPlayerIDdj }
                    plakey={player.dbPlayerIDdj }
                    plaid={player.dbPlayerIDdj }
                    planame={player.dbPlayerNamedj}
                    plaemail={player.dbPlayerEmaildj}
                >
                </Player>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {playerNodes}
            </tbody>
        );
    }
});

var Player = React.createClass({
    getInitialState: function () {
        return {
            upplakey: "",
            singledata: []
        };
    },
    updateRecord: function (e) {
        e.preventDefault();
        var theupplakey = this.props.plakey;
        
        this.loadSinglePla(theupplakey);
    },
    loadSinglePla: function (theupplakey) {
        $.ajax({
            url: '/getsinglepla',
            data: {
                'upplakey': theupplakey
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ singledata: data });
                console.log(this.state.singledata);
                var populatePla = this.state.singledata.map(function (player) {
                    upplakey.value = theupplakey;
                    upplaid.value =player.dbPlayerIDdj;
                    upplaname.value = player.dbPlayerNamedj;
                    upplabirthday.value = formatDate(Date(player.dbPlayerBirthdaydj));
                    upplaemail.value = player.dbPlayerEmaildj;
                    upplaphone.value = player.dbPlayerPhonedj;
                    upplanotes.value = player.dbPlayerNotesdj;

                    upplareward.value = player.dbPlayerRewardsdj;
                    upplayeractive.value = player.dbPlayerActivedj;

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
                                {this.props.plakey} 
                            </td>
                            <td>
                                {this.props.plaid}
                            </td>
                            <td>
                                {this.props.planame}
                            </td>
                            <td>
                                {this.props.plaemail}
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
            <select name = "plarewarddj" id = "plarewarddj">
                <option value= "0">Select Rewards</option>
                {optionNodes}
            </select>
        );
    }
});

var SelectUpdateList = React.createClass({
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
            <select name = "upplareward" id = "upplareward">
                <option value= "0">Select Rewards</option>
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


var SelectUdateListActive = React.createClass({
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
            <select name = "upplaactive" id = "upplaactive">
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