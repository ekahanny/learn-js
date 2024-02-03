// Pola Callback
// function getUsers(isOffline, callback) {
//     setTimeout(() => {
//         const users = ['Eka', 'Hanny', 'Oktavia']

//         if(isOffline){
//             callback(new Error("Cannot retrieve users due offline"), null);
//             return;
//         }

//         callback(null, users);

//     }, 3000);
// }

// function userCallback(error, users){
//     if(error){
//         console.log('Process failed:', error.message);
//         return;
//     }

//     console.log('process success:', users)
// }

// getUsers(false, userCallback);
// getUsers(true, userCallback);


// Promise
function getUsers(isOffline) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = ['Eka', 'Hanny', 'Oktavia'];

            if (isOffline) {
                reject(new Error('Anda sedang offline'));
                return;
            }

            resolve(users);

        }, 3000);
    })

}

getUsers(true)
.then(users => console.log(users))
.catch(error => console.log(error.message))

