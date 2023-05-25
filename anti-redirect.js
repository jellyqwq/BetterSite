// ==UserScript==
// @name         anti-redirect
// @namespace    https://github.com/jellyqwq
// @version      0.1
// @description  try to take over the world!
// @author       jellyqwq
// @match        https://*.juejin.cn/**/**
// @match        https://*.zhihu.com/**/**
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        let surgeA = document.querySelectorAll('a');
        for (let i=0;i<surgeA.length;i++) {
            let link = decodeURIComponent(surgeA[i].href)
            // 知乎跳转
            if (document.domain.search(/^.*?\.zhihu\.com/g) == 0) {
                surgeA[i].href=link.replace(/https:\/\/link\.zhihu\.com\/\?target=/g, '')
                console.log(surgeA[i].href)
            }
            // 掘金跳转
            if ((document.domain.search(/^.*?\.juejin\.cn/g) == 0)) {
                surgeA[i].href=link.replace(/https:\/\/link\.juejin\.cn\/\?target=/g, '')
                console.log(surgeA[i].href)
            }
        }
        console.log('ok')
    }, 1000)
})();