//% weight=0 color=#2949c6 icon="\uf11c" block="K3AnalogKeyPad"
namespace k3analogkeypad {
    let pin: AnalogPin = AnalogPin.P0;
    let analogThresholds: number[] = [
        974, 892, 819,
        756, 705, 658,
        616, 581, 550,
        521, 496, 242
    ];
    let keysStr: string[] = [
        "1", "2", "3",
        "4", "5", "6",
        "7", "8", "9",
        "*", "0", "#"
    ];

    //% blockId=setAnalogKeyPad block="set 3*4 AnalogKeyPad pin: %pin1" blockExternalInputs=false
    //% weight=70
    //% pin1.fieldEditor="gridpicker" pin1.fieldOptions.columns=4
    export function setAnalogKeyPad(pin1: AnalogPin): void {
        pin = pin1;
    }

    /**
     * Returns the key pressed as a string.
     * If no key is currently pressed, returns empty string.
     */
    //% blockId=keyPressed block="keyPressed"
    export function keyPressed(): string {
        let myString = "";
        let value: number = pins.analogReadPin(pin);
        for (let i = 0; i < analogThresholds.length; i++) {
            if (value > analogThresholds[i]) {
                myString = keysStr[i];
                break;
            }
        }
        return myString;
    }
}
