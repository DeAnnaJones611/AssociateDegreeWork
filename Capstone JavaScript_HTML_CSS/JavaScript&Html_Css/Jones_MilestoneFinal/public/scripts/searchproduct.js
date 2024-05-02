var ProductBox = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    loadProductFromServer: function () {


        $.ajax({
            url: '/getpro/',
            data: {
                'productnamedj': productnamedj.value,
                'productpricedj': productpricedj.value,
                'productvenderdj': productvenderdj.value,
                'producttypedj': protypedj.value,
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
        this.loadProductFromServer();
       // setInterval(this.loadCustomersFromServer, this.props.pollInterval);
    },

    render: function () {
        return (
            <div >
                <h1> Search Products</h1>
            <div id ="frontProduct">
                                <table>
                        <thead>
                            <tr>
                               
                                <th>Name</th>
                                <th> Price</th>
                                <th> Vender</th>
                                <th>Type</th>
                            </tr>
                         </thead>
                        <ProductList data={this.state.data} />
                       
                    </table>
<br />
                <Productform2 onProductSubmit={this.loadProductFromServer} />
            </div>

                

                
            </div>
        );
    }
});

var Productform2 = React.createClass({
    getInitialState: function () {
        return {
            productnamedj: "",
            productpricedj: "",
            productvenderdj:"",
            data:[],
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

    componentDidMount: function(){
        this.loadProductTypes();
    },

    handleSubmit: function (e) {
        e.preventDefault();

        var productnamedj =  this.state.productnamedj.trim();
        var productpricedj = this.state.productpricedj.trim();
        var productvenderdj = this.state.productvenderdj.trim();
        var producttypedj = protypedj.value;


        this.props.onProductSubmit({ 
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
                            <th>Product Vender</th>
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
        );
    }
});

var ProductList = React.createClass({
    render: function () {
        var productNodes = this.props.data.map(function (product) {
            //map the data to individual donations
            return (
                <Product
                    
                    prokeydj={product.dbProductIDdj}
                    pronamedj={product.dbProductNamedj}
                    propricedj = {product.dbProductPricedj}
                    provenderdj={product.dbProductVenderdj}
                    protypedj = {product.dbProductTypeNamedj}
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
                                {this.props.pronamedj}
                            </td>
                            <td>
                                {this.props.propricedj}
                            </td>
                            <td>
                                {this.props.provenderdj}
                            </td>
                            <td>
                                {this.props.protypedj}
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



ReactDOM.render(
    <ProductBox />,
    document.getElementById('content')
);

