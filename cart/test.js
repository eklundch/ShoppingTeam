
    const create = require("./create.js");
    exports.f = function() {

        /*let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done!"), 1000)
        });
      
        let result = await promise; // wait till the promise resolves (*)
      
        console.log(result); // "done!"
        require("./create.js");*/

const https = require('https'); 

https.get('https://5bpht0gsk7.execute-api.us-east-1.amazonaws.com/dev/status', (resp) => { 
  let data = ''; 

  // A chunk of data has been recieved. 
  resp.on('data', (chunk) => { 
    data += chunk; 
  }); 

  // The whole response has been received. Print out the result. 
  resp.on('end', () => { 
    console.log(data); 
    var str = String(data);
    console.log("Check: " + (str.trim() == "OK"))
    create.create(function(error, success){
    });
  }); 

}).on("error", (err) => { 
  console.log("Error: " + err.message); 
});
}
