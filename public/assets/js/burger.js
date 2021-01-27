$(function () {
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id");
        var newlyEaten = $(this).data("devoured");
        var newlyDevoured = {
            devoured = newlyEaten
        };
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newlyDevoured
        }).then(function () {
            console.log("changed to", newlyDevoured);
            location.reload();
        });
    $(".create-form").on("submit", function (event) {
        event.precentDefault();
        let newBurger = {
            name: $("#createBurger").val()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created a new burger");
            location.reload();
        })
    })
    })
})