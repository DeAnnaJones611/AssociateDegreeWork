var PurchaseBox = React.createClass({
    getInitialState: function () {
        return { data: [] , 
            viewthepage:0};
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
    loadPurchaseFromServer: function () {


        $.ajax({
            url: '/getpur/',
            data: {
                'purchasetotaldj': purchasetotaldj.value,
                'purchasedatetimedj': purchasedatetimedj.value,
                'purchaseuserdj': puruserdj.value,
                'purchaseplayerdj': purplayerdj.value,
                'purchasetypedj': purtypedj.value,
                'purchaseactive': puractive.value,
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
            this.loadPurchaseFromServer();
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
                <h1> Search Purchase</h1>
                <Purchaseform2 onPurchaseSubmit={this.loadPurchaseFromServer} />
                <br />
                <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Total</th>
                                <th> Date</th>
                                <th> User</th>
                                <th>Player</th>
                                <th>Type</th>
                                <th>Active</th>
                            </tr>
                         </thead>
                        <PurchaseList data={this.state.data} />
                    </table>
                
            </div>
        )
        }
;
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

    handleSubmit: function (e) {
        e.preventDefault();

        var purchasetotaldj =  this.state.purchasetotaldj.trim();
        var purchasedatetimedj = this.state.purchasedatetimedj.value;
        var purchaseuserdj = puruserdj.value;
        var purchaseplayerdj = purplayerdj.value;
        var purchasetypedj = purtypedj.value;
        var purchaseactive = puractive.value;

        this.props.onPurchaseSubmit({ 
            purchasetotaldj: purchasetotaldj,
            purchasedatetimedj: purchasedatetimedj,
            purchaseuserdj: purchaseuserdj,
            purchaseplayerdj: purchaseplayerdj,
            purchasetypedj: purchasetypedj,
            purchaseactive:purchaseactive,
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
                            <th>Purchase Total </th>
                            <td>
                                <input type="text" name="purchasetotaldj" id="purchasetotaldj" value={this.state.purchasetotaldj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Date</th>
                            <td>
                            <input type = "datetime-local" name="purchasedatetimedj" id="purchasedatetimedj" value={this.state.purchasedatetimedj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase User</th>
                            <td>
                            <SelectUser data = {this.state.userdata}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Player</th>
                            <td>
                            <SelectPlayer data = {this.state.playerdata}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Type</th>
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
                <input type="submit" value="Search Purchase" />

            </form>
        );
    }
});

var PurchaseList = React.createClass({
    render: function () {
        var purchaseNodes = this.props.data.map(function (purchase) {
            //map the data to individual donations
            return (
                <Purchase
                    key={purchase.dbPurchaseIDdj}
                    purkey={purchase.dbPurchaseIDdj}
                    purtotal={purchase.dbPurchaseTotaldj}
                    purdate = {purchase.dbPurchaseDateTimedj}
                    pureuser={purchase.dbUserNamedj}
                    purplayer={purchase.dbPlayerNamedj}
                    puretype={purchase.dbPurchaseTypeNamedj}
                    puractive = {purchase.StatusName}
                >
                </Purchase>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {purchaseNodes}
            </tbody>
        );
    }
});



var Purchase = React.createClass({

    render: function () {
        //display an individual donation

        return (

            <tr>
                            <td>
                                {this.props.purkey} 
                            </td>
                            <td>
                                {this.props.purtotal}
                            </td>
                            <td>
                                {this.props.purdate}
                            </td>
                            <td>
                                {this.props.pureuser}
                            </td>
                            <td>
                                {this.props.purplayer}
                            </td>
                            <td>
                                {this.props.puretype}
                            </td>
                            <td>
                                {this.props.puractive}
                            </td>

                </tr>
        );
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
        var optionNodes = this.props.data.map(function(purActive){
                return(
                    <option
                        key = {purActive.Statusid }
                        value = {purActive.Statusid }
                    >
                        {purActive.StatusName}
                    </option>
                );
        });
        return(
            <select name = "puractive" id = "puractive">
                <option value= "3">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});

ReactDOM.render(
    <PurchaseBox />,
    document.getElementById('content')
);

