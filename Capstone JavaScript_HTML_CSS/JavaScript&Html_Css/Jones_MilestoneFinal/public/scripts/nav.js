var ShowNav = React.createClass({
    render: function () {
        return (
            <div class="navbar">
            	<header >
		
		<nav>
			<ul>
				<li><a href = "home.html">Home</a></li>
				<li><a href ="coursehole.html"> The Course</a></li>
				<li><a href = "login.html">Reservations</a></li>
	
				
			</ul>
			
			<a href = "home.html"><img src="image/logo.png"/></a>
			
			<ul>
				<li><a href = "searchproduct.html">Merchandise</a></li>
				<li><a href = "Events.html">Events</a></li>
				<li><a href = "about.html">About Our Course</a></li>
				
			</ul>
			
				</nav>
		
                
		 </header>
            </div>

        );
    }
});

ReactDOM.render(
    <ShowNav />,
    document.getElementById('nav')
);