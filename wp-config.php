<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dev' );

/** MySQL database username */
define( 'DB_USER', 'edmaster11' );

/** MySQL database password */
define( 'DB_PASSWORD', 'edmaster@123' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tEsaMmpGZhaMk-lYc<I8HOJN=,oGh5q_K>];zZq4d/>1Mu:H00aa^^f3n(SulY;z' );
define( 'SECURE_AUTH_KEY',  '@HnMCtQ8|;3+aNxf0,pYC;Ki!{;Z~MO?foc?Gs%l:Qqo$Vj#oq*M@f[zKF9rca]4' );
define( 'LOGGED_IN_KEY',    ',e6e+cxhuOY-KeRF{1,z{N`?o&6A[l[8|;O;=^IJi^YN%l/$>~Gk|B.e8di]Zn8p' );
define( 'NONCE_KEY',        'DK?ZRy }}0df[R)daHg[#!EA|h:EieSqp`6K3;f&MfW)S5~e<chrkz!ODS-YlX9K' );
define( 'AUTH_SALT',        '<3-%%~7|hY]s%h@D?>8Q-C]{WZlSBs<3z1)42j/>1lGuBk,1*<c0<7cXm}_-HB+.' );
define( 'SECURE_AUTH_SALT', '.;d<H<%)++ XQ)@#<X4Yt2y3Bn~d>z)*3[MYyBw>~Z <D/^WWW$I(EuE?qV{`k.5' );
define( 'LOGGED_IN_SALT',   'T|T`xH#!t+)*}kTm<A0L1xH 1+s2BcP%B)qN9S{87y$`T<(Q4f;zf[_eYn&Gq(Xc' );
define( 'NONCE_SALT',       ',}P&Ras8ur%z{=#%C4&^)I#Gw(UJ6+-z;/s/SI{B6gKYI4PhAOos U.0ZF$aVep_' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
