var ShowNav = React.createClass({
    render: function () {
        return (
            <div class="navbar">
            <div id="dropdown">
                <button id="dropbtn">
                    Player
                    <i id="fa fa-caret-down"></i>
                </button>
                <div id="dropdown-content">
                    <a href="insertplayer.html">Insert Player</a>     
                    <a href="searchplayer.html">Search Player</a>                   
                    <a href="updateplayer.html">Update Player</a>
                </div>
    
            </div>
    
    
            <div id="dropdown">
                <button id="dropbtn">
                    User
                    <i id="fa fa-caret-down"></i>
                </button>
                <div id="dropdown-content">
                    <a href="insertuser.html">Insert User</a>    
                    <a href="searchuser.html">Search User</a>                 
                    <a href="updateuser.html">Update User</a>
                </div>
    
            </div>
    
    
    
            <div id="dropdown">
                <button id="dropbtn">
                    Product
                    <i id="fa fa-caret-down"></i>
                </button>
                <div id="dropdown-content">
                    <a href="insertproduct.html">Insert Product</a>    
                    <a href="searchproduct.html">Search Product</a>                   
                    <a href="updateproduct.html">Update Product</a>
                </div>
    
            </div>
    
            <div id="dropdown">
                <button id="dropbtn">
                    Purchase
                    <i id="fa fa-caret-down"></i>
                </button>
                <div id="dropdown-content">
                    <a href="insertpurchase.html">Insert Purchase</a>    
                    <a href="searchpurchase.html">Search Purchase</a>                   
                    <a href="updatepurchase.html">Update Purchase</a>
                </div>
    
            </div>
    
    
            <div id="dropdown">
                <button id="dropbtn">
                    Inventory
                    <i id="fa fa-caret-down"></i>
                </button>
                <div id="dropdown-content">
                    <a href="insertinventory.html">Insert Inventory</a>  
                    <a href="searchinventory.html">Search Inventory</a>                 
                    <a href="updateinventory.html">Update Inventory</a>
                </div>
    
            </div>
    
    
    
            <div id="dropdown">
                <button id="dropbtn">
                    Reservation
                    <i id="fa fa-caret-down"></i>
                </button>
                <div id="dropdown-content">
                    <a href="insertreservation.html">Insert Reservations</a>    
                    <a href="searchreservation.html">Search Reservation</a>                   
                    <a href="updatereservation.html">Update Reservation</a>
                </div>
    
            </div>

            <div id="dropdown">
                <a href="logout.html">Logout</a>
            </div>
            <div id="dropdown">
                <a href="logouthome.html">Front End</a>
            </div>

        </div>
        );
    }
});

ReactDOM.render(
    <ShowNav />,
    document.getElementById('nav')
);