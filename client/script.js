import { io } from 'socket.io-client'

document.addEventListener('DOMContentLoaded', function () {
    
    const messageBox = document.getElementsByClassName('message-container')[0];
    const messageBtn = document.getElementById('btn-send-message');
    const joinBtn = document.getElementById('btn-join-room')

    const socket = io('http://localhost:3000')

    function displayMessage(message) {
        const div = document.createElement('div');
        div.textContent = message;
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

        inputMessage.value = ''
    })

    joinBtn.addEventListener('click', function(e){
        const inputRoom = document.getElementById('input-room');
        const room = inputRoom.value;
    })

})
