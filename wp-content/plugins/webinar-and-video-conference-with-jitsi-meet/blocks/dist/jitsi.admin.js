jQuery(document).ready(function(){
    jQuery('.jisti-admin-tab-links > a').each(function(){
        jQuery(this).on('click', function(e){
            e.preventDefault();
            jQuery('.jisti-admin-tab-links > a').removeClass('active-jitsi-tab-link');
            jQuery(this).addClass('active-jitsi-tab-link');
            jQuery('.jitsi-tab').removeClass('active-jitsi-tab');
            jQuery(jQuery(this).attr('href')).addClass('active-jitsi-tab');
        });
    });

    jQuery('.jitsi-tab-link').on('click', function(e) {
        if(jQuery(this).is('a[href^="#"]')){
            e.preventDefault();
            jQuery('.jitsi-tab-link').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.jitsi-setting-tabs-wrapper').removeClass('active');
            jQuery(`#jitsi-setting-tab-${jQuery(this).attr('href').substring(1)}`).addClass('active');
            window.location.hash = jQuery(this).attr('href');
        }
    });

    if(window.location.search.split('page=')[1] == 'jitsi-pro-settings'){
        if(locationhash = window.location.hash){
            jQuery('.jitsi-tab-link').removeClass('active');
            jQuery(`.jitsi-tab-link[href=${locationhash}]`).addClass('active');
            jQuery('.jitsi-setting-tabs-wrapper').removeClass('active');
            jQuery(`#jitsi-setting-tab-${locationhash.substring(1)}`).addClass('active');
        } else {
            jQuery('.jitsi-tab-link').removeClass('active');
            jQuery(`.jitsi-tab-link[href=#apis]`).addClass('active');
            jQuery('.jitsi-setting-tabs-wrapper').removeClass('active');
            jQuery(`#jitsi-setting-tab-apis`).addClass('active');
        }
    }

    document.querySelectorAll('.jitsi-field-switch input').forEach(function(element){
		element.addEventListener('change', function(e) {
			if(e.currentTarget.checked){
				element.closest(".jitsi-field-switch").classList.add('active');
			} else {
				element.closest(".jitsi-field-switch").classList.remove('active');
			}
		});
	});

    jQuery('.jitsi-click-copy').on('click', function(){
        var $temp = jQuery("<input>");
        jQuery("body").append($temp);
        $temp.val(jQuery(this).text()).select();
        document.execCommand("copy");
        $temp.remove();
        venillaSnackbar('Shortcode copied to clipboard');
    });

    function venillaSnackbar(msg) {
        if(!jQuery('#floating-snackbar').length){
            jQuery('body').append('<div id="floating-snackbar" class="floating-snackbar"></div>');
        }
        jQuery("#floating-snackbar").text(msg).addClass('show'); 
        setTimeout(function(){ jQuery("#floating-snackbar").removeClass('show') }, 3000);
    }
    
});

// @see https://docs.headwayapp.co/widget for more configuration options.
var HW_config = {
    selector: ".jitsi-admin-wrap .title", 
    account:  "xD9jj7"
}

;(function ($) {
    $(document).ready(function () {

        /**--------------Review Notice----------------**/
        //handle review notice remind_later
        $('.jitsi-meet-wp-review-notice .remind_later').on('click', function () {
            $('.notice-overlay-wrap').css('display', 'flex');
        });

        //close the review notice
        $('.jitsi-meet-wp-review-notice .close-notice').on('click', function () {
            $(this).parents('.notice-overlay-wrap').css('display', 'none');
        });


        $('.jitsi-meet-wp-review-notice .notice-overlay-actions a, .jitsi-meet-wp-review-notice .notice-actions a.hide_notice, .jitsi-meet-wp-review-notice .notice-dismiss').on('click', function (e) {
  
            $(this).parents('.jitsi-meet-wp-review-notice').slideUp();

            let value = $(this).data('value');

            if (!value) {
                value = 7;
            }
            

            wp.ajax.send('jitsi_meet_wp_review_notice', {
                data: {
                    value,
                },
                success: () => {
                    
                },
                error: (error) => console.log(error),
            });

        });


        /*-- Affiliate Notice --*/
        //close the affiliate notice
        $('.jitsi-meet-wp-affiliate-notice .close-notice').on('click', function () {
            $(this).parents('.notice-overlay-wrap').css('display', 'none');
        });

        $('.jitsi-meet-wp-affiliate-notice .dashicons-dismiss').on('click', function (e) {
            console.log('a')
            e.preventDefault();
            $('.jitsi-meet-wp-affiliate-notice .notice-overlay-wrap').css('display', 'flex');
        });

        $(`.jitsi-meet-wp-affiliate-notice .notice-overlay-actions a, .jitsi-meet-wp-affiliate-notice .notice-actions a.hide_notice`).on('click', function () {

            $(this).parents('.jitsi-meet-wp-affiliate-notice').slideUp();

            let value = $(this).data('value');

            if (!value) {
                value = 7;
            }


            wp.ajax.send('jitsi_meet_wp_affiliate_notice', {
                data: {
                    value,
                },
                success: () => {},
                error: (error) => console.log(error),
            });

        });


    });
})(jQuery);