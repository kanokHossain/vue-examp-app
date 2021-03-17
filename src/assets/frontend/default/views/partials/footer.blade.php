<section id="about" class="about-area area-padding" style="margin-top:20px;">
    <div class="container-fluid" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
    <h4 class="h"><i class="fa fa-map-marker"></i> Contact Us</h4> 
    <div class="contact-us">
        <div class="row">
      
            <div class="col-md-4"  data-aos="zoom-in-up" data-aos-duration="2000">
                <?php if(false) : ?>
                <div class="road-map-image">
                    <img src="{{ base_url('uploads/map.png') }}" alt="laboratory school">
                </div>
                <?php endif ?>
            </div>
            
            <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2000">
                <div class="address">
                    <p class="school-name"> {{ $backend->sname }} </p>
                    <p class="address-des"><i class="fa fa-map-marker"></i> {{ frontendData::get_backend('address') }} </p>
                    <p class="address-des"><i class="fa fa-mobile"></i> {{ frontendData::get_backend('phone') }}</p>
                    <p class="address-des"><i class="fa fa-envelope-o"></i> {{ frontendData::get_backend('email') }}</p>
                </div>
            </div>
    
        <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2000">
            @if(frontendData::get_map_link())
            <!--Google map-->
            <div  class="map">
                <iframe src="{{ frontendData::get_map_link() }}" frameborder="0" style="border:0" allowfullscreen></iframe>
                <!-- https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.15288697683!2d90.26050421498324!3d23.84870418454097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ea2d3a8e9b0b%3A0x88c8f23f2cd87710!2sCentral+Laboratory+School+%26+College!5e0!3m2!1sen!2sbd!4v1501407628333 -->
            </div>
            <!-- Buttons-->
            @endif
        </div>
    

    </div>
   
    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

    </section>
<footer>
    <!-- Section: Contact v.1 -->

<!-- Section: Contact v.1 -->
	<div class="footer-area">
          	<div class="container-fluid">
			<div class="row">
				<div class="col-sm-4">
					<div class="copyright text-left">
                       {{ frontendData::get_backend('footer') }}
					</div>
				</div>
				<div class="col-sm-4 ">
				    <div class="copyright text-center">
				        Powered by
				         <a href="http://www.braintech.com.bd"> <strong><img style="width:80px;" src="<?php echo site_url('uploads/images/logo.png')?>"></strong>
				    </a>
				    </div>
				   
				</div>
				<div class="col-sm-4 text-right">
                <ul>
                    <li><a href="{{ frontendData::get_frontend('facebook') }}"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="{{ frontendData::get_frontend('twitter') }}"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="{{ frontendData::get_frontend('linkedin') }}"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="{{ frontendData::get_frontend('youtube') }}"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="{{ frontendData::get_frontend('google') }}"><i class="fa fa-google-plus"></i></a></li>
                </ul>
            </div>
			</div>
		</div>
	</div>
	

</footer>