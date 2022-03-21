let generateQr = document.querySelector('#generateQr');
let qrImage = document.querySelector('#qrImage');
let imgContainer = document.querySelector('#imgContainer');
generateQr.addEventListener('click',()=>{
    let qrInput = document.querySelector('#qrInput').value;
    generateQr.innerText = 'Generating QR Code...'
    imgContainer.style.height="0px";
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}`;
    qrImage.addEventListener('load',()=>{
        imgContainer.style.height="150px";
        generateQr.innerText = 'Generate QR Code'        
    })
})