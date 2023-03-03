var workerResponse = [];

function showPopup() {
  workerResponse = 'Hello! I am processing in background and not using the main thread.'; 
  postMessage(workerResponse);

  self.onmessage = function(msg) {
    if(msg.data === 'onComplete') {
      let result = 0;
      for(let i = 0; i < 1000000000 ; i++){
          postMessage(i)
          result = result + i;
      }
      workerResponse = 'Hello! I have finished processing. Total count is ' + result; 
    } else {
      workerResponse = 'Just a default message';
    }
    postMessage(workerResponse)
  }
}

showPopup();