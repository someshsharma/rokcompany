<?php
/**
 Template Name: Get Started Page
 */

get_header(); ?>

	




<?php while ( have_posts() ) : the_post(); ?>
<div class="page">
<form action="#" method="post" id="get-started"  enctype="multipart/form-data">

	<div class="form-screens">
		<div class="screen active" id="screen-name">
			<div class="container">
				<div class="content">
							<h1>Get Started.</h1>

					<p class="subhead">We look forward to getting to know you a bit more.</p>

					<div class="field">
						<p class="shrink-label">
							<label for="get-started-first-name">What&rsquo;s Your First Name? <span class="req">*</span></label>
							<input type="text" autocomplete="off" id="get-started-first-name" name="first_name" value="" />
							<span class="error-msg">Please provide your first name</span>
						</p>
					</div>
					<div class="field">
						<p class="shrink-label">
							<label for="get-started-last-name">What&rsquo;s Your Last Name? <span class="req">*</span></label>
							<input type="text" autocomplete="off" id="get-started-last-name" name="last_name" value="" />
							<span class="error-msg">Please provide your last name</span>
						</p>

						<button disabled class="next" data-screen="screen-email"></button>

						<p class="progress">1/ 6</p>
					</div>
				</div>
			</div>
		</div><!-- #screen-name -->

		<div class="screen" id="screen-email">
			<div class="container">
				<div class="content">
					

					<h1>No Spamsies.</h1>

					<p class="subhead">We promise we won't spam your inbox, this is just so we have contact information for you.</p>

					<div class="field">
						<p class="shrink-label">
							<label for="get-started-email">What&rsquo;s Your Email? <span class="req">*</span></label>
							<input type="email" id="get-started-email" name="email" value="" />
							<span class="error-msg">Please enter a valid email address</span>
						</p>

						<button disabled class="next" data-screen="screen-phone"></button>

						<p class="progress">2/ 6</p>
					</div>
				</div>
			</div>
		</div><!-- #screen-email -->

		<div class="screen" id="screen-phone">
			<div class="container">
				<div class="content">
					
					<h1>No unwanted calls.</h1>

					<p class="subhead">We won’t interrupt you at dinner time, this just makes it a little easier for us to get in touch with you.</p>

					<div class="field">
						<p class="shrink-label">
							<label for="get-started-phone">What&rsquo;s Your Phone Number? <span class="req">*</span></label>
							<input type="tel" id="get-started-phone" name="phone" value="" />
							<span class="error-msg">Please enter a valid phone number</span>
						</p>

						<button disabled class="next" data-screen="screen-type"></button>

						<p class="progress">3/ 6</p>
					</div>
				</div>
			</div>
		</div><!-- #screen-phone -->

		<div class="screen" id="screen-type">
			<div class="container">
				<div class="content">
					
					<h1>We Got This.</h1>

					<p class="subhead">Our experienced team is ready to dive into your project. What are you looking for?</p>

					<div class="field">
						<div class="shrink-label select-box">
							<label class="toggle" data-toggle="select-box" for="get-started-type">What Type of Project? <span class="req">*</span> <span class="x">(you may select multiple items)</span></label>
<span>
							<textarea id="get-started-type" name="type" class="toggle" data-toggle="select-box" name="get-started-type"></textarea>
</span>
							<ul class="select">
								<li>Web Design</li>
								<li>WordPress</li>
								<li>Web App</li>
								<li>Marketing</li>
								<li>SEO / SEM</li>
								<li>Branding</li>
								<li>Other / Not Sure</li>
							</ul>

							<span class="error-msg">Please select at least one project type</span>
						</div>

						<button disabled class="next" data-screen="screen-budget"></button>

						<p class="progress">4/ 6</p>
					</div>
				</div>
			</div>
		</div><!-- #screen-type -->

		<div class="screen" id="screen-budget">
			<div class="container">
				<div class="content">
					

					<h1>Mo’ Money</h1>

					<p class="subhead">We are very creative about getting the most out of budgets, don't worry!</p>

					<div class="field">
						<div class="range-field">
							<label>What&rsquo;s Your Budget?
								<span class="budget-range">
									<span class="none">(Not Selected)</span>
									<span class="range"><span class="budget-min"></span>&ndash;<span class="budget-max"></span></span>
								</span></label>

							<div id="budget"></div>

							<input type="hidden" name="budget_min" value="" />
							<input type="hidden" name="budget_max" value="" />
						</div>

						<button class="next" data-screen="screen-more"></button>

						<p class="progress">5/ 6</p>
					</div>
				</div>
			</div>
		</div><!-- #screen-budget -->

		<div class="screen" id="screen-more">
			<div class="container">
				<div class="content">
										<h1>Got More?</h1>

					<p class="subhead">The more you can share, the better.</p>

					<div class="field">
						<p class="shrink-label">
							<label for="get-started-message">Additional Info</label>
							<textarea id="get-started-message" name="message"></textarea>
						</p>

						<!--<p class="progress">6/ 6</p>-->

						<button type="submit">Get Started</button>

						<div id="support-files" class="dropzone">
							<input name="supportfiles" type="file" class="fallback" multiple />
						</div>
					</div>
				</div>
			</div>
		</div><!-- #screen-more -->

		<!-- #screen-success -->
	</div>

	

</form>


	
<div class="form-nav">
		<span class="dot" data-status="current" data-screen="screen-name"><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 18" enable-background="new 0 0 24 18" xml:space="preserve">
<g>
	
		<polyline fill="none" stroke="#dadada" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		22,2 7,16 2,11 	"/>
</g>
</svg>
</span>
		<span class="dot" data-status="disabled" data-screen="screen-email"><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 18" enable-background="new 0 0 24 18" xml:space="preserve">
<g>
	
		<polyline fill="none" stroke="#dadada" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		22,2 7,16 2,11 	"/>
</g>
</svg>
</span>
		<span class="dot" data-status="disabled" data-screen="screen-phone"><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 18" enable-background="new 0 0 24 18" xml:space="preserve">
<g>
	
		<polyline fill="none" stroke="#dadada" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		22,2 7,16 2,11 	"/>
</g>
</svg>
</span>
		<span class="dot" data-status="disabled" data-screen="screen-type"><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 18" enable-background="new 0 0 24 18" xml:space="preserve">
<g>
	
		<polyline fill="none" stroke="#dadada" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		22,2 7,16 2,11 	"/>
</g>
</svg>
</span>
		<span class="dot" data-status="disabled" data-screen="screen-budget"><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 18" enable-background="new 0 0 24 18" xml:space="preserve">
<g>
	
		<polyline fill="none" stroke="#dadada" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		22,2 7,16 2,11 	"/>
</g>
</svg>
</span>
		<span class="dot" data-status="disabled" data-screen="screen-more"><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 18" enable-background="new 0 0 24 18" xml:space="preserve">
<g>
	
		<polyline fill="none" stroke="#dadada" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		22,2 7,16 2,11 	"/>
</g>
</svg>
</span>
	</div>
	

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


  
	$allowedExtensions = array("pdf","doc","docx","gif","jpeg","jpg","png","rtf","txt");
	
	$files = array();
	foreach($_FILES as $name=>$file) {
		$file_name = $file['name']; 
		$temp_name = $file['tmp_name'];
		$file_type = $file['type'];
		$path_parts = pathinfo($file_name);
		$ext = $path_parts['extension'];
		if(!in_array($ext,$allowedExtensions)) {
			die("File $file_name has the extensions $ext which is not allowed");
		}
		array_push($files,$file);
	}
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$budget_max = $_POST['budget_max'];
	$budget_min = $_POST['budget_min'];
	$get_started_type = $_POST['get-started-type'];
	$addionalinfo = $_POST['message'];
	// email fields: to, from, subject, and so on
	$to = "vikeshjuyal87@gmail.com";
	$from = "From: info@rokhardware.com"; 
	$subject ="New project request"; 
	$message = '<strong>Frist Name :</strong> '.$first_name . '<br/>';
				$message .= '<strong>Last Name :</strong> '.$last_name . '<br/>';
				$message .= '<strong>Email:</strong><br> ' . $email . '<br/>';
				$message .= '<strong>Phone :</strong> ' . $phone . '<br/>';
				$message .= '<strong>Budget</strong> ' . $budget_min . ' to '.$budget_max.'<br/>';
				$message .= '<strong>Project Type :</strong> ' . $get_started_type . '<br/>';
				$message .= '<strong>Additional Info : </strong>' . $addionalinfo . '<br/>';
				
	$headers = "From: $from";
	
	// boundary 
	$semi_rand = md5(time()); 
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
	 
	// headers for attachment 
	$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
	 
	// multipart boundary 
	$message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n"; 
	$message .= "--{$mime_boundary}\n";
	 
	// preparing attachments
	for($x=0;$x<count($files);$x++){
		$file = fopen($files[$x]['tmp_name'],"rb");
		$data = fread($file,filesize($files[$x]['tmp_name']));
		fclose($file);
		$data = chunk_split(base64_encode($data));
		$name = $files[$x]['name'];
		$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" . 
		"Content-Disposition: attachment;\n" . " filename=\"$name\"\n" . 
		"Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
		$message .= "--{$mime_boundary}\n";
	}
	// send
	 
	$ok = mail($to, $subject, $message, $headers); 
	if ($ok) { 
		header('location: http://dev.rokhardware.com/rokcompany/thank-you/');
	} else { 
		echo "<p>mail could not be sent!</p>"; 
	} 





get_footer();


			

	