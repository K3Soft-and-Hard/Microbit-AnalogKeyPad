// tests go here; this will not be compiled when this package is used as an extension.
while (true) {
    let c = keyPressed();
    if (c != '') {
        basic.showString(c)
    }
}