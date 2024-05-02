var ProductBox = React.createClass({
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
    loadProductFromServer: function () {


        $.ajax({
            url: '/getpro',
            data: {
                'productnamedj': productnamedj.value,
                'productpricedj': productpricedj.value,
                'productvenderdj': productvenderdj.value,
                'producttypedj': protypedj.value,
                'productactive':proactive.value,
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
            this.loadProductFromServer();
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
                <h1> Search Product</h1>
                <Productform2 onProductSubmit={this.loadProductFromServer} />
                <br />
                <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Name</th>
                                <th> Price</th>
                                <th> Vendor</th>
                                <th>Type</th>
                                <th>Active</th>
                            </tr>
                         </thead>
                        <ProductList data={this.state.data} />
                    </table>
                
            </div>
        );
        }
        
    }
});

var Productform2 = React.createClass({
    getInitialState: function () {
        return {
            productnamedj: "",
            productpricedj: "",
            productvenderdj:"",
            data:[],
            activedata:[],
        };
    },
    handleOptionChange: function(e){
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
        this.loadProductTypes();
        this.loadActive();
    },

    handleSubmit: function (e) {
        e.preventDefault();

        var productnamedj =  this.state.productnamedj.trim();
        var productpricedj = this.state.productpricedj.trim();
        var productvenderdj = this.state.productvenderdj.trim();
        var producttypedj = protypedj.value;
        var productactive = proactive.value;


        this.props.onProductSubmit({ 
            productnamedj: productnamedj,
            productpricedj: productpricedj,
            productvenderdj: productvenderdj,
            producttypedj: producttypedj,
            productactive:productactive,
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
                        <tr>
                            <th> Product Active</th>
                            <td>
                            <SelectListActive data = {this.state.activedata}/>

                            </td>
                            </tr>
                    </tbody>
                </table>
                <input type="submit" value="Search Product" />

            </form>
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
                    proname={product.dbProductNamedj}
                    proprice = {product.dbProductPricedj}
                    provender={product.dbProductVenderdj}
                    protype = {product.dbProductTypeNamedj}
                    proactive = {product.StatusName}
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

    render: function () {
        //display an individual donation

        return (

            <tr>
                            <td>
                                {this.props.prokey} 
                            </td>
                            <td>
                                {this.props.proname}
                            </td>
                            <td>
                                {this.props.proprice}
                            </td>
                            <td>
                                {this.props.provender}
                            </td>
                            <td>
                                {this.props.protype}
                            </td>
                            <td>
                                {this.props.proactive}
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

var SelectListActive = React.createClass({
    render: function(){
        var optionNodes = this.props.data.map(function(proActive){
                return(
                    <option
                        key = {proActive.Statusid }
                        value = {proActive.Statusid }
                    >
                        {proActive.StatusName}
                    </option>
                );
        });
        return(
            <select name = "proactive" id = "proactive">
                <option value= "3">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});

ReactDOM.render(
    <ProductBox />,
    document.getElementById('content')
);

