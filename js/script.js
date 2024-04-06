const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");


const productVolumes = document.querySelector("#productVolume");

let select = document.getElementById("caseCode");

if (productVolumes.value =="20cl") {
    
  
  select.innerHTML = ""; 
  
  for (var i = 1; i <= 5; i++) {

    var opt = document.createElement('option');
    opt.value = "M"+ i;
    opt.innerHTML = "M" + i;
    select.appendChild(opt);
  }
}
productVolumes.addEventListener('change', (e) => {
  
  if (e.target.value =="20cl") {
    
  
    select.innerHTML = ""; 
    
    for (var i = 1; i <= 5; i++) {
  
      var opt = document.createElement('option');
      opt.value = "M"+ i;
      opt.innerHTML = "M" + i;
      select.appendChild(opt);
    }
  }
  
  if (e.target.value =="30cl") {
    
   
    select.innerHTML = ""; 
    
    for (var i = 1; i <= 5; i++) {
  
      var opt = document.createElement('option');
      opt.value = "M"+ i;
      opt.innerHTML = "M" + i;
      select.appendChild(opt);
    }
  }
  
  if (e.target.value == "40cl") {
   
    select.innerHTML = ""; 
      
    for (var i = 1; i <= 5; i++) {
      var opt = document.createElement('option');
      opt.value = "L"+i;
      opt.innerHTML ="L"+ i;
      select.appendChild(opt);
    }
  }
});


// Button submit
const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const size = document.getElementById("size").value;
  const NoCases = document.getElementById("NoCases").value;
  const productName = document.getElementById("productName").value;
  const productVolume = document.getElementById("productVolume").value;
  
  const caseCode = document.getElementById("caseCode").value;    
  
    showSpinner();
    // Show spinner for 1 sec
    setTimeout(() => {
      hideSpinner();
      generateQRCode(productName, productVolume, caseCode, NoCases, size);
      // showScanner();
      // // Generate the save button after the qr code image src is ready
      setTimeout(() => {
        // Get save url
        const saveUrl = qr.querySelector("canvas").toDataURL();
        // Create save button
        createSaveBtn(saveUrl);
      }, 50);
    }, 1000);
  }


  
    
     
  
    


// Generate QR code
const generateQRCode = (productName, productVolume,caseCode ,NoCases ,size) => {
  
  // create a new `Date` object
const now = new Date();

// get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  
  let productNames = " product name : " + productName +" \n";
  let productVolumes = " product volume : " + productVolume +" \n";
  let NoCasess = " Number of cartons :" + NoCases +" \n";
  let caseCodes ="Case Code: "+ caseCode + currentDateTime +" \n";

  const qrcode = new QRCode("qrcode", {
    text: productNames +productVolumes +caseCodes+NoCasess ,
    width: size,
    height: size,
  });
};

// Clear QR code and save button
const clearUI = () => {
  qr.innerHTML = "";
  const saveBtn = document.getElementById("save-link");
  if (saveBtn) {
    saveBtn.remove();
  }
};

// hide  scanner
// const showScanner = () => {
//   const scanner = document.getElementById("qrCodeContainer");
//   scanner.style.display = "block";
// };

// Show spinner
const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";
};

// Hide spinner
const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
};

// Create save button to download QR code as image
const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
  link.innerHTML = "Save Image";

  link.href = saveUrl;
  link.download = "qrcode.png";

  document.getElementById("generated").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
