<?php
/**
 * Plugin Name:       Webinar and Video Conference with Jitsi Meet
 * Plugin URI:        https://jitsi-meet-wp.wppool.dev/
 * Description:       Host live webinars, conferences, online classes, video calls directly on your WordPress website with gutenberg block
 * Version:           1.1.10
 * Author:            WPPOOL
 * Author URI:        https://wppool.dev
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       jitsi-meet-wp
 * Requires at least: 5.0
 * Tested up to: 	  5.9.2
 */


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'JITSI_MEET_WP_VERSION', '1.1.10' );
define( 'JITSI_MEET_WP__FILE__', __FILE__ );
define( 'JITSI_MEET_WP_DIR_PATH', plugin_dir_path( JITSI_MEET_WP__FILE__ ) );
define( 'JITSI_MEET_WP_FILE_PATH', plugin_dir_path( __FILE__ ) );
define( 'JITSI_MEET_WP_URL', plugins_url( '', __FILE__ ) );
define( 'JITSI_MEET_WP_TEMPLATES', JITSI_MEET_WP_DIR_PATH . '/templates' );
define( 'JITSI_MEET_WP_ASSETS', JITSI_MEET_WP_URL . '/assets' );

function jitsi_meet_wp_begin() {

    $pluginList = get_option( 'active_plugins' );
    $jitsi_pro = 'webinar-and-video-conference-with-jitsi-meet-pro/jitsi-meet-wp.php'; 
    $jitsi_ultimate = 'webinar-and-video-conference-with-jitsi-meet-ultimate/jitsi-meet-wp.php'; 
    $jitsi_premium = 'webinar-and-video-conference-with-jitsi-meet-premium/jitsi-meet-wp.php'; 
    if ( !in_array( $jitsi_pro , $pluginList ) && !in_array( $jitsi_ultimate , $pluginList ) && !in_array( $jitsi_premium , $pluginList )) {
        /**
         * Check for Gutenberg existence
         * And prevent further execution if doesn't exist.
         */
        if ( ! function_exists('register_block_type') ) {
            include_once JITSI_MEET_WP_DIR_PATH . 'init.php';
        } else {
            include_once JITSI_MEET_WP_DIR_PATH . 'init.php';
            include_once JITSI_MEET_WP_DIR_PATH . 'gutenberg-init.php';
            Jitsi_Meet_WP_Gutenberg::instance();
        }
    }
}

register_activation_hook(__FILE__, function(){
    update_option('jitsi_meet_wp_version', JITSI_MEET_WP_VERSION);
    if(get_option('jitsi_meet_welcome_redirect') != 'occured'){
        add_option('jitsi_meet_welcome_redirect', true);
    }
});

add_action( 'plugins_loaded', 'jitsi_meet_wp_begin', 20 );