<?php
namespace Jitsi\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Scheme_Color;
use Elementor\Scheme_Typography;
use Elementor\Group_Control_Typography;



// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


/**
 * Text Typing Effect
 *
 * Elementor widget for text typing effect.
 *
 * @since 1.7.0
 */
class Jitsi_Elementor extends Widget_Base {

    public function __construct($data = [], $args = null) {
        parent::__construct($data, $args);  
        wp_register_script('jitsi-api', 'https://meet.jit.si/external_api.js', array(), false);
        wp_register_script('jitsi-script', plugins_url('/blocks/dist/jitsi.js', __FILE__), array('jquery'), filemtime(JITSI_MEET_WP_FILE_PATH . '/blocks/dist/jitsi.js'));
     }
  
     public function get_script_depends() {
         return [ 'jitsi-api', 'jitsi-script' ];
     }

    public function get_name() {
        return 'jitsi_elementor';
    }

    public function get_title() {
        return esc_html__( 'Jitsi Meet', 'jitsi-meet-wp' );
    }

    public function get_icon() {
        return 'eicon-video-camera';
    }

    public function get_keywords() {
        return [ 'jitsi', 'meeting', 'conference'];
    }

    public function get_categories() {
        return [ 'basic' ];
    }

    protected function _register_controls() {

        // -------------------  Default Section  -----------------------//
        $this->start_controls_section(
            'Configuration',
            [
                'label' => esc_html__( 'Configuration', 'jitsi-meet-wp' ),
            ]
        );

        $this->add_control(
            'name',
            [
                'label' => esc_html__( 'Name', 'jitsi-meet-wp' ),
                'type' => Controls_Manager::TEXT,
                'default' => 'SampleJitsiMeetRoom',
                'placeholder' => esc_html__( 'Meeting name here', 'jitsi-meet-wp' )
            ]
        );

        $this->add_control(
            'width',
            [
                'label' => esc_html__( 'Width', 'jitsi-meet-wp' ),
                'type' => Controls_Manager::NUMBER,
                'min' => 100,
				'max' => 2000,
				'step' => 5,
				'default' => 1080,
                'selectors' => [
                    '{{WRAPPER}} .jitsi-wrapper' => 'width: {{VALUE}}px;'
                ],
            ]
        );

        $this->add_control(
            'height',
            [
                'label' => esc_html__( 'Height', 'jitsi-meet-wp' ),
                'type' => Controls_Manager::NUMBER,
                'min' => 100,
				'max' => 2000,
				'step' => 5,
				'default' => 720
            ]
        );

        $this->add_control(
			'audio_muted',
			[
				'label' => __( 'Start audio muted', 'jitsi-meet-wp' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( '', 'jitsi-meet-wp' ),
				'label_off' => __( '', 'jitsi-meet-wp' ),
				'return_value' => true,
				'default' => false,
			]
		);

        $this->add_control(
			'video_muted',
			[
				'label' => __( 'Start video muted', 'jitsi-meet-wp' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( '', 'jitsi-meet-wp' ),
				'label_off' => __( '', 'jitsi-meet-wp' ),
				'return_value' => true,
				'default' => true,
			]
		);

        $this->add_control(
			'screen_sharing',
			[
				'label' => __( 'Start screen sharing', 'jitsi-meet-wp' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( '', 'jitsi-meet-wp' ),
				'label_off' => __( '', 'jitsi-meet-wp' ),
				'return_value' => true,
				'default' => true,
			]
		);

        $this->add_control(
			'invite',
			[
				'label' => __( 'Enable Inviting', 'jitsi-meet-wp' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( '', 'jitsi-meet-wp' ),
				'label_off' => __( '', 'jitsi-meet-wp' ),
				'return_value' => true,
				'default' => true,
			]
		);

        $this->end_controls_section();
    }

    protected function render() {

        $settings = $this->get_settings();

        ?>
        <div 
            class="jitsi-wrapper-elementor" 
            data-name="<?php echo $settings['name']; ?>"
            data-width="<?php echo $settings['width']; ?>"
            data-height="<?php echo $settings['height']; ?>"
            data-mute="<?php echo $settings['audio_muted'] ? $settings['audio_muted'] : 'false'; ?>"
            data-videomute="<?php echo $settings['video_muted'] ? $settings['video_muted'] : 'false'; ?>"
            data-screen="<?php echo $settings['screen_sharing'] ? $settings['screen_sharing'] : 'false'; ?>"
            data-screen="<?php echo $settings['invite'] ? $settings['invite'] : 'false' ?>"
        ></div>
        <?php 
    }
}
