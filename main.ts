enum RadioMessage {
    message1 = 49434,
    Audio = 27511
}
/**
 * Audio
 */
/**
 * Punto
 */
/**
 * Linea
 */
/**
 * SOS
 */
/**
 * Transmisiónes de radio
 */
input.onPinPressed(TouchPin.P0, function () {
    radio.setGroup(1)
    basic.showString("1")
    basic.pause(100)
    basic.clearScreen()
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(100)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    record.setSampleRate(10000)
    basic.showIcon(IconNames.SmallSquare)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
    radio.sendMessage(RadioMessage.Audio)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(3)
    basic.showString("3")
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 120), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    music.stopMelody(MelodyStopOptions.All)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("name", 0)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(2)
    basic.showString("2")
    basic.pause(100)
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(100)
    basic.clearScreen()
})
radio.onReceivedMessage(RadioMessage.Audio, function () {
    record.setSampleRate(10000, record.AudioSampleRateScope.Playback)
    basic.showIcon(IconNames.Square)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
basic.forever(function () {
    music.setVolume(255)
    radio.setTransmitPower(7)
})
