//Async and await function that returns a promise.
//Vim text editor. i: insert, esc:w write, ecs:q! discard all changes and quit

    const doSomethingAsync = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve(alert('I waited 4 seconds before responding....')), 4000);
        });
    };

    const doSomething = async () => {
        console.log(await doSomethingAsync());
    };

/*
*Calls the function doSomething, which calls doSomethingAsync.
*Timeout is set to 4 seconds before the alert box is triggered.
*/ 
   console.log(doSomething());


