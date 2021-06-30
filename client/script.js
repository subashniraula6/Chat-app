import openSocket from 'socket.io-client'
// or //import { io } from 'socket.io-client'

document.addEventListener('DOMContentLoaded', function () {
    
    const messageBox = document.getElementsByClassName('message-container')[0];
    const messageBtn = document.getElementById('btn-send-message');
    const joinBtn = document.getElementById('btn-join-room')

    //socket
    const socket = openSocket('http://localhost:3000')

    socket.on('connect', () => {
        displayMessage('You are connected with id: ' + socket.id)
    })

    socket.on('receive-message', message => {
        displayMessage(message, 'receive')
    })

    function displayMessage(message, type) {
        const div = document.createElement('div');
        div.textContent = message;
        div.style = (type === 'receive') ? 'background-color: #f7f7f7f7; text-align: end': null;
        messageBox.append(div)
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputMessage = document.getElementById('input-message');
        const message = inputMessage.value;
        
        const inputRoom = document.getElementById('input-room');
        const room = inputRoom.value;
        
        if (message === '') return
        displayMessage(message)

        socket.emit('send-message', message, room)

        inputMessage.value = ''
    })

    joinBtn.addEventListener('click', function(e){
        const inputRoom = document.getElementById('input-room');
        const room = inputRoom.value;
    })

})
