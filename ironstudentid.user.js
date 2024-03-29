// ==UserScript==
// @name         ironstudentid
// @version      1.2.3
// @author       abernier
// @namespace    name.abernier
// @description  change some IDs into students' names on https://metabase.ironhack.tech/*
// @homepage     https://github.com/abernier/ironstudentid
// @updateURL    https://github.com/abernier/ironstudentid/raw/main/ironstudentid.user.js
// @downloadURL  https://github.com/abernier/ironstudentid/raw/main/ironstudentid.user.js
// @supportURL   https://github.com/abernier/ironstudentid/issues
// @include      /^https?:\/\/metabase\.ironhack\.tech\/.*/
// @include      /^https?:\/\/ironhack\.metabaseapp\.com\/.*/
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

console.log('ironstudents', document.body)

const students = {
    // wdpt202302par
    '63d95fe1efe919002c3b8d6a': 'Bruno',
    '63a1ed25f23017002c380cf0': 'Cedric',
    '63316d43cc3798002c7d292e': 'Henri',
    '63935db686a05d002ccd4440': 'Mohamed',
    '63de3dc3ca07ad002cfce869': 'Nathalie',
    '63a06f83f8ea73002c573748': 'Nicolas',
    '6391e7234fd83d002c2333f6': 'Rachel',
    '634e5937d8bb84002c921d75': 'Rayane',
    '63bd3b4bb2ef9e002c0d37c8': 'Singabe',
    '63b2fb1bfaaab9002c7b0b2a': 'Thomas',
    // wdpt202108par
    '60705c936ba3a7002ba63997': 'Yoojeong',
    '606ab5c7183cbf002b6b62b2': 'Cleiton',
    '604f991e276a60002b30e402': 'Kevin',
    '60e30e1a86ea33002bbb01e2': 'Silas',
    '60772aca30cc0c002ba8d4e1': 'Claire',
    '60792d47fca637002b292204': 'Auriane',
    '605da3037d558d002bcd1b75': 'Cindy',
    '605da7e354d91c002bc7762b': 'Aude',
    '6062dbeadbbb62002b21c27e': 'Emmanuelle',
    '60d5ae573703f0002b541ae0': 'Najia',
    '60c09499e088d1002b930ef4': 'Julie',
    '60b747a0391f01002be70917': 'Léa',
    '6092fdba4ed0df002bffc1eb': 'Eva',
    '6099437cd7c552002bcd5c44': 'Hassan',
    // wdpt202102par
    '5f7727256fab06000aa7c360': 'Ting-Chi',
    '5ff47e3ffd5493002d13ad7d': 'Tran',
    '5ffddd79a37993002d491592': 'Sofia',
    '5fa911d2720769002d02b967': 'Walid',
    '5ffc160037ecbf002d4c05c7': 'Michel',
    '5f620e05180b66000cb8af99': 'Mathilde',
    '5f3a3876cf7913000c3826bf': 'Massi',
    '5fdc81c28cafa8002d9570a7': 'Laurent',
    '5fea109dc7f3e5002d44f877': 'Laura',
    '5fc4c8e0b0342d002dd486d8': 'Karina',
    '5ffd89ffa37993002d491587': 'Julien',
    '5fd0e86e5d385c002dcd55b1': 'Chloé',
    '600aa13ca91c51002d7a747f': 'Alexandre Christacos',
    '5fdc8d7e8cafa8002d9570aa': 'Alexandre Capaldi',
    '5fbce39208fc1a002d5e5f11': 'Adam',
    // wdpt202006par
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
    document.querySelectorAll(
        [
            '.cellData',
            '[class*="LegendItemstyled__LegendItemTitle"] >div',
            '[data-testid="legend-item"] >div div+div >div',
        ].join(',')
    ).forEach($cell => {
        //console.log('$cell', $cell)
        const studentId = $cell.textContent.trim()

        if (studentId in students) {
            $cell.textContent = students[studentId];
        }
    })
})
observer.observe(document.body, { childList: true, subtree: true });
