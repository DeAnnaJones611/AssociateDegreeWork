var PurchaseBox = React.createClass({
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
    loadPurchaseFromServer: function () {


        $.ajax({
            url: '/getpur/',
            data: {
                'purhcaseid': purchaseid.value,
                'purchasetotaldj': purchasetotaldj.value,
                'purchasedatetimedj': purchasedatetimedj.value,
                'purchaseuserdj': puruserdj.value,
                'purchaseplayerdj': purplayerdj.value,
                'purchasetypedj': purtypedj.value,
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
    loadPurchaseFromServer: function (purchase) {
        
        $.ajax({
            url: 'updatepur',
            dataType: 'json',
            data: purchase,
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
            this.loadPurchaseFromServer();
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
                <h1>Update Purchase</h1>
                <Purchaseform2 onPurchaseSubmit={this.loadPurchaseFromServer} />
                <br />
                <div id = "theresults">
                    <div id = "theleft">
                    <table>
                    <thead>
                            <tr>
                                <th>Key</th>
                                <th> User</th>
                                <th>Player</th>
                            </tr>
                         </thead>
                        <PurchaseList data={this.state.data} />
                    </table>
                    </div>
                    <div id="theright">
                        <PurchaseUpdateform onUpdateSubmit={this.updateSinglePurFromServer} />
                    </div>                
                </div>
            </div>
        );
        }

    }
});

var Purchaseform2 = React.createClass({
    getInitialState: function () {
        return {
            purchaseid: "",
            purchasetotal: "",
            purchasedatetime: "",
            userdata:[],
            playerdata:[],
            data:[],
        };
    },
    handleOptionChange: function (e) {
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

    componentDidMount: function(){
        this.loadPurchaseTypes();
        this.loadPurchaseUser();
        this.loadPurchasePlayer();
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var purchaseid = this.state.purchaseid.trim();
        var purchasetotal =  this.state.purchasetotal.trim();
        var purchasedatetime = this.state.purchasedatetime.value;
        var purchaseuser = puruserdj.value;
        var purchaseplayer = purplayerdj.value;
        var purchasetype = purtypedj.value;

        this.props.onPurchaseSubmit({ 
            purchaseid:purchaseid,
            purchasetotal: purchasetotal,
            purchasedatetime: purchasedatetime,
            purchaseuser: purchaseuser,
            purchaseplayer: purchaseplayer,
            purchasetype: purchasetype,
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
                <h2>Purchase</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchase ID</th>
                            <td>
                                <input type="text" name="purchaseid" id="purchaseid" value={this.state.purchaseid} onChange={this.handleChange} />
                            </td>
                        </tr>
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

                       



                    </tbody>
                </table>
                <input type="submit" value="Search Purchase" />


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

var PurchaseUpdateform = React.createClass({
    getInitialState: function () {
        return {
            uppurchasekey: "",
            uppurchaseid: "",
            uppurchasetotal: "",
            uppurchasedatetime: "",
            uppurdatetimenoformate: "",
            upuserdata:[],
            upplayerdata:[],
            updata:[],
        };
    },
    handleUpOptionChange: function (e) {
        this.setState({
            upselectedOption: e.target.value
        });
    },
    loadPurchaseTypes: function (){
        $.ajax({    
            url: '/getpurchasetypes',        
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


    loadPurchaseUser: function (){
        $.ajax({    
            url: '/getuser',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ upuserdata: data });
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
                this.setState({ upplayerdata: data });
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
    },
    handleUpSubmit: function (e) {
        e.preventDefault();

        var uppurchasekey = uppurkey.value;
        var uppurchaseid = uppurid.value;
        var uppurchasetotal = uppurtotal.value;
        var uppurchasedatetime = uppurdatetime;
        var uppurchaseuser = uppuruser.value;
        var uppurchaseplayer = uppurplayer.value;
        var uppurchasetype = uppurtype.value;

        this.props.onUpdateSubmit({
            uppurchasekey: uppurchasekey,
            uppurchaseid: uppurchaseid,
            uppurchasetotal: uppurchasetotal,
            uppurchasedatetime: uppurchasedatetime,
            uppurchaseuser: uppurchaseuser,
            uppurchaseplayer: uppurchaseplayer,
            uppurchasetype: uppurchasetype,
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
                            <th>Purchase ID</th>
                            <td>
                                <input type="text" name="uppurid" id="uppurid" value={this.state.uppurid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Total </th>
                            <td>
                                <input type="text" name="uppurtotal" id="uppurtotal" value={this.state.uppurtotal} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Date</th>
                            <td>
                            <input type = "date" name="uppurdatetime" id="uppurdatetime" value={this.state.uppurdatetime} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase User</th>
                            <td>
                            <UpdateSelectUser data = {this.state.upuserdata}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Player</th>
                            <td>
                            <UpdateSelectPlayer data = {this.state.upplayerdata}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Purchase Type</th>
                            <td>
                                <UpdateSelectList data = {this.state.updata}/>
                            </td>
                        </tr>  

</tbody>
                        </table><br />
                        <input type="hidden" name="uppurkey" id="uppurkey" onChange={this.handleUpChange} />
                        <input type="submit" value="Update Purchase" />
                    </form>
                </div>
            </div>
        );
    }
});

var PurchaseList = React.createClass({
    render: function () {
        var purchaseNodes = this.props.data.map(function (purchase) {
            return (
                <Puchase
                    key={purchase.dbPurchaseIDdj }
                    purkey={purchase.dbPurchaseIDdj }
                    purid={purchase.dbPurchaseIDdj }
                    purplayer={purchase.dbPurchasePlayerdj}
                    puruser={purchase.dbPurchaseUserdj}
                >
                </Puchase>
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

var Puchase = React.createClass({
    getInitialState: function () {
        return {
            uppurkey: "",
            singledata: []
        };
    },
    updateRecord: function (e) {
        e.preventDefault();
        var theuppurkey = this.props.purkey;
        
        this.loadSinglePur(theuppurkey);
    },
    loadSinglePur: function (theuppurkey) {
        $.ajax({
            url: '/getsinglepur',
            data: {
                'uppurkey': theuppurkey
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ singledata: data });
                console.log(this.state.singledata);
                var populatePla = this.state.singledata.map(function (purchase) {
                    uppurkey.value = theuppurkey;
                    uppurid.value =purchase.dbPurchaseIDdj;
                    uppurtotal.value = purchase.dbPurchaseTotaldj;
                    uppurdatetime.value = formatDate(Date(purchase.dbPurchaseDateTimedj));
                    uppuruser.value = purchase.dbPurchaseUserdj;
                    uppurplayer.value = purchase.dbPurchasePlayerdj;
                    uppurtype.value = purchase.dbPurchaseTypedj;
                    //uppurdatetime.value = format(purchase.dbPurchaseDateTimedj);

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
                                {this.props.purkey} 
                            </td>
                            <td>
                                {this.props.purid}
                            </td>
                            <td>
                                {this.props.purplayer}
                            </td>
                            <td>
                                {this.props.puruser}
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
})





var UpdateSelectList = React.createClass({
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
            <select name = "uppurtype" id = "uppurtype">
                <option value= "0">Pick a Type</option>
                {optionNodes}
            </select>
        );
    }
});

var UpdateSelectUser = React.createClass({
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
            <select name = "uppuruser" id = "uppuruser">
                <option value= "0">Select  a User</option>
                {optionNodes}
            </select>
        );
    }
});

var UpdateSelectPlayer = React.createClass({
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
            <select name = "uppurplayer" id = "uppurplayer">
                <option value= "0">Select a Player</option>
                {optionNodes}
            </select>
        );
    }
})

ReactDOM.render(
    <PurchaseBox />,
    document.getElementById('content')
);