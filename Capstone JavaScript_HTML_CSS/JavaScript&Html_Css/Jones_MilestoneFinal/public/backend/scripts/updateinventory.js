var InventoryBox = React.createClass({
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
    loadInventoryFromServer: function () {


        $.ajax({
            url: '/getinventory',
            data: {
                'inventoryid': inventoryid.value,
                'inventorynamedj': inventorynamedj.value,
                'inventorydescriptiondj': inventorydescriptiondj.value,
                'inventoryamountdj': inventoryamountdj.value,
                'inventorysectiondj': invensectiondj.value,
                'inventoryproductdj': invenproductdj.value,
                'inventoryactive' : invenactive.value,
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
    updateSingleInvFromServer: function (inventory) {
        
        $.ajax({
            url: '/updatesingleinv',
            dataType: 'json',
            data: inventory,
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
                   this.loadInventoryFromServer();
        }

       // setInterval(this.loadEmployeesFromServer, this.props.pollInterval);
    },

    render: function () {
        if (this.state.viewthepage == 0 || this.state.viewthepage != 2){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                    return (
            <div>
                <h1>Update Inventory</h1>
                <Inventoryform2 onInventorySubmit={this.loadInventoryFromServer} />
                <br />
                <div id = "theresults">
                    <div id = "theleft">
                    <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Product</th>
                                <th>Inventory Activity</th>
                                <th></th>
                            </tr>
                         </thead>
                        <InventoryList data={this.state.data} />
                    </table>
                    </div>
                    <div id="theright">
                        <InventoryUpdateform onUpdateSubmit={this.updateSingleInvFromServer} />
                    </div>                
                </div>
            </div>
        );
        }

    }
});

var Inventoryform2 = React.createClass({
    getInitialState: function () {
        return {
            inventorykey: "",
            inventoryid: "",
            inventorynamedj:"",
            inventorydescriptiondj: "",
            inventoryamountdj:"",
            data:[],
            productdata:[],
            activedata:[],

        };
    },
    handleOptionChange: function (e) {
        this.setState({
            selectedOption: e.target.value
        });
    },
    loadProducts: function (){
        $.ajax({    
            url: '/getproducts',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ productdata: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },
    loadInventorySection: function (){
        $.ajax({    
            url: '/getinventorysection',        
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
        this.loadProducts();
        this.loadInventorySection();
        this.loadActive();
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var inventoryid = this.state.inventoryid.trim();
        var inventorynamedj =  this.state.inventorynamedj.trim();
        var inventorydescriptiondj = this.state.inventorydescriptiondj.trim();
        var inventoryamountdj = this.state.inventoryamountdj.trim();
        var inventorysectiondj = invensectiondj.value;
        var inventoryproductdj = invenproductdj.value;
        var inventoryactive = invenactive.value;

        this.props.onInventorySubmit({ 
            inventoryid:inventoryid,
            inventorynamedj:inventorynamedj,
            inventorydescriptiondj: inventorydescriptiondj,
            inventoryamountdj: inventoryamountdj,
            inventorysectiondj: inventorysectiondj,
            inventoryproductdj: inventoryproductdj,
            inventoryactive:inventoryactive,
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
                <h2>Inventory</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Inventory ID</th>
                            <td>
                                <input type="text" name="inventoryid" id="inventoryid" value={this.state.inventoryid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Inventory Name</th>
                            <td>
                                <input type="text" name="inventorynamedj" id="inventorynamedj" value={this.state.inventorynamedj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                        <th>Inventory Description </th>
                            <td>
                                <input type="text" name="inventorydescriptiondj" id="inventorydescriptiondj" value={this.state.inventorydescriptiondj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Inventory Amount</th>
                            <td>
                            <input type="text" name="inventoryamountdj" id="inventoryamountdj" value={this.state.inventoryamountdj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Inventory Product
                            </th>
                            <td>
                                <SelectProduct data = {this.state.productdata}/>
                            </td>
                        </tr>
                       

                        <tr>
                            <th>
                                Inventory Section
                            </th>
                            <td>
                                <SelectList data = {this.state.data}/>
                            </td>
                        </tr>
                        <tr>
                            <th> Inventory Active</th>
                            <td>
                            <SelectListActive data = {this.state.activedata}/>

                            </td>
                            </tr>
                    </tbody>
                </table>
                <input type="submit" value="Search Inventory" />

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

var InventoryUpdateform = React.createClass({
    getInitialState: function () {
        return {
            upinventorykey: "",
            upinventoryid: "",
            upinventoryname:"",
            upinventorydescription: "",
            upinventoryamount:"",
            updata:[],
            upproductdata:[],
            upactivedata:[],
        };
    },
    loadProducts: function (){
        $.ajax({    
            url: '/getproducts',        
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ upproductdata: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    });
    },
    loadInventorySection: function (){
        $.ajax({    
            url: '/getinventorysection',        
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
    componentDidMount: function(){
        this.loadProducts();
        this.loadInventorySection();
        this.loadActive();
    },
    handleUpSubmit: function (e) {
        e.preventDefault();

        var upinventorykey = upinvenkey.value;
        var upinventoryid = upinvenid.value;
        var upinventorydescription = upinvendes.value;
        var upinventoryname = upinvenname.value;
        var upinventoryamount = upinvenamount.value;
        var upinventoryproduct = upinvenproduct.value;
        var upinventorysection = upinvensection.value;
        var upinventoryactive = upinvenactive.value


        this.props.onUpdateSubmit({
            upinventorykey: upinventorykey,
            upinventoryid: upinventoryid,
            upinventorydescription: upinventorydescription,
            upinventoryname: upinventoryname,
            upinventoryamount: upinventoryamount,
            upinventoryproduct: upinventoryproduct,
            upinventorysection: upinventorysection,
            upinventoryactive:upinventoryactive,
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
                            <th>Inventory ID</th>
                            <td>
                                <input type="text" name="upinvenid" id="upinvenid" value={this.state.upinvenid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                        <th>Inventory Name </th>
                            <td>
                                <input type="text" name="upinvenname" id="upinvenname" value={this.state.upinvenname} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                        <th>Inventory Description </th>
                            <td>
                                <input type="text" name="upinvendes" id="upinvendes" value={this.state.upinvendes} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Inventory Amount</th>
                            <td>
                            <input type="text" name="upinvenamount" id="upinvenamount" value={this.state.upinvenamount} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Inventory Product
                            </th>
                            <td>
                                <UpdateSelectProduct data = {this.state.upproductdata}/>
                            </td>
                        </tr>
                       

                        <tr>
                            <th>
                                Inventory Section
                            </th>
                            <td>
                                <UpdateSelectList data = {this.state.updata}/>
                            </td>
    </tr>
    <tr>
                            <th> Inventory Active</th>
                            <td>
                            <SelectListActive data = {this.state.upactivedata}/>

                            </td>
                            </tr>
</tbody>
                        </table><br />
                        <input type="hidden" name="upinvenkey" id="upinvenkey" onChange={this.handleUpChange} />
                        <input type="submit" value="Update Player" />
                    </form>
                </div>
            </div>
        );
    }
});

var InventoryList = React.createClass({
    render: function () {
        var inventoryNodes = this.props.data.map(function (invnetory) {
            return (
                <Inventory
                    key={invnetory.dbInventoryIDdj}
                    invkey={invnetory.dbInventoryIDdj}
                    invid={invnetory.dbInventoryIDdj}
                    inname={invnetory.dbInventoryNameddj}
                    invdes={invnetory.dbInventoryDescriptiondj}
                    invproduct={invnetory.dbInventoryProductdj}

                >
                </Inventory>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {inventoryNodes}
            </tbody>
        );
    }
});

var Inventory = React.createClass({
    getInitialState: function () {
        return {
            upinvenkey: "",
            singledata: []
        };
    },
    updateRecord: function (e) {
        e.preventDefault();
        var theupinvkey = this.props.invkey;
        
        this.loadSingleInv(theupinvkey);
    },
    loadSingleInv: function (theupinvkey) {
        $.ajax({
            url: '/getsingleinv',
            data: {
                'upinvenkey': theupinvkey
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ singledata: data });
                console.log(this.state.singledata);
                var populateInv = this.state.singledata.map(function (inventory) {
                    upinvenkey.value = theupinvkey;
                    upinvenid.value =inventory.dbInventoryIDdj;
                    upinvenname.value = inventory.dbInventoryNameddj;
                    upinvendes.value = inventory.dbInventoryDescriptiondj;
                    upinvenamount.value = inventory.dbInvetoryAmountdj;
                    upinvenproduct.value = inventory.dbInventoryProductdj;                    
                    upinvensection.value = inventory.dbInventorySectiondj;
                    upinvenactive.value = inventory.dbInventoryActivedj;
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
                                {this.props.invkey} 
                            </td>
                            <td>
                                {this.props.invid}
                            </td>
                            <td>
                                {this.props.inname}
                            </td>
                            <td>
                                {this.props.invdes}
                            </td>
                            <td>
                                {this.props.invproduct}
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

var SelectProduct = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(invenProduct){
                return(
                    <option
                        key = {invenProduct.dbProductIDdj}
                        value = {invenProduct.dbProductIDdj}
                    >
                        {invenProduct.dbProductNamedj}
                    </option>
                );
        });
        return(
            <select name = "invenproductdj" id = "invenproductdj">
                <option value= "0">Choose a Product</option>
                {optionNodes}
            </select>
        );
    }
});




var SelectList = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(invenSection){
                return(
                    <option
                        key = {invenSection.dbInventorySectionIDdj}
                        value = {invenSection.dbInventorySectionIDdj}
                    >
                        {invenSection.dbInventorySectionNamedj}
                    </option>
                    
                );
        });
        return(
            <select name = "invensectiondj" id = "invensectiondj">
                <option value= "0">Choose a Section</option>
                {optionNodes}
            </select>
        );
    }
});

var SelectListActive = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(invenActive){
                return(
                    <option
                        key = {invenActive.Statusid }
                        value = {invenActive.Statusid }
                    >
                        {invenActive.StatusName}
                    </option>
                );
        });
        return(
            <select name = "invenactive" id = "invenactive">
                <option value= "3">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});





var UpdateSelectProduct = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(invenProduct){
                return(
                    <option
                        key = {invenProduct.dbProductIDdj}
                        value = {invenProduct.dbProductIDdj}
                    >
                        {invenProduct.dbProductNamedj}
                    </option>
                );
        });
        return(
            <select name = "upinvenproduct" id = "upinvenproduct">
                <option value= "0">Choose a Product</option>
                {optionNodes}
            </select>
        );
    }
});




var UpdateSelectList = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(invenSection){
                return(
                    <option
                        key = {invenSection.dbInventorySectionIDdj}
                        value = {invenSection.dbInventorySectionIDdj}
                    >
                        {invenSection.dbInventorySectionNamedj}
                    </option>
                );
        });
        return(
            <select name = "upinvensection" id = "upinvensection">
                <option value= "0">Choose a Section</option>
                {optionNodes}
            </select>
        );
    }
});


var SelectListActive = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(invenActive){
                return(
                    <option
                        key = {invenActive.Statusid }
                        value = {invenActive.Statusid }
                    >
                        {invenActive.StatusName}
                    </option>
                );
        });
        return(
            <select name = "upinvenactive" id = "upinvenactive">
                <option value= "3">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});
ReactDOM.render(
    <InventoryBox />,
    document.getElementById('content')
);