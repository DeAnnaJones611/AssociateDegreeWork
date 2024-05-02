var ProductBox = React.createClass({
    getInitialState: function () {
        return { data: []  , 
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
    loadProductFromServer: function () {

        $.ajax({
            url: '/getproid',
            data: {
                'productid': productid.value,
                'productnamedj': productnamedj.value,
                'productpricedj': productpricedj.value,
                'productvenderdj': productvenderdj.value,
                'producttypedj': protypedj.value
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
        
        console.log("Load product");

    },
    updateSingleProFromServer: function (product) {
        
        $.ajax({
            url: '/updateproduct',
            dataType: 'json',
            data: product,
            type: 'POST',
            cache: false,
            success: function (upsingledata) {
                this.setState({ upsingledata: upsingledata });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
       // window.location.reload(true);
        console.log("Single Update");
    },
    componentDidMount: function () {
        this.loadAllowLogin();
        if(this.state.viewthepage !=0){
            this.loadProductFromServer();
        }
        //this.updateSingleProFromServer();
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
                <h1>Update Products</h1>
                <Productform2 onProductSubmit={this.loadProductFromServer} />
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
                        <ProductList data={this.state.data} />
                    </table>
                    </div>
                    <div id="theright">
                        <ProductUpdateform onUpdateSubmit={this.updateSingleProFromServer} />
                    </div>                
                </div>
            </div>
        ); 
        }

    }
});

var Productform2 = React.createClass({
    getInitialState: function () {
        return {
            productkey :"",
            productid: "",
            productnamedj: "",
            productpricedj: "",
            productvenderdj:"",
            data:[],
        };
    },
    handleOptionChange: function (e) {
        this.setState({
            selectedOption: e.target.value
        });
    },
    loadProductTypes: function (){
        $.ajax({    
            url: '/getproducttypes',        
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
    componentDidMount: function() {
        this.loadProductTypes();
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var productid = this.state.productid.trim();
        var productnamedj =  this.state.productnamedj.trim();
        var productpricedj = this.state.productpricedj.trim();
        var productvenderdj = this.state.productvenderdj.trim();
        var producttypedj = protypedj.value;

        this.props.onProductSubmit({ 
            productid:productid,
            productnamedj: productnamedj,
            productpricedj: productpricedj,
            productvenderdj: productvenderdj,
            producttypedj: producttypedj,
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
                <h2>Product</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Product ID</th>
                            <td>
                                <input type="text" name="productid" id="productid" value={this.state.productid} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Product Name </th>
                            <td>
                                <input type="text" name="productnamedj" id="productnamedj" value={this.state.productnamedj} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Product Price</th>
                            <td>
                            <input  type="text" name="productpricedj" id="productpricedj" value={this.state.productpricedj} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Product Vendor</th>
                            <td>
                                <input name="productvenderdj" id="productvenderdj" value={this.state.productvenderdj} onChange={this.handleChange} />
                            </td>
                        </tr> 
                        <tr>
                            <th>
                                Product Type
                            </th>
                            <td>
                                <SelectList data = {this.state.data}/>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <input type="submit" value="Search Product" />

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

var ProductUpdateform = React.createClass({
    getInitialState: function () {
        return {
            upproductkey: "",
            upproductid: "",
            upproductname: "",
            upproductprice: "",
            upproductvender: "",
            updata: []
        };
    },
    handleUpOptionChange: function (e) {
        this.setState({
            upselectedOption: e.target.value
        });
    },
    loadProductTypes: function (){
        $.ajax({    
            url: '/getproducttypes',        
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
    componentDidMount: function() {
        this.loadProductTypes();
    },
    handleUpSubmit: function (e) {
        e.preventDefault();

        var upproductkey = upprokey.value;
        var upproductid = upproid.value;
        var upproductname = upproname.value;
        var upproductprice = upproprice.value;
        var upproductvender = upprovender.value;
        var upproducttype = upprotype.value;

        this.props.onUpdateSubmit({
            upproductkey: upproductkey,
            upproductid: upproductid,
            upproductname: upproductname,
            upproductprice: upproductprice,
            upproductvender: upproductvender,
            upproducttype: upproducttype,
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
    <th>Product ID</th>
    <td>
<input type="text" name="upproid" id="upproid" value={this.state.upproid} onChange={this.handleUpChange} />
    </td>
</tr>
<tr>
<th>Product Name </th>
                        <td>
                            <input type="text" name="upproname" id="upproname" value={this.state.upproname} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>Product Price</th>
                        <td>
                        <input  type="text" name="upproprice" id="upproprice" value={this.state.upproprice} onChange={this.handleChange}  />
                        </td>
                    </tr>
                    <tr>
                        <th>Product Vendor</th>
                        <td>
                            <input name="upprovender" id="upprovender" value={this.state.upprovender} onChange={this.handleChange} />
                        </td>
                    </tr> 
                    <tr>
                        <th>
                            Product Type
        </th>
    <td>
        <SelectUpdateList data={this.state.updata} />
    </td>
</tr>
</tbody>
                    </table><br />
                    <input type="hidden" name="upprokey" id="upprokey" onChange={this.handleUpChange} />
                    <input type="submit" value="Update Product" />
                </form>
            </div>
        </div>
        );
    }
});

var ProductList = React.createClass({
    render: function () {
        var productNodes = this.props.data.map(function (product) {
            //map the data to individual donations
            return (
                <Product
                    key={product.dbProductIDdj}
                    prokey={product.dbProductIDdj}
                    
                    proid={product.dbProductIDdj}
                    proname={product.dbProductNamedj}
                >
                </Product>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {productNodes}
            </tbody>
        );
    }
});
var Product = React.createClass({
    getInitialState: function () {
        return {
            upprokey: "",
            singledata: []
        };
    },
    updateRecord: function (e) {
        e.preventDefault();
        var theupprokey = this.props.prokey;
        
        this.loadSinglePro(theupprokey);
    },
    loadSinglePro: function (theupprokey) {
        $.ajax({
            url: '/getsinglepro',
            data: {
                'upprokey': theupprokey
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ singledata: data });
                console.log(this.state.singledata);
                var populatePro = this.state.singledata.map(function (product) {
                    upprokey.value = theupprokey;
                    upproid.value =product.dbProductIDdj;
                    upproname.value = product.dbProductNamedj;
                    upproprice.value = product.dbProductPricedj;
                    upprovender.value = product.dbProductVenderdj;
                    upprotype.value = product.dbProductTypedj;

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
                                {this.props.prokey} 
                            </td>
                            <td>
                                {this.props.proid}
                            </td>
                            <td>
                                {this.props.proname}
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
        var optionNodes = this.props.data.map(function(proType){
                return(
                    <option
                        key = {proType.dbProductTypeIDdj}
                        value = {proType.dbProductTypeIDdj}
                    >
                        {proType.dbProductTypeNamedj}
                    </option>
                );
        });
        return(
            <select name = "protypedj" id = "protypedj">
                <option value= "0">Select a Type</option>
                {optionNodes}
            </select>
        );
    }
});

var SelectUpdateList = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(proType){
                return(
                    <option
                        key = {proType.dbProductTypeIDdj}
                        value = {proType.dbProductTypeIDdj}
                    >
                        {proType.dbProductTypeNamedj}
                    </option>
                );
        });
        return(
            <select name = "upprotype" id = "upprotype">
            <option value= "0">Select a Type</option>
                {optionNodes}
            </select>
        );
    }
});

ReactDOM.render(
    <ProductBox />,
    document.getElementById('content')
);