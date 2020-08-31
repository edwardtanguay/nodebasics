const getServer = (idCode) => {
    return new Promise((resolve, reject) => {
        const seconds = Math.floor(Math.random() * 4) + 1;
        setTimeout(() => {
            resolve({
                idCode: idCode,
                name: 'Server ' + idCode.toUpperCase(),
                seconds: seconds
            });
        }, seconds * 1000);
    });
};
 
const accessServers = async (serverIdCodes) => {
    let count = 0;
    for (const serverIdCode of serverIdCodes) {
        const server = await getServer(serverIdCode);
        count++;
        console.log(`Got server #${count} called "${server.name}" which took ${server.seconds} seconds.`);
    }
};
 
const serverIdCodes = ['internal003', 'internal002', 'external011'];
accessServers(serverIdCodes);
 
accessServers(['internal033', 'internal011', 'internal012', 'external141', 'external117']);