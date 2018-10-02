var hello = function(){
				  const element = (
				    <div>
					    <center>	
					      <h1>Hello, world!</h1>
					      <h4>It is {new Date().toLocaleTimeString()}.</h4>
				      	</center>
				   </div>
				  );
				  // highlight-next-line
				  ReactDOM.render(element, document.getElementById('root'));
				};
				setInterval(hello, 999);