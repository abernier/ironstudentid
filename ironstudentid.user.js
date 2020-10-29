// ==UserScript==
// @name         ironstudentid
// @version      1.0.1
// @author       abernier
// @namespace    name.abernier
// @description  change some IDs into students' names on https://metabase.ironhack.tech/*
// @homepage     https://github.com/abernier/ironstudentid
// @updateURL    https://github.com/abernier/ironstudentid/raw/master/ironstudentid.user.js
// @downloadURL  https://github.com/abernier/ironstudentid/raw/master/ironstudentid.user.js
// @supportURL   https://github.com/abernier/ironstudentid/issues
// @include      /^https?:\/\/metabase\.ironhack\.tech\/.*/
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

console.log('ironstudents', document.body)

//
// see: https://metabase.ironhack.tech/question/387
// see: https://metabase.ironhack.tech/question/389
//

const students = {
    '5ea947bae2a33d000c7f13c7': 'Wafaa',
    '5e5524ebb3dcf00016a9c1d5': 'Thomas',
    '5ebe873d269a52000cdbcd44': 'Thi Trang',
    '5e8448aa630bb9000ada75cf': 'Sarah',
    '5e844b7f630bb9000ada75d5': 'Sophie',
    '5e5522ffb3dcf00016a9c1d4': 'Pierre-Alderic',
    '5e906f321d3699000be084d8': 'Nina',
    '5e654093ab68620016846a1f': 'Marwa',
    '5e805480b091d000093fb377': 'Marine',
    '5e50202db3dcf00016a9c1b8': 'Toufiq',
    '5e81f0633fc6730009b4a347': 'Laura',
    '5e9052d0e28479000b3135a8': 'Kardelen',
    '5e5522d8b3dcf00016a9c1d3': 'Gonzalo',
    '5e81eaf93fc6730009b4a345': 'Enine',
    '5e845027630bb9000ada75e8': 'Clémentine',
    '5e7a14f5907747000a499eb6': 'Claire',
    '5e844d77630bb9000ada75da': 'Cassandre'
}

// Observe DOM changes
const observer = new MutationObserver((mutationsList, observer) => {
    // Replace IDs by students' names
    document.querySelectorAll('.cellData').forEach($cell => {
        //console.log('$cell', $cell)
        const studentId = $cell.textContent.trim()

        if (studentId in students) {
            $cell.textContent = students[studentId];
        }
    })
})
observer.observe(document.body, { childList: true, subtree: true });
