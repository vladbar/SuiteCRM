/**
 *
 * @author SalesAgility (Andrew Mclaughlan) <support@salesagility.com>
 * Date: 06/03/15
 * Comments
 */
$(document).ready(function() {
    $('#name').on("keyup", function () {
        $(this).qtip({
            content: {
                text: function(event, api) {
                    $.ajax({
                        url: 'http://qtip2.com/demos/data/owl' // Use href attribute as URL
                    })
                        .then(function(content) {
                            // Set the tooltip content upon successful retrieval
                            api.set('content.text', content);
                        }, function(xhr, status, error) {
                            // Upon failure... set the tooltip content to error
                            api.set('content.text', status + ': ' + error);
                        });

                    return 'Loading...'; // Set some initial text
                }
            },
            position: {
                viewport: $(window)
            },
            style: 'qtip-wiki'
        });
    });

});