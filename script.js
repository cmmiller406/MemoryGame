"use strict";

$(document).ready(() => {
    let compare = [];

    function assignRandomCards() {
        var classes = ["blue", "blue", "green", "green", "red", "red", "purple", "purple", "orange", "orange", "pink", "pink"];
        let randomClass = [];
        let i = classes.length
        let j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            randomClass.push(classes[j]);
            classes.splice(j, 1);
        }
        console.log(randomClass);

        $(".back").each(function () {
            var newClassIndex = this.id;
            switch (newClassIndex) {
                case "card-one":
                    $("#card-one").addClass(randomClass[0]);
                    break;
                case "card-two":
                    $("#card-two").addClass(randomClass[1]);
                    break;
                case "card-three":
                    $("#card-three").addClass(randomClass[2]);
                    break;
                case "card-four":
                    $("#card-four").addClass(randomClass[3]);
                    break;
                case "card-five":
                    $("#card-five").addClass(randomClass[4]);
                    break;
                case "card-six":
                    $("#card-six").addClass(randomClass[5]);
                    break;
                case "card-seven":
                    $("#card-seven").addClass(randomClass[6]);
                    break;
                case "card-eight":
                    $("#card-eight").addClass(randomClass[7]);
                    break;
                case "card-nine":
                    $("#card-nine").addClass(randomClass[8]);
                    break;
                case "card-ten":
                    $("#card-ten").addClass(randomClass[9]);
                    break;
                case "card-eleven":
                    $("#card-eleven").addClass(randomClass[10]);
                    break;
                case "card-twelve":
                    $("#card-twelve").addClass(randomClass[11]);
                    break;
            }
        })
    }

    function timerSet() {
        setInterval(updateDisplay, 1000);
        function updateDisplay() {
            var value = parseInt($("#timer").find(".value").text(), 10);
            value++;
            $("#timer").find(".value").text(value);
        }
    };

    $(".start-btn").on("click", (event) => {
        $(".start-menu").hide();
        assignRandomCards();
    });

    $(document).on("click", ".reset-btn", (event) => {
        assignRandomCards();
        $(".value").text("0");
        timerSet();
    });

    $(document).on("click", ".reset-btn", (event) => {
        location.reload();
    });


    $(document).on("click", ".start-btn", (event) => {
        timerSet();
    });


    
    $(document).on("click", ".front", (event) => {
        $(event.target).parent().toggleClass("flipped");
        // for (let i = 0; i < 2; i++) {
            compare.push($(event.target).siblings().attr("class"));
        // }
        console.log(compare);
        setTimeout(checkMatch, 3000);
    });


    function checkMatch() {
        if (compare[0] === compare[1]) {
            hideCards();
            compare.length = 0;
            return;
        } else if (compare[0] !== compare[1]) {
            flipCardsBack();
            console.log("test");
        }
        compare.length = 0;
    };


    function hideCards() {
        $(".flipped").addClass("matched");
    }

    function flipCardsBack() {
        $(".flipped").toggleClass("flipped");
    }



});
