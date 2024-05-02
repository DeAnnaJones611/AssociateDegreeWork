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
    componentDidMount: function () {
        this.loadAllowLogin();
        if(this.state.viewthepage !=0){
            this.loadInventoryFromServer();
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
                <h1>Search Inventory</h1>
                <Inventoryform2 onInventorySubmit={this.loadInventoryFromServer} />
                <br />
                <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>name</th>
                                <th>Desciption</th>
                                <th> Amount</th>
                                <th> Section</th>
                                <th>Product</th>
                                <th>Active</th>

                            </tr>
                         </thead>
                        <InventoryList data={this.state.data} />
                    </table>
                
            </div>
        );
        }

    }
});

var Inventoryform2 = React.createClass({
    getInitialState: function () {
        return {
            inventorynamedj: "",
            inventorydescriptiondj: "",
            inventoryamountdj:"",
            data:[],
            productdata:[],
            activedata:[],
        };
    },
    handleOptionChange: function(e){
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

        var inventorynamedj =  this.state.inventorynamedj.trim();
        var inventorydescriptiondj =  this.state.inventorydescriptiondj.trim();
        var inventoryamountdj = this.state.inventoryamountdj.trim();
        var inventorysectiondj = invensectiondj.value;
        var inventoryproductdj = invenproductdj.value;
        var inventoryactive = invenactive.value

        this.props.onInventorySubmit({ 
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
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                            <th>Inventory Name </th>
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
        );
    }
});

var InventoryList = React.createClass({
    render: function () {
        var inventoryrNodes = this.props.data.map(function (inventory) {
            //map the data to individual donations
            return (
                <Inventory
                    key={inventory.dbInventoryIDdj }
                    invenkey={inventory.dbInventoryIDdj }
                    invenname={inventory.dbInventoryNameddj}
                    invendes={inventory.dbInventoryDescriptiondj}
                    invenamount = {inventory.dbInvetoryAmountdj}
                    invensection ={inventory.dbInventorySectionNamedj}
                    invenproduct={inventory.dbProductNamedj}
                    invenactive = {inventory.StatusName}
                >
                </Inventory>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {inventoryrNodes}
            </tbody>
        );
    }
});



var Inventory = React.createClass({

    render: function () {
        //display an individual donation

        return (

            <tr>
                            <td>
                                {this.props.invenkey} 
                            </td>
                            <td>
                                {this.props.invenname}
                            </td>
                            <td>
                                {this.props.invendes}
                            </td>
                            <td>
                                {this.props.invenamount}
                            </td>
                            <td>
                                {this.props.invensection}
                            </td>
                            <td>
                                {this.props.invenproduct}
                            </td>
                            <td>
                                {this.props.invenactive}
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

ReactDOM.render(
    <InventoryBox />,
    document.getElementById('content')
);

