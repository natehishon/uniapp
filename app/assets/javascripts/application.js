
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .
//= require materialize
//= require('bulma-extensions/accordions/dist/js/bulma-accordion.min.js');

$(document).on('turbolinks:load', function() {


    $(".dropdown-trigger").dropdown();

    $('.sidenav').sidenav();


    $('#fade-out-target').fadeOut(4000)
    console.log("1")

    $('#tab_header ul li.item').on('click', function() {
        var number = $(this).data('option');
        $('#tab_header ul li.item').removeClass('is-active');
        $(this).addClass('is-active');
        $('#tab_container .container_item').removeClass('is-active');
        $('div[data-item="' + number + '"]').addClass('is-active');
    });






});
