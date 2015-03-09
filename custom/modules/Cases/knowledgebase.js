/**
 *
 * @author SalesAgility (Andrew Mclaughlan) <support@salesagility.com>
 * Date: 06/03/15
 * Comments
 */
$(document).ready(function() {
    var title = 'KnowledgeBase Suggestions';
    //bindWithDelay ensures that keyup only fires 2 seconds after user stops typing
    $('#name').bindWithDelay("keyup", function () {
        if($(this).data('qtip') ) {// Updates existing tool-tips content via ajax
            var getFormUrl = "http://qtip2.com/demos/data/owl";
            $.ajax({ url: getFormUrl,
                success: function (data) {
                    $(".qtip-content").html(data);
                }
            });
        }
        else {//Creates new qtip tool-tip
            $(this).qtip({
                content: {
                    text: "Loading...",
                    ajax:{
                        url: 'http://qtip2.com/demos/data/owl', // Use href attribute as URL
                        type: 'GET', // POST or GET
                        data: {}, // Data to pass along with your request
                        success: function(data, status) {
                            // Process the data
                            // Set the content manually (required!)
                            this.set('content.text', data);
                        }
                    },
                    title: {
                        button: true,
                        text: title
                    }
                },
                position: {
                    my: 'top left',
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

});