const tm9 = document.getElementById("9");
const tm10 = document.getElementById("10");
const tm11 = document.getElementById("11");
const tm12 = document.getElementById("12");
const tm1 = document.getElementById("1");
const tm2 = document.getElementById("2");
const tm3 = document.getElementById("3");
const tm4 = document.getElementById("4");
const tm5 = document.getElementById("5");
const time = moment();

function initPlanner() {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
 
    $(tb.forEach(function ())) {
        const id = $(this).attr("id");
        const timeSel = localStorage.getItem(id);

        if (timeSel !==) {
            $(this).children(".timeSel").val(timeSel);
        }
    });
}

initPlanner();
const saveBtn = $(".savBtn");

function click() {
    $(".savBtn").on("click", function () {
        .preventDefault();
        //ref to https://www.w3schools.com/js/js_this.asp for usuage of this with func
        let btnval = $(this).parent().find(".savBtn").val();
        let txt = $(this).parent().find(".cols").val();
        localStorage.setItem("ToDo" + btnval, txt);
    });
}


function ppF() {
    tmTime = time.tms();
    ("").each(function () {
        const thistm =JSON.parse($(this).attr("id"));

        if (thistmTime > tm) {
            $(this)("future")
        }
        else(thistmTime === tm) {
            $(this)("present");
        }
        else {
            $(this)("past");
        }
    })
}