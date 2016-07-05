<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rokcompany
 */

?>

	<footer class="footer">
   <div class="container"><div class="footer_form row" id="contact">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
    <?php echo do_shortcode('[contact-form-7 id="116" title="Contact form Footer"]');?>
    </div>
    <div class="col-sm-1"></div>
    </div>
     <ul class="social-icn">
	 <li><a href="#"><i class="fa fa-instagram"></i></a></li>
	 	 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
	 <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>

	 </ul>
 
 <p>2016 Rok Design Company. All Rights Reserved.</p>
  </div>
 </footer>
<!--End the Footer-->

<?php if(is_front_page()) { ?>

<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/jquery.min.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/bootstrap.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/jquery.easing.min.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/scrolling-nav.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/owl.carousel.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/custom.js"></script>
<?php } else { ?>
<div id="tve_notification_box"></div>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/jquery.min.js"></script>
<!-- End of Async HubSpot Analytics Code -->
<script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/get_started2.js"></script>
<script type="text/javascript">
	
var textarea = jQuery("#get-started-type");
		textarea.attr("data-toggle","select-box");
$("#submit").click(function() {
  $("#get-started").submit();
});
		</script>
        <?php } ?>
<?php wp_footer(); ?>

</body>
</html>
