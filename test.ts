let c = ""
k3analogkeypad.setAnalogKeyPad(AnalogPin.P0)

basic.forever(function () {
    c = k3analogkeypad.keyPressed()
    if (c != "") {
        basic.showString(c)
    }
})
