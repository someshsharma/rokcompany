<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rokcompany
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/bootstrap.css" rel="stylesheet">
<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/font-awesome.css" rel="stylesheet">
<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/owl.carousel.css" rel="stylesheet">
<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/owl.theme.default.css" rel="stylesheet">
<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/scrolling-nav" rel="stylesheet">
<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/style.css" rel="stylesheet">
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php if(!is_front_page()) : ?>
 <link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/get_started.css" media="all" />
 <script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/get_started.js"></script>
 <?php endif;?>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<section class="top_bg">
<div class="header">
  <nav class="navbar navbar-fixed-top" role="navigation">
    <div class="container">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
      <a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" alt=""> </a>
      <div class="nav-sec">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
      
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>#what_wexpect"  class="page-scroll">SERVICE</a></li>
            <li ><a href="<?php echo esc_url( home_url( '/' ) ); ?>#porfolio" class="page-scroll">portfolio</a></li>
                 <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>#process" class="page-scroll">Process</a></li>
            <li ><a href="<?php echo esc_url( home_url( '/' ) ); ?>#team" class="page-scroll">TEAM</a></li>
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>#contact" class="page-scroll">Contact</a></li>
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>#strat_project" class="page-scroll"> Start Your Project</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>

  
  <!--End the header-->
  <?php if(is_front_page()) : ?>
  <div class="banner-sec" id="home">
    <div class="banner_sl owlCarousel">
    <?php 
	$args = array( 'post_type' => 'home_slider', 'posts_per_page' => 10 );
	$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); 
		$feat_image1 = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
		?>
      
    <div class="item"> <img src="<?php echo $feat_image1?>" alt="banner"> </div>
    
 
		  
        <?php
		endwhile;
		wp_reset_query();
	?>
      
    </div>
  </div>
  <!-- End Banner-sec-->
  <section class="services" id="services">
  <div class="services-banner">
    <h2 class="large-heading"> SERVICES </h2>
  </div>
  <div class="clearfix"></div>
  <div class="container">
  <?php $args = array( 'post_type' => 'service', 'posts_per_page' => -1, 'order' => 'ASC' );
	$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); 
		$feat_image2 = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
    <div class="services-item">
      <div class="item-inner">
        <figure> <img src="<?php echo $feat_image2;?>" alt="sercices"></figure>
        <h3><?php the_title();?></h3>
      </div>
    </div>
    <?php
		endwhile;
		wp_reset_query();
	?>
  
  </div>
</section>
  
  <?php endif;?>
</section>
