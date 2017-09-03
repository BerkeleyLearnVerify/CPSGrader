/* JavaScript code specific to the CPSGrader website. */

$(document).ready(function()
{
    /* Code for the side navigation bar, as suggested by
     * http://stackoverflow.com/a/13151016/1834042. */
    affixTriggerHeight = $("#sidenav").offset().top - $("#mainnav").height();
    affixTriggerHeight -= 25;
    $("#sidenav").affix({
        offset: { top: affixTriggerHeight }
    });
    $("#sidenav-wrapper").height($("#sidenav").height());

    /* Code for the toggling of step 3 on the "Getting started" page. */
    $("#step-3-info").on("shown.bs.collapse", function()
    {
        $("#step-3-info-status").text("hide");
    });
    $("#step-3-info").on("hidden.bs.collapse", function()
    {
        $("#step-3-info-status").text("show");
    });

    /* Code to navigate to the anchors in a page, as suggested by
     * http://stackoverflow.com/q/14742583. */
    $("a.navigate").click(function(event)
    {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 15
        }, 500);
    });

    /* Code for the submission of the form on the "Contact" page. */
    $("#submission-alert-dismiss").click(function()
    {
        $("#submission-alert").collapse("hide");
    });
    $("#send").click(function(event)
    {
        event.preventDefault();

        /* Code suggested by
         * http://trevordavis.net/blog/ajax-forms-with-jquery/. */
        var emailAddrVal = $("#emailaddress").val();
        if (emailAddrVal == "")
        {
            $("#submission-alert").addClass("alert-danger");
            $("#submission-alert-text").text("Please give us an email " +
                                             "address to reach you by.");
            $("#submission-alert").collapse("show");
            return false;
        }

        formData =
        {
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            emailaddress: emailAddrVal,
            subject: $("#subject").val(),
            message: $("#message").val()
        };
        $.post(
            "../static/php/sendemail.php",
            formData,
            function()
            {
                $("#submission-alert").removeClass("alert-danger");
                $("#submission-alert").addClass("alert-success");
                $("#submission-alert-text").text(
                    "Thank you for your message. We will get back to you " +
                    "as soon as we can."
                );
                $("#submission-alert").collapse("show");
            }
        );

        return true;
    });
        /* Code for the submission of the form on the "Contact" page. */
    $("#submission-alert-dismiss").click(function()
    {
        $("#submission-alert").collapse("hide");
    });
    
    $("#download").click(function(event)
    {
        event.preventDefault();

        /* Code suggested by
         * http://trevordavis.net/blog/ajax-forms-with-jquery/. */
        var emailAddrVal = $("#emailaddress").val();
        if (emailAddrVal == "")
        {
            $("#submission-alert").addClass("alert-danger");
            $("#submission-alert-text").text("Please give us an email " +
                                             "address to reach you by.");
            $("#submission-alert").collapse("show");
            return false;
        }

        var firstnameVal = $("#firstname").val();
        if (firstnameVal == "")
        {
            $("#submission-alert").addClass("alert-danger");
            $("#submission-alert-text").text("Please provide a first " +
                                             "name.");
            $("#submission-alert").collapse("show");
            return false;
        }

        var lastnameVal = $("#lastname").val();
        if (lastnameVal == "")
        {
            $("#submission-alert").addClass("alert-danger");
            $("#submission-alert-text").text("Please provide a last " +
                                             "name.");
            $("#submission-alert").collapse("show");
            return false;
        }

        var affiliationVal = $("#affiliation").val();
        if (affiliationVal == "")
        {
            $("#submission-alert").addClass("alert-danger");
            $("#submission-alert-text").text("Please provide an affiliation.");
            $("#submission-alert").collapse("show");
            return false;
        }
 



        formData =
        {
            firstname: firstnameVal,
            lastname: lastnameVal,
            emailaddress: emailAddrVal,
            affiliation: affiliationVal,
            intent: $("#intent").val()
        };
        $.post(
            "../../static/php/download.php",
            formData,
            function()
            {
                $("#submission-alert").removeClass("alert-danger");
                $("#submission-alert").addClass("alert-success");
                $("#submission-alert-text").text(
                    "Thank you for providing this information." 
                );
                $("#submission-alert").collapse("show");
                $("#form-text").empty();
                $("#form-text").append("<p> <a class=\"btn btn-primary btn-md\" href=\"../../dist/cpsgrader-release-0.1.zip\"> Download</a> </p> ");
                $("#form-heading").text("");
            }
        );

        return true;
    });
});
