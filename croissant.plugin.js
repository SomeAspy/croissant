/**
 * @name Croissant
 * @author Some_Aspy#9999
 * @description every click notifies you of a croissant
 * @version 0.0.1
 * @authorId 516750892372852754
 * @authorLink https://github.com/SomeAspy
 */

module.exports = class Croissant {

    start() {
        document.addEventListener("click", ()=> alert("Croissant", "Croissant"))
    } // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated
    getName() { return "Croissant"; }
    getAuthor() { return "Some_Aspy#9999"; }
    getDescription() { return "every click notifies you of a croissant"; }
    getVersion() { return "0.0.1"; }
}
