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
              <li><a href="#home" class="page-scroll">home</a></li>
              <li><a href="#what_wexpect"  class="page-scroll">SERVICE</a></li>
              <li ><a href="#porfolio" class="page-scroll">portfolio</a></li>
              <li ><a href="#team" class="page-scroll">TEAM</a></li>
              <li><a href="#process" class="page-scroll">Process</a></li>
              <li><a href="#strat_project" class="page-scroll"> Start Your Project</a></li>
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
		while ( $loop->have_posts() ) : $loop->the_post(); ?>
		  <div class="item">
        <h1><?php the_title();?></h1>
        <?php the_content();?>
      </div>
        <?php
		endwhile;
		wp_reset_query();
	?>
      
    </div>
  </div>
  <!-- End Banner-sec-->
  <div class="container top-offer-wap">
    <div class="offer_box logo_dsign">
      <figure><img src="<?php the_field('offer_one_icon');?>" alt=""></figure>
      <?php the_field('offer_one_description');?>
    </div>
    <div class="what_we_offer">
      <h2><?php the_field('what_we_offer');?></h2>
    </div>
    <div class="offer-items">
      <div class="row">
        <div class="col-sm-6">
          <div class="website_bx offer_box">
           <?php the_field('offer_two_description');?>
            <figure><img src="<?php the_field('offer_two_icon');?>" alt=""></figure>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="custom_gpic offer_box">
            <?php the_field('offer_three_description');?>
            <figure><img src="<?php the_field('offer_three_icon');?>" alt=""></figure>
          </div>
        </div>
      </div>
    </div>
    <!-- End the offer-items-->
  </div>
  <?php endif;?>
</section>
