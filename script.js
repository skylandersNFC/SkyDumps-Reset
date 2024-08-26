window.onload = function() {
    var e = [
        5,
        6,
        8,
        9,
        10,
        12,
        13,
        14,
        16,
        17,
        18,
        20,
        21,
        22,
        24,
        25,
        26,
        28,
        29,
        30,
        32,
        33,
        36,
        37,
        38,
        40,
        41,
        42,
        44,
        45,
        46,
        48,
        49,
        50,
        52,
        53,
        54,
        56,
        57,
        58,
        60,
        61
    ];
    var t = null,
        n = null,
        l = document.getElementById("dumpToy");
    l.addEventListener("change", function(e) {
        var o = l.files[0];
        let a = document.getElementById("labelToy");
        (a.textContent =
            o.name.substring(0, 20) + (o.name.length > 20 ? "..." : "")),
        (a.title = o.name);
        var i = new FileReader();
        (i.onload = function(e) {
            t = new Uint8Array(1024);
            for (let e = 0; e < t.length; e++) t[e] = i.result.charCodeAt(e);
            (n = o.name.replace(/\.[^.]+$/, ".reset.dump")), (r.style.display = "inline");
        }), i.readAsBinaryString(o);
    });
    var r = document.getElementById("download");
    r.addEventListener("click", function(l) {
        if ((r.removeAttribute("download"), r.removeAttribute("href"), t)) {
            let l = (function(t) {
                for (let n = 0; n <
                    e.length; n++) {
                    let l = 16 * e[n];
                    t.fill(0, l, l + 16);
                }
                return t;
            })(t);
            (r.download = n), (r.href = (function(e) {
                var t = new Blob([e], {
                    type: "application/octet-stream"
                });
                return window.URL.createObjectURL(t);
            })(l));
        }
    });
}