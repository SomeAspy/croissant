/**
 * @name Croissant
 * @author Some_Aspy#9999
 * @description every click notifies you of a croissant
 * @version 0.0.1
 * @authorId 516750892372852754
 * @authorLink https://github.com/SomeAspy
 */

module.exports = class ExamplePlugin {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
