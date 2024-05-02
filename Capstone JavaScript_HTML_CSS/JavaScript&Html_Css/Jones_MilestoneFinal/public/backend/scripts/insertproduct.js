var ProductBox = React.createClass({
    getInitialState: function () {
        return { 
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


    handleProductSubmit: function(product){

        $.ajax({
            url: '/product',
            dataType: 'json',  
            type: 'POST',
            data: product,
            sucess: function (data){
                this.setState({ data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.loadAllowLogin();
        if(this.state.viewthepage !=0){
            this.handleInventorySubmit();
        }
       // setInterval(this.loadCustomersFromServer, this.props.pollInterval);
    },
    render: function () {
        if (this.state.viewthepage == 0 || this.state.viewthepage != 2){
            return (
                <div>You do not have access to this page.</div>
            );
        }else{
                    return (
            <div className="ProductBox">
                <h1> Insert Product</h1>
                <Productform2 onProductSubmit={this.handleProductSubmit} />
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

    handleSubmit: function (e){

        e.preventDefault();

        var productnamedj =  this.state.productnamedj.trim();
        var productpricedj = this.state.productpricedj.trim();
        var productvenderdj = this.state.productvenderdj.trim();
        var producttypedj = protypedj.value;
        var productactive = proactive.value;

      //  console.log("pw:" + playerpw);


        
        if (isNaN(productpricedj)){
            console.log("Not a number " + productpricedj);
            return;
        }


        if (!productnamedj || !productpricedj || !producttypedj){
            console.log("Field Missing");
            return;
        }

        this.props.onProductSubmit({
            productnamedj: productnamedj,
            productpricedj: productpricedj,
            productvenderdj: productvenderdj,
            producttypedj: producttypedj,
            productactive:productactive,
        });
        window.alert("Record Inserted");
    },
    validateEmail: function (value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    },
    validateDollars: function (value) {
        var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
        return regex.test(value);
    },
    commonValidate: function () {
        return true;
    },
    setValue: function (field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    },
    render: function () {

        return (
            <form className="productForm" onSubmit={this.handleSubmit}>
                <h2>Insert Product</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Product Name</th>
                            <td>
                <TextInput
                    value={this.state.productnamedj}
                    uniqueName="productnamedj"
                    textArea={false}
                    required={true}
                    minCharacters={2}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'productnamedj')}
                    errorMessage="Product Name is invalid"
                    emptyMessage="Product Name is required" />
                            </td>
                        </tr>
                        <tr>
                            <th>Product Price</th>
                            <td>

                <TextInput
                    value={this.state.productpricedj}
                    uniqueName="productpricedj"
                    textArea={false}
                    required={false}
                    validate={this.validateDollars}
                    onChange={this.setValue.bind(this, 'productpricedj')}
                    errorMessage="Product Price is invalid"
                    emptyMessage="Product Price is required" />
                            </td>
                        </tr>
                        <tr>
                            <th>Product Vendor</th>
                            <td>

                <TextInput
                    value={this.state.productvenderdj}
                    uniqueName="productvenderdj"
                    textArea={false}
                    required={false}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'productvenderdj')}
                    errorMessage="Product Vender is invalid"
                    emptyMessage="" />
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

                <input type = "submit" value = "Insert Product"/>
               
            </form>
        );
    }
});

var InputError = React.createClass({
    getInitialState: function () {
        return {
            message: 'Input is invalid'
        };
    },
    render: function () {
        var errorClass = classNames(this.props.className, {
            'error_container': true,
            'visible': this.props.visible,
            'invisible': !this.props.visible
        });

        return (
                <td> {this.props.errorMessage} </td>
        )
    }
});

var TextInput = React.createClass({
    getInitialState: function () {
        return {
            isEmpty: true,
            value: null,
            valid: false,
            errorMessage: "",
            errorVisible: false
        };
    },

    handleChange: function (event) {
        this.validation(event.target.value);

        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },

    validation: function (value, valid) {
        if (typeof valid === 'undefined') {
            valid = true;
        }

        var message = "";
        var errorVisible = false;

        if (!valid) {
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }
        else if (this.props.required && jQuery.isEmptyObject(value)) {
            message = this.props.emptyMessage;
            valid = false;
            errorVisible = true;
        }
        else if (value.length < this.props.minCharacters) {
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }

        this.setState({
            value: value,
            isEmpty: jQuery.isEmptyObject(value),
            valid: valid,
            errorMessage: message,
            errorVisible: errorVisible
        });

    },

    handleBlur: function (event) {
        var valid = this.props.validate(event.target.value);
        this.validation(event.target.value, valid);
    },
    render: function () {
        if (this.props.textArea) {
            return (
                <div className={this.props.uniqueName}>
                    <textarea
                        placeholder={this.props.text}
                        className={'input input-' + this.props.uniqueName}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        value={this.props.value} />

                    <InputError
                        visible={this.state.errorVisible}
                        errorMessage={this.state.errorMessage} />
                </div>
            );
        } else {
            return (
                <div className={this.props.uniqueName}>
                    <input
                        type = {this.props.inputType}
                        name = {this.props.uniqueName}
                        id = {this.props.uniqueName}
                        placeholder={this.props.text}
                        className={'input input-' + this.props.uniqueName}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        value={this.props.value} />

                    <InputError
                        visible={this.state.errorVisible}
                        errorMessage={this.state.errorMessage} />
                </div>
            );
        }
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
            <select name = "proactive" id = "proactive">
                <option value= "0">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});



ReactDOM.render(
    <ProductBox />,
    document.getElementById('content')
);
