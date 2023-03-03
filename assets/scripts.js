function startWorker() {
    if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
            w = new Worker("assets/worker.js");
        }
        w.onmessage = function(event) {

            document.getElementById("workerResult").innerHTML = event.data;
        };

        w.postMessage('onComplete');
    } else {
        document.getElementById("workerResult").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

function mainThreadProcess() {
    document.getElementById("appResult").innerHTML = `Started processing. 
    Please wait, main thread will be occupied by me for sometime.`;
    setTimeout(() => {
        let result = 0;
        for(let i = 0; i < 10000000 ; i++){
            result = result + i;
            // This line will print after the loop is complete since main thread is busy and cannot print the individual loop results.
            document.getElementById("appResult").innerHTML = `Main thread is free now. The total count is ${result}`;
        }
        
    }, 200);
}

