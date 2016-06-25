<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rokcompany');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'SX&q0Lob2zGRYhf/,EBU;+3wF.%_Q6bMyXx5K:h-Lr08oJ<@sAFZP|g4*%3/I#sz');
define('SECURE_AUTH_KEY',  '6Pi6W5aV1G8Be,,> bl6i;8_f:akH!0F!qT5tVpJj|w8/LAcKH/Ak!!2|^Qq>3|5');
define('LOGGED_IN_KEY',    'zrx0nP^Z<A2EJr`U3s>_<GG/SQD(ZY(uQ}Bh9x^hZ<{cPRO`&xawWx[lOO>J5:vL');
define('NONCE_KEY',        'RP!HFIW=Y`U+Jw__i645ge<>!}*J@TNj1U261xRbvXMSWa].TpMTplk3ySWg<I4O');
define('AUTH_SALT',        '=~e:icE$5P9QevU5m4=!Q&U*/odMciVviAO#mCogBB4p+%*7PK9U1|*Pp+[2Dw3h');
define('SECURE_AUTH_SALT', 'OuIde&.gYsf1al2vxom},<2_LtoR#?H>VaSpfAH)JP.&u]ewtbY`-zwZp7Yd fdy');
define('LOGGED_IN_SALT',   'EDLLxn+qC{%[6iqNS<_yK:gx6t{!E2gp0TDObf@wu?Et`lMSBxM|NWexQ$W+/.+>');
define('NONCE_SALT',       'dk8E&!<wcGP.Z2<4H*<AYNSLcgqPp<0>?CO0Xl!%M8SvFR7OfW18yC|W)C,Q.*p1');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
