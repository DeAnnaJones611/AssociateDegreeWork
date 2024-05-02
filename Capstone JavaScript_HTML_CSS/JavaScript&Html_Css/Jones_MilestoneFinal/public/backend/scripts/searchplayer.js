var PlayerBox = React.createClass({
    getInitialState: function () {
        return { data: [] , 
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
    loadPlayerFromServer: function () {
        $.ajax({
            url: '/getpla/',
            data: {
                'playernamedj': playernamedj.value,
                'playerbirthdaydj': playerbirthdaydj.value,
                'playeremaildj': playeremaildj.value,
                'playerphonedj': playerphonedj.value,
                'playernotesdj': playernotesdj.value,
                'playerrewardsdj': plarewarddj.value,
                'playeractive': plaactive.value,
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
            this.loadPlayerFromServer();
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
                <h1>Search Player</h1>
                <Playerform2 onPlayerSubmit={this.loadPlayerFromServer} />
                <br />
                <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Name</th>
                                <th> Birthday</th>
                                <th> Email</th>
                                <th>Phone</th>
                                <th>Notes</th>
                                <th>Rewards</th>
                                <th>Active</th>
                            </tr>
                         </thead>
                        <PlayerList data={this.state.data} />
                    </table>
                
            </div>
        );
        }

    }
});

var Playerform2 = React.createClass({
    getInitialState: function () {
        return {
            playernamedj: "",
            playerbirthdaydj: "",
            playeremaildj: "",
            playerphonedj: "",
            playernotesdj: "",
            data:[],
            activedata:[],
        };
    },
    handleOptionChange: function(e){
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

    componentDidMount: function() {
        this.loadPlayerRewards();
        this.loadActive();
    },

    handleSubmit: function (e) {
        e.preventDefault();

        var playernamedj = this.state.playernamedj.trim();
        var playerbirthdaydj = this.state.playerbirthdaydj.value;
        var playeremaildj = this.state.playeremaildj.trim();
        var playerphonedj = this.state.playerphonedj.trim();
        var playernotesdj = this.state.playernotesdj.trim();
        var playerrewardsdj = plarewarddj.value;
        var playeractive= plaactive.value;

        this.props.onPlayerSubmit({ 
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
            <form onSubmit={this.handleSubmit}>
                
                <table>
                    <tbody>
                        <tr>
                            <th>Player Name </th>
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
        );
    }
});

var PlayerList = React.createClass({
    render: function () {
        var playerNodes = this.props.data.map(function (player) {
            //map the data to individual donations
            return (
                <Player
                    key={player.dbPlayerIDdj}
                    plakey={player.dbPlayerIDdj}
                    planame={player.dbPlayerNamedj}
                    plabirthday = {player.dbPlayerBirthdaydj}
                    plaemail={player.dbPlayerEmaildj}
                    plaphone={player.dbPlayerPhonedj}
                    planotes={player.dbPlayerNotesdj}
                    plareward = {player.dbPlayerRewardNamedj}
                    plaactive = {player.StatusName}
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

    render: function () {
        //display an individual donation

        return (

            <tr>
                            <td>
                                {this.props.plakey} 
                            </td>
                            <td>
                                {this.props.planame}
                            </td>
                            <td>
                                {this.props.plabirthday}
                            </td>
                            <td>
                                {this.props.plaemail}
                            </td>
                            <td>
                                {this.props.plaphone}
                            </td>
                            <td>
                                {this.props.planotes}
                            </td>

                            <td>
                                {this.props.plareward}
                            </td>
                            <td>
                                {this.props.plaactive}
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
                <option value= "0"></option>
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
                <option value= "3">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});

ReactDOM.render(
    <PlayerBox />,
    document.getElementById('content')
);

