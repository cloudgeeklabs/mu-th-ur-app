var ENTER = "Enter";
var muteBtn = document.getElementById('mute-button');

function createNavBar() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
}

function changeButtonType(btn, value) {
    btn.title = value;

    var span = btn.querySelector('.glyphicon');
    span.classList.remove('glyphicon-volume-off', 'glyphicon-volume-up');
    span.classList.add('glyphicon-' + value);
}

function toggleSound() {
    if (sound) {
        changeButtonType(muteBtn, 'volume-off');
        sound = false;
    } else {
        changeButtonType(muteBtn, 'volume-up');
        sound = true;
    }
}

function roomNameInput(event)
{
   if (event.keyCode == 13) {
      return false;
   }
}


// MAIN
$(function () {
    // Execute a function when the user releases a key on the keyboard
    $("#input").on("keydown", function (event) {
        var key = event.key;
        if (key === ENTER) {
            event.preventDefault();
            var data = {
                "content": event.target.textContent,
                "from": user,
                "type": "text",
                "room": window.localStorage.getItem('my-room-ID')
            }
            server.emit('message', JSON.stringify(data));
            event.target.textContent = "";
        }
    });

    $("#inputImg").on("click", function (event) {
        const file = document.querySelector('#file-upload').files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            var base64 = reader.result;//base64encoded string
            var data = {
                "content": base64,
                "from": user,
                "type": "base64",
                "room": window.localStorage.getItem('my-room-ID')
            }
            server.emit('message', JSON.stringify(data));
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    });

    $("#input").on("keyup", function (event) {
        if (sound) {
            var audio = new Audio('typewriter/typewriter-key-even.wav');
            audio.play();
        }
    });

    $('#input').keyboard({
        theme: 'monokai',
    });

    $("#tutorialBtn").on("click", function () {
        $('#tutorialData').modal('show');
    });

    // Site Logs
    // Storm - Loss Comms Log
    $("#21230315").on("click", function () {
        var msg = "Log Entry 21230315:1345hrs - Chief Administration Officer";
        server.emit('message', JSON.stringify({"content": msg, "from": 'Peter Garrett', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));

        setTimeout(function() {
        var msg = "All communications are currently down due to damage caused by the Sand Storm on the Surface of LC1413.";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },3000);

        setTimeout(function() {
        var msg = "Chief Michaels was injured while attempting to repair the Comm Array, he'll make a full recovery. ";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },8000);

        setTimeout(function() {
        var msg = "We will continue to transmit, though it isn't clear how much if any signal is making it to the orbital relay station. --END LOG ";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },11000);
    });

    // Discovery of Site
    $("#21230323").on("click", function () {
        var msgHeader = "Log Entry 21230323:1000hrs - Chief Administration Officer";
        server.emit('message', JSON.stringify({"content": msgHeader, "from": 'Peter Garrett', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        setTimeout(function() {
            var msg = "While digging out new tunnels on Level 8, our team made a remarkable discovery! The ruins of some ancient Alien Civilization.";
            server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
            },3000);
            setTimeout(function() {
            var msg = "The science team has already begun excavation and exploration of the area. --END LOG";
            server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
            },8000);
    });

    // Face Huggers appear
    $("#21230325").on("click", function () {
        var msgHeader = "Log Entry 21230327:1345hrs - Chief Administration Officer";
        server.emit('message', JSON.stringify({"content": msgHeader, "from": 'Peter Garrett', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));

        setTimeout(function() {
        var msg = "Update to Discovery. Several of our research personal have been injured by some for of alien creature.";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },3000);

        setTimeout(function() {
        var msg = "Some form of spider like creature emerged from small pods found within the site and attached to six researchers faces.";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },8000);

        setTimeout(function() {
        var msg = "Doctor Bashir has attempted to remove the creatures, but they release some sort of acid when cut causing severe wounds to the victim. ";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },11000);

        setTimeout(function() {
        var msg = "We will continue to monitor and update as the situation changes.. -- END LOG";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },14000);
    });

    // Things are getting worse
    $("#21230405").on("click", function () {
        var msgHeader = "Log Entry 21230405:2300hrs - Chief Administration Officer";
        server.emit('message', JSON.stringify({"content": msgHeader, "from": 'Peter Garrett', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));

        setTimeout(function() {
        var msg = "Several more men have been taken by these aptly named face-huggers while trying to learn more about these Aliens.";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },3000);

        setTimeout(function() {
        var msg = "In accordance with Doctor Bashir's advice, I've suspended all activity to the Site until we can make contact with the Company.";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },8000);

        setTimeout(function() {
        var msg = "The orginal six patients are making a recovery after the face-huggers suddenly died and released them.";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },11000);

        setTimeout(function() {
        var msg = "We will continue to monitor and update as the situation changes.. -- END LOG";
        server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
        },14000);
    });

    var welcomeMessage = "Secure Connection Established to MainFrame [Site LC1413]";
    typeWriter("welcome", welcomeMessage, 0);


    // TODO: enable for prod
    var form = $('<form>' +
            '<input type="text" id="server" name="server" placeholder="room" onkeypress="return roomNameInput(event);"/>&nbsp;&nbsp;'+
            '<input type="radio" id="muthur" name="login" value="muthur">&nbsp;'+
            '<label for="nuthur">MU/TU/UR</label>&nbsp;&nbsp;'+
            '<input type="radio" id="player" name="login" value="player">&nbsp;'+
            '<label for="player">User</label>'+
        '</form>');

    bootbox.alert(form, function(){
        var roomTmp = $('input[name=server]').val();
        var loginTmp = $('input[name=login]:checked').val()
        createServer(roomTmp, loginTmp);
    });
    // TODO: dev
    // createServer("muthur", "muthur");
    createNavBar();
});