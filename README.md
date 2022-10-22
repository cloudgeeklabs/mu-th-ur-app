# MU-TH-UR 6000 Emulator
A simple and intuitive MU-TH-UR Emulator to use in my next Aliens game! 

## CI/CD
GitHub Action to Push Infrastructure and Code to Azure AppServices

## Work Completed
- Added multi-line Log Entry info

## Adding additional Log Entries
Edit ./js/chat.js file.. Example of 3 lines of communication below. (Starts around LINE 100). Node.JS code does not handle word wrap very well. Avoid long lines that would wrap. Also 3-5 seconds need to be added for each line. See the below example where we pass "setTimeout()" a larger INT value for each additional line of text. Each REF $("#21230315") must be unique and added to index.html for it to be available to the App. 

```javascript
// Sample Description
$("#21230315").on("click", function () {
    // Log Entry Name/Header
    var msg = "Log Entry 21230315:1345hrs - Chief Administration Officer";
    server.emit('message', JSON.stringify({"content": msg, "from": 'Peter Garrett', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));

    // Line 1
    setTimeout(function() {
    var msg = "All communications are currently down due to damage caused by the Sand Storm on the Surface of LC1413. This is the worst storm yet!";
    server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
    },3000);

    // Line 2
    setTimeout(function() {
    var msg = "Chief Michaels was injured while attempting to repair the Comm Array, he'll make a full recovery. But Communications will remain iffy until he is back on his feet. ";
    server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
    },8000);

    // Line 3
    setTimeout(function() {
    var msg = "We will continue to transmit, though it isn't clear how much if any signal is making it to the orbital relay station. --END LOG ";
    server.emit('message', JSON.stringify({"content": msg, "from": '', "type": "text", "room": window.localStorage.getItem('my-room-ID')}));
    },11000);
});
```