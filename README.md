
> Open this page at [https://k3soft-and-hard.github.io/Microbit-AnalogKeyPad/](https://k3soft-and-hard.github.io/Microbit-AnalogKeyPad/)

## Introduction

![icon](https://github.com/k3soft-and-hard/Microbit-AnalogKeyPad/raw/master/icon.png)

This extension allows to handle 1-wire analog keyboard. The keyboard has 3 pins, 2 of them are GND and VCC, data is read from the analog pin having voltage between 0 and VCC. 

## Usage Example

* Initialize AnalogKeyPad Interface
```blocks
k3analogkeypad.setAnalogKeyPad(AnalogPin.P1)
```

* Test Key Pressed and Show it on Display
```blocks
c = k3analogkeypad.keyPressed()
if (c != "") {
    basic.showString(c)
}
```

* Other
```sig
k3analogkeypad.keyPressed()
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/k3soft-and-hard/microbit-analogkeypad** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/k3soft-and-hard/microbit-analogkeypad** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
