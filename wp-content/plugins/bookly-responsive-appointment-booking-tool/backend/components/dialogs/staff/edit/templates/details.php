<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
use Bookly\Backend\Components\Controls\Buttons;
use Bookly\Backend\Components\Dialogs\Staff\Edit\Proxy;
use Bookly\Lib\Utils\Common;
use Bookly\Lib\Config;
/** @var Bookly\Lib\Entities\Staff $staff */
?>
<form class="bookly-js-staff-details">
    <div class="row">
        <div class="col-md-auto">
            <div id="bookly-js-staff-avatar">
                <div class="form-group">
                    <?php $img = wp_get_attachment_image_src( $staff->getAttachmentId(), 'thumbnail' ) ?>

                    <div class="bookly-js-image bookly-thumb<?php echo esc_attr( $img ? ' bookly-thumb-with-image' : '' ) ?>"
                         style="<?php echo esc_attr( $img ? 'background-image: url(' . $img[0] . '); background-size: cover;' : '' ) ?>"
                    >
                        <i class="fas fa-fw fa-4x fa-camera mt-2 text-white w-100"></i>
                        <a class="far fa-fw fa-trash-alt text-danger bookly-thumb-delete bookly-js-delete"
                           href="javascript:void(0)"
                           title="<?php esc_attr_e( 'Delete', 'bookly' ) ?>"
                           <?php if ( ! $img ) : ?>style="display: none;"<?php endif ?>>
                        </a>
                        <div class="bookly-thumb-edit">
                            <label class="bookly-thumb-edit-btn">
                                <?php esc_html_e( 'Image', 'bookly' ) ?>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="font-size: 27px;"><?php Proxy\Ratings::renderStaffServiceRating( $staff->getId(), null, 'left' ) ?></div>
            <div class="form-group">
                <label for="bookly-full-name"><?php esc_html_e( 'Full name', 'bookly' ) ?></label>
                <input type="text" class="form-control" id="bookly-full-name" name="full_name" value="<?php echo esc_attr( $staff->getFullName() ) ?>"/>
       <!--              <ul class="nav nav-tabs nav-fill mb-3">
        <li class="nav-item">
            <a id="bookly-details-tab" href="#details" data-toggle="bookly-tab" class="nav-link active">
                <i class="fas fa-cog fa-fw mr-lg-1"></i>
                <span class="d-none d-lg-inline"><?php esc_html_e( 'Details', 'bookly' ) ?></span>
            </a>
        </li>
        <?php Proxy\Pro::renderAdvancedTab() ?>
        <li class="nav-item">
            <a id="bookly-services-tab" href="#services" data-toggle="bookly-tab" class="nav-link">
                <i class="fas fa-th fa-fw mr-lg-1"></i>
                <span class="d-none d-lg-inline"><?php esc_html_e( 'Services', 'bookly' ) ?></span>
            </a>
        </li>
        <li class="nav-item">
            <a id="bookly-schedule-tab" href="#schedule" data-toggle="bookly-tab" class="nav-link">
                <i class="far fa-fw fa-calendar-alt mr-lg-1"></i>
                <span class="d-none d-lg-inline"><?php esc_html_e( 'Schedule', 'bookly' ) ?></span>
            </a>
        </li>
        <?php Proxy\Shared::renderStaffTab() ?>
        <li class="nav-item">
            <a id="bookly-holidays-tab" href="#days_off" data-toggle="bookly-tab" class="nav-link">
                <i class="far fa-calendar fa-fw mr-lg-1"></i>
                <span class="d-none d-lg-inline"><?php esc_html_e( 'Days Off', 'bookly' ) ?></span>
            </a>
        </li>
    </ul> -->
                
            </div>
        </div>
    </div>

    <?php if ( Common::isCurrentUserAdmin() ) : ?>
        <div class="form-group">
            <label for="bookly-wp-user"><?php esc_html_e( 'User', 'bookly' ) ?></label>
            <select class="form-control custom-select" name="wp_user_id" id="bookly-wp-user">
                <option value=""><?php esc_html_e( 'Select from WordPress users', 'bookly' ) ?></option>
                <?php Proxy\Pro::renderCreateWPUser() ?>
                <?php foreach ( $users_for_staff as $user ) : ?>
                    <option value="<?php echo esc_attr( $user->ID ) ?>" data-email="<?php echo esc_attr( $user->user_email ) ?>" <?php selected( $user->ID, $staff->getWpUserId() ) ?>><?php echo esc_html( $user->display_name ) ?></option>
                <?php endforeach ?>
            </select>
            <small class="form-text text-muted">
                <?php esc_html_e( 'If this staff member requires separate login to access personal calendar, a regular WP user needs to be created for this purpose.', 'bookly' ) ?>
                <?php esc_html_e( 'User with "Administrator" role will have access to calendars and settings of all staff members, user with another role will have access only to personal calendar and settings.', 'bookly' ) ?>
                <?php esc_html_e( 'If you leave this field blank, this staff member will not be able to access personal calendar using WP backend.', 'bookly' ) ?>
            </small>
        </div>
    <?php endif ?>

    <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <label for="bookly-email"><?php esc_html_e( 'Email', 'bookly' ) ?></label>
                <input class="form-control" id="bookly-email" name="email"
                       value="<?php echo esc_attr( $staff->getEmail() ) ?>"
                       type="text"/>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group">
                <label for="bookly-phone"><?php esc_html_e( 'Phone', 'bookly' ) ?></label>
                <input class="form-control" id="bookly-phone"
                       value="<?php echo esc_attr( $staff->getPhone() ) ?>"
                       type="text"/>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="bookly-info"><?php esc_html_e( 'Info', 'bookly' ) ?></label>
        <textarea id="bookly-info" name="info" rows="3" class="form-control"><?php echo esc_textarea( $staff->getInfo() ) ?></textarea>
        <small class="form-text text-muted"><?php printf( esc_html__( 'This text can be inserted into notifications with %s code.', 'bookly' ), '{staff_info}' ) ?></small>
    </div>
    <div class='form-group pb-2'>
        <label><?php esc_html_e( 'Color', 'bookly' ) ?></label>
        <div class="bookly-color-picker bookly-color-picker-sm">
            <input name="color" value="<?php echo esc_attr( $staff->getColor() ) ?>" class="bookly-js-color-picker" type="text"/>
        </div>
    </div>
    <div class="form-group" id="bookly-visibility" data-default="<?php echo esc_attr( $staff->getVisibility() ) ?>">
        <label><?php esc_html_e( 'Visibility', 'bookly' ) ?></label>
        <div class="custom-control custom-radio">
            <input type="radio" name="visibility" id="bookly-visibility-public" value="public" <?php checked( $staff->getVisibility(), 'public' ) ?> class="custom-control-input" />
            <label for="bookly-visibility-public" class="custom-control-label"><?php esc_html_e( 'Public', 'bookly' ) ?></label>
        </div>
        <div class="custom-control custom-radio">
            <input type="radio" name="visibility" id="bookly-visibility-private" value="private" <?php checked( $staff->getVisibility(), 'private' ) ?> class="custom-control-input" />
            <label for="bookly-visibility-private" class="custom-control-label"><?php esc_html_e( 'Private', 'bookly' ) ?></label>
        </div>
        <?php if ( Config::proActive() || $staff->getVisibility() === 'archive' ) : ?>
            <div class="custom-control custom-radio">
                <input type="radio" name="visibility" id="bookly-visibility-archive" value="archive" <?php checked( $staff->getVisibility(), 'archive' ) ?> class="custom-control-input"/>
                <label for="bookly-visibility-archive" class="custom-control-label"><?php esc_html_e( 'Archive', 'bookly' ) ?></label>
            </div>
        <?php endif ?>
        <small class="form-text text-muted"><?php esc_html_e( 'To make staff member invisible to your customers set the visibility to "Private".', 'bookly' ) ?></small>
    </div>
    <?php Proxy\Shared::renderStaffDetails( $staff ) ?>
    <input type="hidden" name="id" value="<?php echo esc_attr( $staff->getId() ) ?>">
    <input type="hidden" name="attachment_id" value="<?php echo esc_attr( $staff->getAttachmentId() ) ?>">

    <div class="bookly-js-modal-footer">
        <?php if ( Common::isCurrentUserAdmin() ) : ?>
            <?php Buttons::renderDelete( 'bookly-staff-delete' ) ?>
            <?php Buttons::render( null, 'btn-danger ladda-button bookly-js-staff-archive', __( 'Archive', 'bookly' ), ! Config::proActive() || $staff->getVisibility() == 'archive' ? array( 'style' => 'display:none;' ) : array(), '<i class="fas fa-fw fa-archive mr-1"></i>{caption}' ) ?>
        <?php endif ?>
        <?php Buttons::render( 'bookly-details-save', 'btn-success bookly-js-save', __( 'Save', 'bookly' ) ) ?>
    </div>
</form>