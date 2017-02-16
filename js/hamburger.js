$(".generic_navbar_cross").hide();

$(".generic_navbar_menu").hide();

$( ".generic_navbar_hamburger" ).click(function() {
    $( ".generic_navbar_menu" ).slideToggle( "slow", function() {
        $( ".generic_navbar_hamburger" ).hide();
        $( ".generic_navbar_cross" ).show();
    });
});

$( ".generic_navbar_cross" ).click(function() {
    $( ".generic_navbar_menu" ).slideToggle( "slow", function() {
        $( ".generic_navbar_cross" ).hide();
        $( ".generic_navbar_hamburger" ).show();
    });
});
