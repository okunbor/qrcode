//second part

let btn = document.getElementById("btn");

btn.addEventListener("click", QrCodeScanner);

function nam() {
  document.getElementById("result").innerHTML = "<h1>moses</h1>";
}
function QrCodeScanner() {

  //first methode
  // function onScanSuccess(decodedText, decodedResult) {
  //   // handle the scanned code as you like, for example:

  //   document.getElementById(
  //     "result"
  //   ).innerHTML = `<h6> success </h6> <h2> ${decodedText}</h2>`;
  //   console.log(`Code matched = ${decodedText}`, decodedResult);
  // }

  // function onScanFailure(error) {
  //   // handle scan failure, usually better to ignore and keep scanning.
  //   // for example:
  //   console.warn(`Code scan error = ${error}`);
  // }

  // let html5QrcodeScanner = new Html5QrcodeScanner(
  //   "reader",
  //   { fps: 10, qrbox: { width: 250, height: 250 } },
  //   /* verbose= */ false
  // );
  // html5QrcodeScanner.render(onScanSuccess, onScanFailure);


  //second method
  // const html5QrCode = new Html5Qrcode("reader");
  // const qrCodeSuccessCallback = (decodedText) => {
  //     /* handle success */
  //     document.getElementById("result").innerHTML =`<h6> success </h6> <h2> ${decodedText}</h2>`;

  //     html5QrCode.stop().then((ignore) => {
  //         console.log(`close camera`);
  // }).catch((err) => {
  //   // Stop failed, handle it.
  // });

  // };
  // const config = { fps: 20, qrbox: { width: 250, height: 250 } };

  // If you want to prefer front camera
  // html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

  // If you want to prefer back camera
  // html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

  // Select front camera or fail with `OverconstrainedError`.
  // html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);

  // Select back camera or fail with `OverconstrainedError`.
  // html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);


  //recommend



// This method will trigger user permissions
Html5Qrcode.getCameras().then(devices => {
  /**
   * devices would be an array of objects of type:
   * { id: "id", label: "label" }
   */
  if (devices && devices.length) {
    var cameraId = devices[0].id;
    // .. use this to start scanning.
    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {

     
        /* handle success */
        document.getElementById("result").innerHTML =`<h6> success </h6> <h2> ${decodedText}</h2>`;
  
        html5QrCode.stop().then((ignore) => {
            console.log(`close camera`);
    }).catch((err) => {
      // Stop failed, handle it.
    });
  
    
        /* handle success */
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    // If you want to prefer front camera
   // html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
    
    // If you want to prefer back camera
   // html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    
    // Select front camera or fail with `OverconstrainedError`.
    // html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);
    
    // Select back camera or fail with `OverconstrainedError`.
     html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);


  }
}).catch(err => {
  // handle err
});


  
}
