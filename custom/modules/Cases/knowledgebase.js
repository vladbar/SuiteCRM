/**
 *
 * @author SalesAgility (Andrew Mclaughlan) <support@salesagility.com>
 * Date: 06/03/15
 * Using Qtip to provide KnowledgeBase suggestions overlay.
 * Using bindWithDelay to delay request until after the user has stopped typing
 */
$(document).ready(function() {
    //bindWithDelay ensures that keyup only fires 2 seconds after user stops typing
    $('#name').bindWithDelay("keyup", function () {
        var title = 'KnowledgeBase Suggestions';
        var url = 'index.php?module=Cases&action=get_kb_articles';

        if($(this).data('qtip') ) {// Updates existing tool-tips content via ajax
            var search = $('#name').val();
            var dataString = 'search=' + search;
            $.ajax({
                type:"POST",
                url:url,
                data: dataString,
                success: function (data) {
                    $(".qtip-content").html(data);
                }
            });
        }
        else {//Creates new qtip tool-tip
            var search = $('#name').val();
            var dataString = 'search=' + search;
            $(this).qtip({
                content: {
                    text: "Loading...",
                    ajax:{
                        url: url, // Use href attribute as URL
                        type: 'POST', // POST or GET
                        data: dataString, // Data to pass along with your request
                        success: function(data, status) {
                            // Set the content manually (required!)
                            this.set('content.text', data);
                        }
                    },
                    title: {
                        button: true, //show close button
                        text: title
                    }
                },
                position: {
                    my: 'center left',
                    at: 'center right',
                    adjust: {
                        mouse: false,
                        scroll: false,
                        y: 5,
                        x: 25
                    }
                },
                show: {
                    when: false, // Don't specify a show event
                    ready: true, // Show the tooltip when ready
                    delay: 1500,
                    effect: function() {
                        $(this).fadeTo(800, 1);
                    }
                },
                hide: false,
                style: {
                    classes : 'qtip-default qtip qtip qtip-tipped qtip-shadow', //qtip-rounded'
                    tip: {
                        offset: 0
                    }
                }
            });
        }
    }, 2000);//bindWithDelay sets delay to 2 seconds

    $("body").bindWithDelay("click",'.kb_article', function () {
        $(this).qtip({
            content: {
                text: "Loading...",
                ajax:{
                    url: 'index.php?module=Cases&action=get_kb_article', // Use href attribute as URL
                    type: 'POST', // POST or GET
                    data: {}, // Data to pass along with your request
                    success: function(data, status) {
                        // Set the content manually (required!)
                        this.set('content.text', data);
                    }
                },
                title: {
                    button: true, //show close button
                    text: 'title'
                }
            },
            position: {
                my: 'center left',
                at: 'center right',
                adjust: {
                    mouse: false,
                    scroll: false,
                    y: 5,
                    x: 25
                }
            },
            show: {
                when: false, // Don't specify a show event
                ready: true, // Show the tooltip when ready
                delay: 1500,
                effect: function() {
                    $(this).fadeTo(800, 1);
                }
            },
            hide: false,
            style: {
                classes : 'qtip-default qtip qtip qtip-tipped qtip-shadow', //qtip-rounded'
                tip: {
                    offset: 0
                }
            }
        });
    }, 1000);

});