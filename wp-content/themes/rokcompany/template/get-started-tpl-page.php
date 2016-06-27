<?php
/**
 Template Name: Get Started Page
 */

get_header(); ?>

	




<?php while ( have_posts() ) : the_post(); ?>
<div class="page">
<?php the_content();?>


	

	

	<div id="bottom" class="find-us">
		<a href="#bottom" class="toggle find js-smoothscroll" data-toggle="find-us">Find Us</a>

		<div class="info">
			<span>1234 XYZ</span>
			<span>xyz</span>
			<span>123-456-7890</span>
			<span><a href="mailto:info@rockcompany.com3">info@rockcompany.com</a></span>
		</div>
	</div>


</div><!-- .page -->
<?php	endwhile; // End of the loop.
			?>

<?php
get_footer();


			

	