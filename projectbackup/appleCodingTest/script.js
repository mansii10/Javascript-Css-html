$(function() {
    validize.validate_ini(".form_wrap form [data-validate]");

    $("form button").click(function(e) {
        e.preventDefault();
        $(this).closest("form").find("[data-validate]").blur();
    });
    $("form").submit(function(e) {
        e.preventDefault();
        return;

    });
});
