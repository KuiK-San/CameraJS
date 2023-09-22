var video = document.querySelector('video')
const specs = {video:{width:320}}

navigator.mediaDevices.getUserMedia(specs)
.then( stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error => {
    console.log(error)
})

document.querySelector('button').addEventListener('click', () =>{
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');