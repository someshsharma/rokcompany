<?php
/**
 Template Name: Home Page
 */

get_header(); ?>

	

			<?php
			while ( have_posts() ) : the_post(); ?>
<!--End the top_BG-->
<section class="what_wexpect" id="what_wexpect">
<div class="container text-center">
  <h2 class="hd_icn">What to Expect </h2>
  <div class="row">
  <?php 
	$args = array( 'post_type' => 'service', 'posts_per_page' => 4, 'order' => 'ASC' );
	$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); 
		$feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
		?>
        <div class="col-sm-6">
      <div class="expect_item <?php the_field('add_class');?>">
        <div class="hd_title"> <?php the_title();?> </div>
        <div class="body_cont">
          <?php the_content();?>
        </div>
      </div>
    </div>
        
        
		  
        <?php
		endwhile;
		wp_reset_query();
	?>
    
  </div>
  </section>
  <!--End the what_wexpect-->
  <section class="porfolio" id="porfolio">
    <div class="container text-center">
      <h2 class="hd_icn">Portfolio </h2>
      <div class="portfolio_gallery">
        <div class="gallery  owlCarousel">
          <?php 
	$args = array( 'post_type' => 'portfolio', 'posts_per_page' => -1, 'order' => 'ASC' );
	$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); 
		$feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
		?>
        <div class="item">
            <ul class="port_item">
              <li><a  href="#"> <img src="<?php echo $feat_image; ?>" alt="<?php the_title();?>"> </a> </li>
             
            </ul>
          </div>
        
		  
        <?php
		endwhile;
		wp_reset_query();
	?>
          
        </div>
      </div>
    </div>
  </section>
  <!--End the porfolio-->
  <section class="team" id="team">
  <div class="container">
    <h2 class="hd_icn  text-center">Team </h2>
     <?php 
	$args = array( 'post_type' => 'team', 'posts_per_page' => 5, 'order' => 'ASC' );
	$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); 
		$feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
		?>
        <div class="tm_item">
      <figure><img src="<?php echo $feat_image; ?>" alt="<?php the_title();?>"></figure>
      <figcaption>
        <h3><?php the_title();?></h3>
        <small><?php the_field('sub_title');?></small> </figcaption>
    </div>
		  
        <?php
		endwhile;
		wp_reset_query();
	?>
    
  </div>
</div>
</section>
<!--End the team-->
<section class="process" id="process">
  <div class="container">
    <h2 class="hd_icn  text-center"><?php the_field('process_title');?> </h2>
    <div class="process-warp">
      <div class="row">
      <?php
	// check if the repeater field has rows of data
	if( have_rows('process_flow') ):
		// loop through the rows of data
		$count =1;
		while ( have_rows('process_flow') ) : the_row();
		if($count % 2 == 0) {
	    ?>
        <div class="col-xs-12 col-sm-12 col-md-6 pull-left">
          <div class="process-item left-pro">
            <div class="process-date pull-right"> <small>STEP</small> <span>0<?php echo $count;?></span></div>
            <div class="process-body pull-left">
              <figure><img src="<?php the_sub_field('upload_icon');?>" alt=""></figure>
              <?php the_sub_field('description');?>
            </div>
          </div>
        </div>
		<?php } else { ?>	
        <div class="col-xs-12  col-sm-12 col-md-6 pull-right">
          <div class="process-item right-pro">
            <div class="process-date pull-left"> <small>STEP</small> <span>0<?php echo $count;?></span></div>
            <div class="process-body pull-right">
              <figure><img src="<?php the_sub_field('upload_icon');?>" alt=""></figure>
              <?php the_sub_field('description');?>
            </div>
          </div>
        </div>
	    <?php  } 
		$count++; endwhile;	
	endif;
	?>
      </div>
    </div>
  </div>
</section>
<!--End the process-->
<section class="strat_project" id="strat_project">
  <div class="container">
    <h2 class="hd_icn  text-center"><?php the_field('project_title');?></h2>
    <ul>
    <?php
	// check if the repeater field has rows of data
	if( have_rows('your_project') ):
		// loop through the rows of data
		while ( have_rows('your_project') ) : the_row();
	    ?>
			<li class="col-sm-4"><a href="<?php the_sub_field('link');?>"> <img src="<?php the_sub_field('upload_image');?>" alt="logos">
        <h3><?php the_sub_field('title');?></h3>
        </a></li>
	    <?php
		endwhile;	
	endif;
	?>
    
    </ul>
  </div>
</section>
<!--End the strat_project-->
				

		<?php	endwhile; // End of the loop.
			?>

<?php
get_footer();
