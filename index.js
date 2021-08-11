function receivesAFunction(callback) {
    return callback();
};

function returnsANamedFunction() {
    return function Adam() {
        console.log('I have been named')
    };
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Who could I be?')
    };
};
