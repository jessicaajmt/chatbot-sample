const chatbox = document.querySelector('.chatbox');
		const input = document.querySelector('#input');
		const send = document.querySelector('#send');
		const chatBox = document.getElementById('chat-box');

		// Add event listener for the Enter key
		input.addEventListener('keydown', (event) => {
  		if (event.key === 'Enter') {
    	sendMessage();
  		}
		});

		// Add event listener for the Send button
		send.addEventListener('click', sendMessage);
		
		const burger = 'burger';
		const pasta = 'pasta';
		const chicken = 'chicken';

		const fries = 'fries';
		const sundae = 'sundae';

		const icedtea = 'iced tea';
		const softdrink = 'soft drink';

		const large = 'large';
		const medium= 'medium';
		const noSundae = 'no snack';

		const pie ='pie';

		const yes ='yes';
		const yes1 ='yes';
		const no = 'no';

		let container = 1;
		let decisionAddsnack='';
		let mainOrder =  '';
		let mainSnack = '';
		let drink = '';
		let drinkSize = '';
		let tempo = 1;
		let containerno = 0;
		let addpie ='';
		let tempochicken = 0;
		
	

		function sendMessage() {

		for (let i = 0; i < 10; i++) {
				if (i === 5) {
		const message = input.value;
		input.value ='';
					// add order if-else
		// burger and pasta meal
		if (message.includes(burger)) {
			
  			mainOrder = message.slice(message.indexOf(burger), message.indexOf(burger) + burger.length);
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
  			chatbox.innerHTML += ` <p>Chatbot: Great choice! Would you like fries or a sundae with your ${mainOrder} meal?</p> `;
		
		}else 
			container ++;

		if (message.includes(pasta)) {
  			mainOrder = message.slice(message.indexOf(pasta), message.indexOf(pasta) + pasta.length);
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
  			chatbox.innerHTML += ` <p>Chatbot: Great choice! Would you like fries or a sundae with your ${mainOrder} meal?</p> `;
		}else 
			container ++;

		//chicken meal 
		if (message.includes(chicken)) {
    		mainOrder = message.slice(message.indexOf(chicken), message.indexOf(chicken) + chicken.length);
    		chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
    		chatbox.innerHTML += ` <p>Chatbot: Yum! Would you like to add a sundae with your ${mainOrder} meal?</p> `;
		}	
		if (message.includes(yes) && mainOrder == chicken && tempochicken == 0){
    		mainSnack = sundae;
    		chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
    		chatbox.innerHTML += ` <p>Okay then! And for your drink, would you like a soft drink or iced tea?</p> `;
		} else if(message.includes(no) && tempochicken == 0 && mainOrder == chicken){
			mainSnack =  noSundae;
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
    		chatbox.innerHTML += ` <p>Okay then! And for your drink, would you like a soft drink or iced tea?</p> `;
			tempochicken++;
		}


		// snack-fries
		if (message.includes(fries)) {
   		 	mainSnack = message.slice(message.indexOf(fries), message.indexOf(fries) + fries.length);
    		chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
    		chatbox.innerHTML += ` <p>Chatbot: Of course! Would you like to add a sundae?</p> `;
		}

		if (message.includes(yes) && mainSnack == fries) {
    		decisionAddsnack = sundae;
			tempo ++;
    		chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
    		chatbox.innerHTML += ` <p>Chatbot: Okay then! And for your drink, would you like a soft drink or iced tea?</p> `;
		} else if (message.includes(no) && mainSnack == fries && tempo == 1) {
			tempo ++;
    		chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
   			chatbox.innerHTML += ` <p>Chatbot: Okay then!  And for your drink, would you like a soft drink or iced tea?</p> `;
		} else {
    		container ++;
		}

		

		
  			//snack-sundae
		if (message.includes(sundae) && tempochicken == 0) {
			
			mainSnack = message.slice(message.indexOf(sundae), message.indexOf(sundae) + sundae.length);
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
			chatbox.innerHTML += ` <p>Chatbot: Sure thing! And for your drink, would you like a soft drink or iced tea?</p> `;
			}
					
			
			// drinks
		if (message.includes(icedtea)) {
			drink = icedtea;
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;

			if (mainSnack === fries) {
	  		chatbox.innerHTML += ` <p>Alright! Would you like to upgrade your fries and drinks to Medium or Large?</p>`;
			  containerno++;

			} else if (mainSnack === sundae) {
	  		chatbox.innerHTML += ` <p>Alright! Would you like to upgrade your drinks to Medium or Large?</p>`;
			  containerno++;

			} else {
	  		chatbox.innerHTML += ` <p>Alright! Would you like to upgrade your drink to Medium or Large?</p>`;
			  containerno++;
			  
			
			}
  		} else if (message.includes(softdrink)) {
			drink = softdrink;
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;

			if (mainSnack === fries) {
	 		chatbox.innerHTML += ` <p>Alright! Would you like to upgrade your fries and drinks to Medium or Large?</p>`;
			 containerno++;

			} else if (mainSnack === sundae) {
	  		chatbox.innerHTML += ` <p>Alright! Would you like to upgrade your drinks to Medium or Large?</p>`;
			  containerno++;

			} else {
	  		
		}
 	 	}
  
  		
  

		  if (message.includes("large")) {
			drinkSize = "large";
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
			chatbox.innerHTML += ` <p>Chatbot: Alright. Is your order complete?</p> `; 
			
		  } else if (message.includes("medium")) {
			drinkSize = "medium";
			chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
			chatbox.innerHTML += ` <p>Chatbot: Alright. Is your order complete?</p> `;
		  }else if( drinkSize == '' && message.includes(no) && containerno == 1 || drinkSize == '' && mainOrder == chicken && message.includes(no) && tempochicken == 2 ){
				drinkSize ='small';
				chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
				chatbox.innerHTML += ` <p>Chatbot: Alright. Is your order complete?</p> `;
			  }
			  
		  
		  
		  if (drinkSize) {

			if (message.includes(yes)) {
			  chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
			  chatbox.innerHTML += `<p>Chatbot: Okay then, would you like to add a pie? type uppercase YES/NO </p>`;
			  
			  
			} //summary order
				if (message.includes('YES')){
				addpie = pie;
				chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
				chatbox.innerHTML += `<p>Chatbot: Great! Just to confirm, your order is a ${mainOrder} meal with ${mainSnack} and a ${drinkSize} size ${drink} and an additional ${addpie}.</p>`;
				chatbox.innerHTML += `<p>Chatbot: Would you like to add more? if yes type 1, otherwise 0.</p>`;

				} else if (message.includes('NO')) {
				chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
				chatbox.innerHTML += `<p>Chatbot: Just to confirm, your order is a ${mainOrder} meal  plus a ${mainSnack} with a ${drinkSize} size ${drink}.</p>`;
				chatbox.innerHTML += `<p>Chatbot: Would you like to add more? if yes type 1, otherwise 0.</p>`;
			  	}
				  if (message.includes('YES') && decisionAddsnack == sundae){
					addpie = pie;
				chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
				chatbox.innerHTML += `<p>Chatbot: Great! Just to confirm, your order is a ${mainOrder} meal plus a ${mainSnack} with a ${drinkSize} size ${drink}, an additional ${addpie} and ${decisionAddsnack}.</p>`;
				chatbox.innerHTML += `<p>Chatbot: Would you like to add more? if yes type 1, otherwise 0.</p>`;

				} else if (message.includes('NO') && decisionAddsnack == sundae) {
				chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
				chatbox.innerHTML += `<p>Chatbot: Just to confirm, your order is a ${mainOrder} meal plus a ${mainSnack} with a ${drinkSize} size ${drink} and an additional ${decisionAddsnack}.</p>`;
				chatbox.innerHTML += `<p>Chatbot: Would you like to add more? if yes type 1, otherwise 0.</p>`;
			  	}

			


			}
				if(message.includes('0')){
					chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
					chatbox.innerHTML += `<p>Chatbot: Thank you for purchasing Craving Crazy. Your order is currently being processed. Please wait of your order. Thank you very much. </p>`;
				}else if(message.includes('1')){
					chatbox.innerHTML += ` <p style =" background-color:#e9c309; ">You: ${message} </p>`;
					i == 5;
			}	
					
				} 
				}
				chatBox.scrollTop = chatBox.scrollHeight;
		}
