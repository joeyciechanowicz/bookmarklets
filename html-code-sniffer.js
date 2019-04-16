(function() {
    function runSniffer(e) {
        e.target.classList.remove('elSelectorHighlight');
        document.body.removeEventListener('mouseover', mouseover);
        document.body.removeEventListener('mouseout', mouseout);

        var b = {
            path: "https://squizlabs.github.io/HTML_CodeSniffer/build/"
        };
        (function(b, c) {
            var a = document.createElement("script");
            a.onload = function() {
                a.onload = null;
                a.onreadystatechange = null;
                c.call(this)
            }
            ;
            a.onreadystatechange = function() {
                !0 === /^(complete|loaded)$/.test(this.readyState) && (a.onreadystatechange = null,
                a.onload())
            }
            ;
            a.src = b;
            document.head ? document.head.appendChild(a) : document.getElementsByTagName("head")[0].appendChild(a)
        }
        )("https://squizlabs.github.io/HTML_CodeSniffer/build/HTMLCS.js", function() {
            HTMLCSAuditor.run("WCAG2AA", e.target, b)
        });
    }

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.elSelectorHighlight,.elSelectorHighlight * {background: #8fb7e2 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    function mouseover(e) {
        e.target.classList.add('elSelectorHighlight');
        e.target.addEventListener('click', runSniffer);
    }

    function mouseout(e) {
        e.target.classList.remove('elSelectorHighlight');
        e.target.removeEventListener('click', runSniffer);
    }

    document.body.addEventListener('mouseover', mouseover);
    document.body.addEventListener('mouseout', mouseout);
}
)();
