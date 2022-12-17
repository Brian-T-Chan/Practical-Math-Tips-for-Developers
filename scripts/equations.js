

function dynamicDisplay(mql, changeHTML) {

    if (mql.matches) changeHTML();

    mql.addEventListener('change', event => {

        if (event.matches) {
            window.requestAnimationFrame(() =>
                   MathJax.typesetPromise().then(() => {
                        changeHTML();
                        MathJax.typesetPromise();
                   }).catch((err) => console.log(err.message))
            )
        }
    })
}


function enableDynamicDisplay(dynamicCode) {

    let config = [];

    for (let eqName in dynamicCode) {        
        for (let setting of dynamicCode[eqName]) {

            config.push([]);

            config[config.length - 1].push(
                window.matchMedia(setting.mediaQuery)
                );

            config[config.length - 1].push(() => {
                    const content = document.getElementById(eqName);
                    content.innerHTML = setting.code;
                }
            );
        }
    }

    config.forEach(item => dynamicDisplay(item[0], item[1]));
}


let dynamicCode = {

    "variablesEq3" : [
        {
            "mediaQuery" : "screen and (max-width: 1100px)",
            "code" : `
            <div class="boxed">
            \\[ y = \\bigg{(}\\frac{3}{5u - 4}\\bigg{)}^2 \\]\\[\\; + \\; 4 \\cdot \\bigg{(} \\frac{3}{5u - 4} \\bigg{)} \\]\\[+ \\; 7 \\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\; (3) \\]
            </div>
            `
        },
        {
            "mediaQuery" : "screen and (min-width: 1101px)",
            "code" : `
            <div class="boxed">
            \\[ y \\; = \\; \\bigg{(}\\frac{3}{5u - 4}\\bigg{)}^2 \\; + \\; 4 \\cdot \\bigg{(} \\frac{3}{5u - 4} \\bigg{)} \\; + \\; 7  \\;\\;\\;\\;\\;\\;\\;\\; (3) \\]
            </div>
            `
        }
    ],

    "variablesEqa" : [
        {
            "mediaQuery" : "screen and (max-width: 700px)",
            "code" : `
            <div class="boxed">
            \\[ \\bigg{(}\\frac{3}{5u - 4}\\bigg{)}^2 \\]\\[\\; = \\frac{3^2}{(5u - 4)^2} \\]\\[\\; = \\frac{9}{(5u - 4)^2}   \\]
            </div>
            `
        },
        {
            "mediaQuery" : "screen and (min-width: 701px) and (max-width: 1100px)",
            "code" : `
            <div class="boxed">
            \\[ \\bigg{(}\\frac{3}{5u - 4}\\bigg{)}^2 = \\frac{3^2}{(5u - 4)^2} \\]\\[\\;\\;\\;\\;\\;\\;\\; = \\frac{9}{(5u - 4)^2}  \\]
            </div>
            `
        },
        {
            "mediaQuery" : "screen and (min-width: 1101px)",
            "code" : `
            <div class="boxed">
            \\[ \\bigg{(}\\frac{3}{5u - 4}\\bigg{)}^2 = \\frac{3^2}{(5u - 4)^2} = \\frac{9}{(5u - 4)^2}  \\]
            </div>
            `
        }
    ],

    "variablesEqb" : [
        {
            "mediaQuery" : "screen and (max-width: 700px)",
            "code" : `
            <div class="boxed">
            \\[ 4 \\cdot \\bigg{(} \\frac{3}{5u - 4} \\bigg{)} \\]\\[\\; = \\frac{4 \\cdot 3}{5u - 4} \\]\\[\\; = \\frac{12}{5u - 4} \\]
            </div>
            `
        },
        {
            "mediaQuery" : "screen and (min-width: 701px) and (max-width: 1100px)",
            "code" : `
            <div class="boxed">
            \\[ 4 \\cdot \\bigg{(} \\frac{3}{5u - 4} \\bigg{)} = \\frac{4 \\cdot 3}{5u - 4} \\]\\[\\;\\;\\;\\;\\;\\;\\; = \\frac{12}{5u - 4} \\]
            </div>
            `
        },
        {
            "mediaQuery" : "screen and (min-width: 1101px)",
            "code" : `
            <div class="boxed">
            \\[ 4 \\cdot \\bigg{(} \\frac{3}{5u - 4} \\bigg{)} = \\frac{4 \\cdot 3}{5u - 4} = \\frac{12}{5u - 4} \\]
            </div>
            `
        }
    ], 

    "variablesEq4" : [
        {
            "mediaQuery" : "screen and (max-width: 1100px)",
            "code" : `
            <div class="boxed">
            \\[ y \\; = \\; \\frac{9}{(5u - 4)^2} \\]\\[\\; + \\; \\frac{12}{5u - 4} \\]\\[ \\;\\;\\; + \\; 7 \\;\\;\\;\\;\\;\\;\\; (4) \\]
            </div>
            `
        },
        {
            "mediaQuery" : "screen and (min-width: 1101px)",
            "code" : `
            <div class="boxed">
            \\[ y \\; = \\; \\frac{9}{(5u - 4)^2} \\; + \\; \\frac{12}{5u - 4} \\; + \\; 7 \\;\\;\\;\\;\\;\\;\\;\\; (4) \\]
            </div>
            `
        }
    ]
};


enableDynamicDisplay(dynamicCode);
