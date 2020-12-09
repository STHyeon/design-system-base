// Nav 생성
function CreateNav() {
    var boxHTML = '<nav class="nav">';
    $('.section .box').each(function (el) {
        boxHTML += '<div class="box">';
        boxHTML += '<div class="title">';
        boxHTML +=
            '<a href="#' + $(this).attr('id') + '">' + $(this).children('.title').text() + '</a>';
        boxHTML += '</div><ul>';
        $(this)
            .children('.type')
            .each(function (ell) {
                var head = $(this).children('h2');
                var result = head.text().replace(/type[(0-9)][(0-9)]/, '');
                boxHTML += '<li><a href="#' + $(this).attr('id') + '">' + result + '</a></li>';
            });
        boxHTML += '</ul></div>';
    });
    boxHTML += '</ul></div></nav>';

    $('#wrap').prepend(boxHTML);
}

function GrantToActive(currPos, group) {
    $(currPos).on('click', function () {
        $('.' + group).removeClass('active');
        $(this).addClass('active');
    });
}

function ToggleToActive(currPos) {
    $(currPos).on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
}

// 파일 이름
function SetFileName(obj) {
    var a = $(obj).attr('id');
    $('.' + a + ' .file_name_show').html($(obj).val());
}

// 파일 생성/삭제
function CreateFileField() {
    var field = '';
    var check_num = 7;
    field += '<div class="type' + ' type0' + check_num + ' file' + check_num + '">';
    field += '<div class="clearfix">';
    field += '<div class="file_name_show disabled"></div>';
    field += '<label for="' + 'file' + check_num + '" class="btn label">파일</label>';
    field +=
        '<input type="file" name="" id="' +
        'file' +
        check_num +
        '" class="blind" onchange="Z(this)" />';
    field += '</div>';
    field += '</div>';

    $('.addBtn').click(function () {
        $('.custom_file').append(field);
        check_num++;
    });

    $('.removeBtn').click(function () {
        check_num--;
        $('.type0' + check_num).remove();
    });
}

// 막대차트
function BarChart() {
    var barctx = document.getElementById('barCanvas');

    new Chart(barctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
            responsive: false
        }
    });
}

// 꺾은선 그래프
function LineChart() {
    var linectx = document.getElementById('lineCanvas');
    var chartData = {
        labels: [
            '19`01',
            '19`02',
            '19`03',
            '19`04',
            '19`05',
            '19`06',
            '19`07',
            '19`08',
            '19`09',
            '19`10',
            '19`11',
            '19`12'
        ],
        datasets: [
            {
                label: 'a', //삭제되는 애
                data: [
                    13293,
                    9696,
                    18222,
                    39098,
                    25389,
                    30206,
                    17271,
                    17692,
                    24722,
                    37202,
                    32426,
                    35234
                ],
                backgroundColor: 'transparent',
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                borderWidth: 3,
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                lineTension: 0 // 직선을 원할 경우,
            }
        ]
    };

    new Chart(linectx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: false,
            legend: { display: false }, //label 삭제
            tooltips: { mode: 'index', intersect: false }, //라인에 hover시 값보이게
            hover: { mode: 'index', intersect: false } //라인에 hover시 값보이게
        }
    });
}

// 도넛 차트
function DoughnutChart() {
    var doughnutctx = document.querySelector('#doughnutCanvas');
    var data = {
        datasets: [
            {
                backgroundColor: ['red', 'yellow', 'green', 'orange', 'blue'],
                data: [10.2, 38.4, 32.8, 13.4, 5.3]
            }
        ],
        labels: ['20대', '30대', '40대', '50대', '60대 이상']
    };
    new Chart(doughnutctx, {
        type: 'doughnut',
        data: data,
        options: { responsive: false }
    });
}

// 텍스트 마지막으로 이동
function TextLastMove() {
    jQuery.fn.putCursorAtEnd = function () {
        return this.each(function () {
            var $el = $(this),
                el = this;

            if (!$el.is(':focus')) {
                $el.focus();
            }

            if (el.setSelectionRange) {
                var len = $el.val().length * 2;

                setTimeout(function () {
                    el.setSelectionRange(len, len);
                }, 1);
            } else {
                $el.val($el.val());
            }

            this.scrollTop = 999999;
        });
    };

    $('#tfResidentNumber').click(function () {
        $(this)
            .putCursorAtEnd()
            .on('focus', function () {
                $(this).putCursorAtEnd();
            });
    });
}

$(function () {
    CreateNav();

    GrantToActive('.type01 li', 'bootstrap_tab'); // TAB01
    GrantToActive('.type02 li', 'straight_tab'); // TAB02
    GrantToActive('.type03 li', 'dividing_tab'); // TAB03

    GrantToActive('.type02 .dropbtn', 'each'); // Dropdown
    ToggleToActive('.type01 .dropbtn'); // Dropdown

    CreateFileField();

    BarChart();
    LineChart();
    DoughnutChart();

    TextLastMove();
});
