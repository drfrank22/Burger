$(function () {
    // onClick event
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("devoured");
        var newdevoured = {
            devoured: newEaten
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newdevoured
        }).then(
            function () {
                console.log("changed devoured to", newdevoured);
                location.reload();
            }
        );
    });

    //submit form
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
            name: $("#bu").val(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});