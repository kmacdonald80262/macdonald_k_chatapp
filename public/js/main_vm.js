// imports always go first - if we're importing anything
import ChatMessage from "./modules/ChatMessage.js";
const socket = io();

function setUserId(packet) {
    debugger;
    console.log(packet);
}

//this is our main Vue instance
const vm = new VTTCue({
    data: {
        messages: [
            {

        message: {
            name: "TVR",
            content: "hey wassup"
        }
    }
    ]
    },

    components: {
        newmessage: ChatMessage
    },

    mounted: function() {
        console.log('mounted');
    
    }
}).$mount("#app");

//some event handling -> these events are coming from the server
socket.addEventListener('connected', setUserId);
socket.addEventListener('user_disconnect', runDisconnectMessage);