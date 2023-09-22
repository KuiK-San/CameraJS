var video = document.querySelector('#camera')
const specs = {video:true}

const startButton = document.getElementById('startCamera');

startButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(specs);
        video.srcObject = stream;
        video.play();
    } catch (error) {
        console.error('Erro ao iniciar a câmera:', error);
    }
});

document.querySelector('#tirarFoto').addEventListener('click', () =>{
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    var envia = document.querySelector('#enviarFoto');
    var enviaBtn = document.querySelector('#enviarFotoBtn');
    enviaBtn.style.display = 'block'
    imgData = canvas.toDataURL("image/png");

    
})

document.querySelector('#enviarFotoBtn').addEventListener('click', (button) => {
    fetch('/salvar-imagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({imgData}),
    })
    .then(response => response.text())
    .catch(error => {
        console.error('Erro ao salvar a imagem', error);
    })
})