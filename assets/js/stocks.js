$(function () {
    PrintTime();
    ben();

    setInterval(function () {
        PrintTime();
        ben();
    }, 1000 * 60);

    function ben() {
        $.ajax({
            url: "http://localhost:3000/",
            method: "GET",
            dataType: "json",
        }).done((json) => {
            disassemble(json);
        });
    }

    function disassemble(data) {
        var dis = data;
        dis.forEach((element) => {
            element.forEach((a) => {
                console.log(a);
            });
        });
    }
    function PrintTime() {
        var today = new Date();
        var hh = today.getHours();
        var mi = today.getMinutes();
        var ss = today.getSeconds();

        console.log(hh + ":" + mi + ":" + ss);
    }
});
