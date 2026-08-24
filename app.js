console.log("Hello world!");

function greet(name) {
    console.log("Hello", name);
}

function login({ name }) {
    // network calls with required data i.e. name

    // response

    // success -> redirect to otp enter page
    // failure -> error show
}

function verifyOTP({ otp }) {
    // newtwork call -> otp
    // header token appended

    // response

    // success -> redirect to home page
    // failure -> give another chance to enter otp
}

// login
// verifyOTP