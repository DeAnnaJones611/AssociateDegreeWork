var ShowFooter = React.createClass({
    render: function () {
        return (
			<div>
				<footer>
				<p>Subscribe to Our Mailing List For UpDates!</p>
	 <button type="button">Join Now</button>


			<table>
				<tr>
					<td>
						<table>
							<tr>
								<td>
									tee Time
								</td>
								<td>
									Score Card
								</td>
							</tr>
							<tr>
							<td>
									Events
								</td>
								<td>
									Dining
								</td>
							</tr>
						</table>

						<p>Proud Members of </p>
						<img src="image/image4.png"/>
					</td>
					<td>
						<img src="image/logo.png"/>
					</td>
					<td>
						<table>
							<tr>
								<td>
									<img src="image/icon1.png"/>
								</td>
								<td>
									<p>
										Address <br/>
										1500 48th Avenue North,<br/>
										Mrttle Beach, SC 29577<br/>
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<img src="image/icon1.png"/>
								</td>
								<td>
									<p>
										Phone<br/>
										843-742-GOLF<br/>
									</p>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>

		<table>
			<tr>
					<td>
					<a href = "home.html">Home</a>
					</td>
			</tr>
					<td>
					<a href ="coursehole.html"> The Course</a>
					</td>
			<tr>
						<td>
						<a href = "login.html">Reservations</a>
						</td>
			</tr>
						<td>
						<a href = "searchproduct.html">Merchandise</a>
						</td>
			<tr>

			</tr>
						<td>
						<a href = "Events.html">Events</a>
						</td>
			<tr>

			</tr>			
			<tr>
					<td>
					<a href = "about.html">About Our Course</a>
						</td>
			</tr>
			<tr>
					<td>
					<a href = "backend/index.html">Employee Login</a>
						</td>
			</tr>
		</table>

	 
	Copyrigth &copy; 2024 All Rights Reserved.
				</footer>
			</div>

        );
    


	}
});

ReactDOM.render(
    <ShowFooter />,
    document.getElementById('footer')
);