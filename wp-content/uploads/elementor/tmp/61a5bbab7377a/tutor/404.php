<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Tutor
 */

get_header(); ?>
  <div class="main-container">
<div class="content-area">
    <div class="middle-align">
        <div class="error-404 not-found" id="sitefull">
            <header class="page-header">
                <h1 class="title-404"><?php esc_html_e( '<strong>404</strong> Not Found', 'tutor' ); ?></h1>
            </header><!-- .page-header -->
            <div class="page-content">
                <p class="text-404"><?php esc_html_e( 'Looks like you have taken a wrong turn.....<br />Do Not worry... it happens to the best of us.', 'tutor' ); ?></p>
                <?php get_sidebar(); ?>
            </div><!-- .page-content -->
        </div>
        <div class="clear"></div>
    </div>
</div><div class="clear"></div>

<?php get_footer(); ?>