document.addEventListener('DOMContentLoaded', function () {

    const messageBox = document.getElementsByClassName('message-container')[0];
    const messageBtn = document.getElementById('btn-send-message');
    const joinBtn = document.getElementById('btn-join-room')

    function displayMessage(message) {
        const div = document.createElement('div');
        div.textContent = message;
        div.style = 'font-size: 1.2rem; color: navy; margin: 5px; padding: 5px; background-color: #f7f7f7f7';
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
