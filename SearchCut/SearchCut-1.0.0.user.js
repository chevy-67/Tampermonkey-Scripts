// ==UserScript==
// @name         SearchCut
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Use shortcut to search for a selected text instead of manually copying and searching
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const query = "what is"

    window.addEventListener("keydown",(event)=>{
        if(event.metaKey && event.key.toLowerCase()==='x'){
            let text = window.getSelection().toString()
            if(text){
                window.open(`https://google.com/search?q=${query }+${text}`,"_blank")
            }
            else{
                alert("Please select any text to search")
            }
        }
    })
})();

