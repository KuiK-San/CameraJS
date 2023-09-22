var video = document.querySelector('#camera')
const specs = {video:{width:320}}

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
    var canvas = document.querySelector('#imagem');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    var link = document.createElement('a');
    link.download = 'foto.png';
    link.href = canvas.toDataURL();
    link.textContent = 'Clique para baixar a imagem';
    document.body.appendChild(link);
})