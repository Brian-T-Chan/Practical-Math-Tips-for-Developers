
/* For (nearly) unlimited scrolling. Used to display
   numbers in decimal (when base is 10) and binary 
   (when base is 2) */

function numberframe(base) {

    let size = 30;

    let list;
    let numDigits;

    if (base === 10) {

        list = document.getElementById("framebody1");
        numDigits = 7;

    } else if (base === 2) {

        list = document.getElementById("framebody2");
        numDigits = 11;
    }

    for (let i = 0; i < size; i++) {

        let innerstring;

        if (base === 10)
            innerstring = String(i);
        else if (base === 2)
            innerstring = i.toString(2);

        let add = numDigits - innerstring.length;

        for (let j = 0; j < add; j++)
            innerstring = "0" + innerstring;

        list.innerHTML += "... " + `${innerstring} <br>`;
    }

    function extend(base) {

        size += 1;
        let innerstring;

        if (base === 10)
            innerstring = String(size);
        else if (base === 2)
            innerstring = size.toString(2);

        let add = numDigits - innerstring.length;

        for (let i = 0; i < add; i++)
            innerstring = "0" + innerstring;

        if (size >= base ** numDigits)
            list.innerHTML += " overflow <br> ";
        else
            list.innerHTML += "... " + `${innerstring} <br>`;
    }

    document.addEventListener("scroll", () => 
        window.requestAnimationFrame(() => extend(base)));
}

/* Also for (nearly) unlimited scrolling. Used to compare 
   decimal (base 10) and binary (base 2) numbers using
   latex.  */

function compareframes() {

    let size = 20;
    let list = document.getElementById("framebody3");

    const startstring = "\\begin{align*}";
    const stopstring = "\\end{align*}";

    for (let i = 0; i <= size; i++) {

        let innerstring = "\\Large" + String(i) 
                          + "\\;\\; &{\\huge \\dashrightarrow} \\Large \\;\\;"
                          + i.toString(2) + "\\\\";

        list.innerHTML += startstring;
        list.innerHTML += innerstring;
        list.innerHTML += stopstring;
    }

    function extend() {

        size += 1;

        let innerstring = "\\Large" + String(size) 
                          + "\\;\\; &{\\huge \\dashrightarrow} \\Large \\;\\;"
                          + size.toString(2) + "\\\\";

        list.innerHTML += startstring;
        list.innerHTML += innerstring;
        list.innerHTML += stopstring;
    }

    document.addEventListener("scroll", () => 

        window.requestAnimationFrame(() =>

               MathJax.typesetPromise().then(() => {
                    extend();
                    MathJax.typesetPromise();
               }).catch((err) => console.log(err.message))
        )
    );
}
