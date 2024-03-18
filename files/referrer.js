let nextPath;
function checkReferrer() {
    let referrerPath = document.referrer != "" ? new URL(document.referrer).pathname : "";
    let currPath = new URL(window.location.href).pathname;
    currPath = currPath.match(/\d+/);
    let currInt = document.referrer != "" ? parseInt(currPath[0]) : "";
    let expectedReferrerPath = "/a" + (currInt-1) + ".html";
    nextPath = "a" + (currInt+1) + ".html";
    console.log(currInt);
    console.log(nextPath);
    // Check if the referrer is not empty and pathname is the expected URL pathname
    if ((referrerPath == "") || (referrerPath != expectedReferrerPath)) {
        window.location.href = "a1.html";
    }
} checkReferrer();