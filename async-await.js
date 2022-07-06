//Async and await function that returns a promise.

//Vim text editor. i: insert, esc:w write, :q quit OR  ecs:q! discard all changes and quit

//git. git init, git add <files> or . <all files>, git commit -m "your save message",
// git push -u origin maim

    const doSomethingAsync = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve( alert('I waited 5 seconds before responding....') ), 5000);
        });
    };

    const doSomething = async () => {
        console.log(await doSomethingAsync());
    };

/*
*Calls the function doSomething, which calls doSomethingAsync.
*Timeout is set to 5 seconds before the alert box is triggered.
*/ 
   console.log(doSomething());


