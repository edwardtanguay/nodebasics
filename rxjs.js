// npm i rxjs rxjs-compat
const Rx = require('rxjs/Rx');

const sub = new Rx.Subject(); // Create a subject 

sub.asObservable().subscribe( // Subscribe to that subject as obserable
    ({item, found, count}) => { // next
        console.log(`Item #${count} "${item}" was ${found ? 'found' : 'not found'}.`);
    },
    error => { // error
        console.log("ERROR: " + error);
    },
    message => { // complete
        console.log("Returned from shopping: " + message);
    }
);

const goShopping = (list) => {
    let count = 0;
    let numberFound = 0;

    const randomError = Math.floor(Math.random() * 3);
    if (randomError == 0) {
        sub.error('Something went wrong, trip aborted.'); // push an error to the subject
    } else {
        list.forEach(item => {
            const randomFound = Math.floor(Math.random() * 4);
            if (randomFound > 0) {
                sub.next({item: item, found: true, count: ++count}); // push a result to subject (single object)
                numberFound++;
            } else {
                sub.next({item: item, found: true, count: ++count}); // same as above
            }
            sleep(1000);
        })
        sub.complete(`Bought ${numberFound} things.`); // push complete to subject. after that no next is allowed anymore
    }
}