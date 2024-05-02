var InventoryBox = React.createClass({
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
    handleInventorySubmit: function(inventory){

        $.ajax({
            url: '/inventory',
            dataType: 'json',  
            type: 'POST',
            data: inventory,
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
            <div className="InventoryBox">
                <h1>Insert Inventory</h1>
                <Inventoryform2 onInventorySubmit={this.handleInventorySubmit} />
            </div>
        );
        }

    }
});

var Inventoryform2 = React.createClass({
    getInitialState: function () {
        return {
            InventoryNamedj: "",
            InventoryDescriptiondj: "",
            InventoryAmountdj:"",
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

    handleSubmit: function (e){

        e.preventDefault();
        var inventorynamedj =  this.state.inventorynamedj.trim();
        var inventorydescriptiondj =  this.state.inventorydescriptiondj.trim();
        var inventoryamountdj = this.state.inventoryamountdj.trim();
        var inventorysectiondj = invensectiondj.value;
        var inventoryproductdj = invenproductdj.value;
        var inventoryactive = invenactive.value

       // console.log("pw:" + playerpw);


        
        if (isNaN(inventoryamountdj)){
            console.log("Not a number " + inventoryamountdj);
            return;
        }


        if (!inventorynamedj ||!inventorydescriptiondj || !inventorysectiondj || !inventoryproductdj){
            console.log("Field Missing");
            return;
        }

        this.props.onInventorySubmit({
            inventorynamedj:inventorynamedj,
            inventorydescriptiondj: inventorydescriptiondj,
            inventoryamountdj: inventoryamountdj,
            inventorysectiondj: inventorysectiondj,
            inventoryproductdj: inventoryproductdj,
            inventoryactive:inventoryactive,
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
    validateNumber: function (value) {
        var regex = /^[1-9][0-9]*$/;
        return regex.test(value);
    },
    setValue: function (field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    },
    render: function () {

        return (
            <form className="inventoryForm" onSubmit={this.handleSubmit}>
                <table>
                    <tbody>

                    <tr>
                            <th>Inventory Name</th>
                            <td>
                <TextInput
                    value={this.state.inventorynamedj}
                    uniqueName="inventorynamedj"
                    textArea={false}
                    required={true}
                    minCharacters={2}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'inventorynamedj')}
                    errorMessage="Inventory Name is invalid"
                    emptyMessage="Inventory Name is required" />
                            </td>
                        </tr>
                        <tr>
                            <th>Inventory Desciption</th>
                            <td>
                <TextInput
                    value={this.state.inventorydescriptiondj}
                    uniqueName="inventorydescriptiondj"
                    textArea={false}
                    required={true}
                    minCharacters={1}
                    validate={this.commonValidate}
                    onChange={this.setValue.bind(this, 'inventorydescriptiondj')}
                    errorMessage="Inventory Desciption is invalid"
                    emptyMessage="Inventory Desciption is required" />
                            </td>
                        </tr>
                        <tr>
                            <th>Inventory Amount </th>
                            <td>
                <TextInput
                    value={this.state.inventoryamountdj}
                    uniqueName="inventoryamountdj"
                    textArea={false}
                    required={true}
                    minCharacters={1}
                    validate={this.validateNumber}
                    onChange={this.setValue.bind(this, 'inventoryamountdj')}
                    errorMessage="Inventory Amount is invalid"
                    emptyMessage="Inventory Amount is required" />
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

                <input type = "submit" value = "Insert Inventory"/>
               
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
                <option value= "0">Choose Section</option>
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
            <select name = "invenactive" id = "invenactive">
                <option value= "0">Choose an Activity</option>
                {optionNodes}
            </select>
        );
    }
});


ReactDOM.render(
    <InventoryBox />,
    document.getElementById('content')
);
