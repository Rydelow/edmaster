<?php

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

// Make sure the same class is not loaded twice
if (! class_exists('Jitsi_Meet_WP')) {
    /**
     * Main Jiti Meet WP Class
     *
     * The main class that initiates and runs the Jitsi Meet WP plugin.
     *
     * @since 1.0.0
     */
    final class Jitsi_Meet_WP
    {
        /**
         * Instance
         *
         * Holds a single instance of the `Jitsi_Meet_WP` class.
         *
         * @since 1.0.0
         *
         * @access private
         * @static
         *
         * @var Jitsi_Meet_WP A single instance of the class.
         */
        private static $_instance = null;

        /**
         * Instance
         *
         * Ensures only one instance of the class is loaded or can be loaded.
         *
         * @return Jitsi_Meet_WP An instance of the class.
         * @since 1.0.0
         *
         * @access public
         * @static
         *
         */
        public static function instance()
        {
            if (is_null(self::$_instance)) {
                self::$_instance = new self();
            }

            return self::$_instance;
        }

        /**
         * Clone
         *
         * Disable class cloning.
         *
         * @return void
         * @since 1.0.0
         *
         * @access protected
         *
         */
        public function __clone()
        {
            // Cloning instances of the class is forbidden
            _doing_it_wrong(__FUNCTION__, esc_html__('Cheatin&#8217; huh?', 'jitsi-meet-wp'), '1.0.0');
        }

        /**
         * Wakeup
         *
         * Disable unserializing the class.
         *
         * @return void
         * @since 1.7.0
         *
         * @access protected
         *
         */
        public function __wakeup()
        {
            // Unserializing instances of the class is forbidden.
            _doing_it_wrong(__FUNCTION__, esc_html__('Cheatin&#8217; huh?', 'jitsi-meet-wp'), '1.0.0');
        }

        /**
         * Constructor
         *
         * Initialize the Jitsi Meet WP plugins.
         *
         * @since 1.0.0
         *
         * @access public
         */
        public function __construct()
        {
            register_activation_hook(__FILE__, [ $this, 'jitsi_meet_wp_activate' ]);
            add_action('init', [ $this, 'i18n' ]);      
            add_action( 'admin_notices', [ $this, 'print_notices' ], 15 );      
            add_filter('clean_url', [$this, 'add_async_forscript'], 11, 1);
            add_action('admin_enqueue_scripts', [$this, 'jitsi_meet_wp_editor_scripts']);
            $this->jitsi_meet_wp_appsero_init_tracker();
            $this->jitsi_meet_wp_admin_files();
            add_filter('plugin_action_links_' . plugin_basename(JITSI_MEET_WP__FILE__), [$this, 'jitsi_meet_add_action_links']);
            add_shortcode('jitsi-meet-wp', array($this, 'jitsi_shortcode_render'));
            $this->jitsi_init_elementor();
        }

        public function get_template( $name = null, $args = false ) {
			if ( ! empty( $args ) && is_array( $args ) ) {
				extract( $args );
			}

			$template = locate_template( 'webinar-and-video-conference-with-jitsi-meet/' . $name . '.php' );

			if ( ! $template ) {
				$template = JITSI_MEET_WP_TEMPLATES . "/$name.php";
			}

			if ( file_exists( $template ) ) {
				include $template;
			} else {
				return false;
			}
		}

        public function add_notice( $class, $message ) {
			$notices = get_option( sanitize_key( 'jitsi_meet_wp_notices' ), [] );
			if ( is_string( $message ) && is_string( $class )
			     && ! wp_list_filter( $notices, array( 'message' => $message ) ) ) {
				$notices[] = array(
					'message' => $message,
					'class'   => $class,
				);

				update_option( sanitize_key( 'jitsi_meet_wp_notices' ), $notices );
			}
		}

        public function print_notices() {
			$notices = get_option( sanitize_key( 'jitsi_meet_wp_notices' ), [] );
			foreach ( $notices as $notice ) {
				?>
                <div class="notice notice-large is-dismissible notice-<?php echo $notice['class']; ?>">
					<?php echo $notice['message']; ?>
                </div>
				<?php
				update_option( sanitize_key( 'jitsi_meet_wp_notices' ), [] );
			}
		}

        public function jitsi_meet_wp_admin_files()
        {
            if(is_admin()){
                require_once JITSI_MEET_WP_FILE_PATH . 'inc/admin/class-admin.php';
            }
        }
 
        public function jitsi_meet_add_action_links($actions)
        {
            $mylinks = array(
                '<a href="' . admin_url('admin.php?page=jitsi-meet') . '">'.__('Settings', 'jitsi-meet-wp').'</a>',
                '<a class="special-action-link" target="_blank" href="' . esc_url('https://go.wppool.dev/Gv5') . '">'.__('Upgrade to Pro', 'jitsi-meet-wp').'</a>',
            );
            $actions = array_merge($actions, $mylinks);
            return $actions;
        }

        /**
         * On activation hook
         */
        private static function jitsi_meet_wp_activate() {
			update_option( 'jitsi_meet_wp_version', JITSI_MEET_WP_VERSION );

			$install_date = get_option( 'jitsi_meet_wp_install_time' );

			if ( empty( $install_date ) ) {
				update_option( 'jitsi_meet_wp_install_time', time() );
			}

			set_transient( 'jitsi_meet_wp_review_notice_interval', 'off', 7 * DAY_IN_SECONDS );
			set_transient( 'jitsi_meet_wp_affiliate_notice_interval', 'off', 10 * DAY_IN_SECONDS );

		}


        /**
         * Load Textdomain
         *
         * Load plugin localization files.
         *
         * @since 1.0.0
         *
         * @access public
         */
        public function i18n()
        {
            load_plugin_textdomain('jitsi-meet-wp', false, plugin_basename(dirname(__FILE__)) . '/languages');
        }

        /**
         * Editor Scripts
         */

        public function jitsi_meet_wp_editor_scripts()
        {
            wp_enqueue_script('jitsi-admin-script', plugins_url('/blocks/dist/jitsi.admin.js', __FILE__), array('jquery'), filemtime(plugin_dir_path(__FILE__) . '/blocks/dist/jitsi.admin.js'));
            wp_enqueue_script('jquery.syotimer', plugins_url('/assets/js/jquery.syotimer.min.js', __FILE__), [ 'jquery' ], '2.1.2', true);
            wp_enqueue_script('headwayapp', 'https://cdn.headwayapp.co/widget.js#asyncload');
        }

        public function add_async_forscript($url)
        {
            if (strpos($url, '#asyncload')===false)
                return $url;
            else
                return str_replace('#asyncload', '', $url)."' async='async"; 
        }

        /**
         * Initialize the plugin tracker
         *
         * @return void
         */
        public function jitsi_meet_wp_appsero_init_tracker()
        {
            if (! class_exists('Appsero\Client')) {
                require_once __DIR__ . '/appsero/src/Client.php';
            }

            $client = new Appsero\Client('00788961-f5f7-4117-8a26-a99508aa506b', 'Webinar and Video Conference with Jitsi Meet', JITSI_MEET_WP__FILE__);

            // Active insights
            $client->insights()->init();

            // Active automatic updater
            $client->updater();
        }


        /**
         * Shortcode
         */

        public function jitsi_shortcode_render($args)
        {
            $params = extract(shortcode_atts(array(
                'name'	                        => '',
                'width'                         => 1080,
                'height'                        => 720,
                'startwithaudiomuted'			=> get_option('jitsi_opt_start_local_audio_muted', 0) ? '1' : '0',
                'startwithvideomuted'			=> get_option('jitsi_opt_startWithVideoMuted', 0) ? '1' : '0',
                'startscreensharing'			=> get_option('jitsi_opt_startScreenSharing', 0) ? '1' : '0',
                'invite'                        => get_option('jitsi_opt_invite', 1) ? '1' : '0'
            ), $args));

            if (is_user_logged_in()){
                $current_user = wp_get_current_user();
                $userInfo = $current_user->display_name . ',' . $current_user->user_email;
                $paramArr['userinfo'] = $userInfo;
            }

            if($name == ''){
                $name = substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil(10/strlen($x)))),1,10);
            }

            $output = sprintf('<div class="jitsi-wrapper" data-name="%1$s" data-width="%2$s" data-height="%3$s" style="width:%2$spx" data-mute="%4$s" data-videomute="%5$s" data-screen="%6$s" data-invite="%7$s"></div>', $name, $width, $height, $startwithaudiomuted, $startwithvideomuted, $startscreensharing, $invite);
            return $output;
        }

        /**
         * Elementor
         */
        public function jitsi_init_elementor() {
			// Check if Elementor installed and activated
			if ( ! did_action( 'elementor/loaded' ) ) {
				return;
			}
			add_action( 'elementor/widgets/widgets_registered', [ $this, 'jitsi_el_widgets_registered' ] );
		}

        public function jitsi_el_widgets_registered() {
			$this->jitsi_el_include_widgets();
			$this->jitsi_el_register_widgets();
		}

		private function jitsi_el_include_widgets() {
			require_once __DIR__ . '/inc/elementor.php';
		}

		private function jitsi_el_register_widgets() {
			\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Jitsi\Widgets\Jitsi_Elementor() );
		}

    }
}

if ( ! function_exists( 'jitsi_meet_wp' ) ) {
	function jitsi_meet_wp() {
		return Jitsi_Meet_WP::instance();
	}
}

/** fire off the plugin */
jitsi_meet_wp();
