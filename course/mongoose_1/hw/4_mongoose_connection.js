

// HW: What is the function below doing?
function checkConnectionState() {
    const state = mongoose.connection.readyState;
    switch (state) {
        case 0:
            console.log('Disconnected');
            break;
        case 1:
            console.log('Connected');
            break;
        case 2:
            console.log('Connecting');
            break;
        case 3:
            console.log('Disconnecting');
            break;
        default:
            console.log('Unknown state');
    }

    // Close the connection if it is established
    if (state === 1) {
        mongoose.connection.close(() => {
            console.log('Connection closed');
            process.exit(0); // Exit the process
        });
    }
}
