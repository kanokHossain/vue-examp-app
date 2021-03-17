@layout('views/layouts/master')

@section('content')
<div id="fb-root"></div>
<style>
.side-content table.table.table-sm.frontend-table td{
    font-size: 10px;
}
</style>
<script async defer src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2"></script>
<section style="margin-top:10px;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8"  data-aos="fade-right"  data-aos-duration="2000">

                @if(count($sliders))
                <div id="main-slider" class="slider-area">
                    @foreach($sliders as $slider)
                    <div class="single-slide">
                        <img src="{{ base_url('uploads/gallery/'.$slider->file_name) }}" alt="">
                        <div class="banner-overlay">
                            <div class="container-fluid">
                                <!--                        <div class="caption style-2">
                                                            <h2>{{ sentenceMap(htmlspecialchars_decode($slider->file_title), 17, '<span>', '</span>') }}</h2>
                                                            <p>{{ htmlspecialchars_decode($slider->file_description) }}</p>
                                                        </div>-->
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                @endif  
            </div>
            <div class="col-md-4">
                <div class="headmaster_main notice-board-area" style="height: 450px;" data-aos="flip-left"  data-aos-duration="2000">
                    <h4 style="margin-bottom:5px;text-align: center;" class="front-notice">নোটিশ বোর্ড</h4>
                    <ul class="pinboards">
                        @if(count($notices))
                        <?php $i = 1; ?>
                        @foreach($notices as $notice)
                        @if($i <= 5)


                        <li>
                            <div>
                                <img src="<?= base_url($frontendThemePath . 'assets/img/pin.png') ?>" class="pin-image pin-notice">
                                <small>{{ date('d M Y', strtotime($notice->date)) }}</small>
                                <h4>{{ namesorting($notice->title, 45) }}</h4>
                                {{ namesorting($notice->notice, 40)  }}
                                <a href="{{ base_url('frontend/notice/'.$notice->noticeID) }}" target="_blank"><i class="fa fa-external-link "></i></a>
                            </div>
                        </li>
                        @endif
                        <?php $i++; ?>
                        @endforeach
                        @endif      


                    </ul>
                </div>

            </div>    
        </div>
    </div>


</section>

<section style="margin-top:10px;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9" data-aos="fade-right" data-aos-duration="2000">
                {{ htmlspecialchars_decode($page->content) }}

                @if(false)
                <div class="row">
                    <div class="col-md-6 ">
                        <div class="headmaster_main">
                            <div class="text-right about-img hide">
                                <img style="width: 180px; margin-bottom: 20px;" src="{{ base_url('uploads/principal.jpg') }}" alt="">
                            </div>

                            <h4 class="text-left" style="margin-bottom:5px;padding-top: 20px;">প্রধান শিক্ষকের বাণী</h4>
                            <p class="text-justify">অপার সম্ভাবনাময় আমাদের এই বাংলাদেশ। এই দেশ ও জাতিকে বিশ্ব দরবারে মাথা উঁচু কওে দাঁড়াতে  সুশিক্ষার কোন বিকল্প নেই। একটি সমৃদ্ধ জাতি গঠনে উন্নত শিক্ষা ব্যবস্থা ও উচ্চমান সম্পন্ন শিক্ষা পদ্ধতি অতীব জরুরী। শিক্ষার মূল উদ্দেশ্য হল শারিরীক, বুদ্ধিভিত্তিক ও নৈতিক শিক্ষার সমন্বয় ঘটানো। কিন্তু বর্তমান শিক্ষা ব্যবস্থায় যোগ্যতা ও দক্ষতার অভাব পরিলক্ষিত  হয়। এমতাবস্থায় আমাদের এই শিক্ষা ব্যবস্থা সুশিক্ষিত জাতি গঠনে অবিরামভাবে কাজ করে যাবে ইনশাল্লাহ।</p>
                            <p class="text-justify">‘অবিরাম মডেল স্কুল এন্ড কলেজ’ এ রয়েছে আধুনিক কম্পিউটার ল্যাব ছাড়াও পদার্থ রসায়ন, জীববিজ্ঞানসহ বিভিন্ন বিষয়ে সমৃদ্ধ ল্যাব। বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক শাখার প্রতিটি বিষয়ের জন্য রয়েছে অভিজ্ঞ ও গুণী শিক্ষক- শিক্ষিকামন্ডলী। যাদের নিবিড় পর্যবেক্ষন এবং তত্ত্বাবধানে  ছাত্র- ছাত্রীরা নিয়মিত ভাল ফলাফলের দিকে এগিয়ে যাবে বলে আমার বিশ্বাস।</p>
                            <p class="text-justify">প্রতিষ্ঠানটির ক্রমোন্নতির জন্য ছাত্র- ছাত্রীদের অধ্যয়ন মনষ্ক করে তোলা এবং তাদের ভাল ফলাফল নিশ্চিত করা সহ সার্বিক বিকাশের লক্ষ্যে অভিভাবকসহ সংশ্লিষ্ট সকলের সহযোগিতা কামনা করছি।</p>
                            <br>
                            <p>শুভেচ্ছান্তে <br>
                            মোঃ আকমত আলী<br>
                            অধ্যক্ষ<br>
                            অবিরাম মডেল স্কুল এন্ড কলেজ</p>

                            <p style="text-align: justify;display:none;"> 
                                সাভার আরিচা রোডের পূর্বপাশে অবস্থিত “সেন্ট্রাল ল্যাবরেটরি স্কুল এন্ড কলেজ” সাভারের শাহীবাগ এলাকায় সেরা শিক্ষা প্রতিষ্ঠান হিসেবে ছাত্র-ছাত্রী, অভিভাবক ও সুধীজনের কাছে ইতোমধ্যে পরিচিতি লাভ করেছে। <span id="dots">...</span>
                                <span id="more">পরম করুণাময় আল্লাহর অশেষ মেহেরবানীতে এ প্রতিষ্ঠান উত্তরোত্তর সাফল্যের দিকে এগিয়ে যাচ্ছে। আমরা দৃঢ়ভাবে বিশ^াস করি সম্মানিত অভিভাবকসহ সকলের সহযোগিতায়  “সেন্ট্রাল ল্যাবরেটরি স্কুল এন্ড কলেজ” একদিন বিশ^মানের আদর্শ শিক্ষায়তন হিসেবে ¯^ীকৃতি লাভে সক্ষম হবে ইন্শাআল্লাহ। আল্লাহ আমাদের সহায় হউন।
                                    <br>
                                    মোঃ লুৎফর রহমান খান
                                    অধ্যক্ষ
                                    সেন্ট্রাল ল্যাবরেটরি স্কুল এন্ড কলেজ।
                                </span>
                            </p> 
                            <button class="hide" onclick="myFunction()" id="myBtn">Read more</button>
                        </div>

                    </div>


                    <div class="col-md-6">
                        <div class="headmaster_main">
                            <div class="text-right about-img hide">
                                <img style="width: 180px; margin-bottom: 20px;" src="{{ base_url('uploads/Logo.png') }}" alt="">
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <h4 style="margin-top:15px;margin-bottom:5px;padding-top: 20px;">বিদ্যালয়ের বৈশিষ্ট্যঃ </h4>
                                    <p style="text-align: justify;">
                                        <ul class="pros" style="margin-left: 20px;">
                                            <li>
                                                চারতলা ভবন বিশিষ্ট সুসজ্জিত, পরিপাটি, নিরিবিলি, ডিজিটাল ও সুবিশাল ক্লাসরুম।
                                            </li>
                                            <li>
                                                বাংলা, ইংরেজী ও গণিতের ভিত্তি মজবুত করার পাশাপাশি  ধর্মীয়  ও নৈতিক শিক্ষার প্রতি গুরুত্বারোপ। 
                                            </li>
                                            <li>
                                                সার্বক্ষণিক নিরাপত্তা, বিদ্যুৎ, জেনারেটর ও সিসি ক্যামেরা দ্বারা পর্যবেক্ষণ।
                                            </li>
                                            <li>
                                                বিষয়ভিত্তিক অভিজ্ঞ শিক্ষক মন্ডলী দ্বারা সৃজনশীল পদ্ধতিতে ক্লাস পরিচালিত।
                                            </li>
                                            <li>
                                                একাডেমিক শিক্ষার পাশাপাশি বিনোদনমূলক শিক্ষার ব্যবস্থা।
                                            </li>
                                            <li>
                                                পিএসসি, জেএসসি ও এসএসসি পরীক্ষার্থীদের জন্য বিশেষ কোচিংয়ের ব্যবস্থা।
                                            </li>
                                            <li>
                                                ছাত্র-ছাত্রীদের  সকল সমস্যা নিয়ে অভিভাবকদের সাথে মত বিনিময় ব্যবস্থা।
                                            </li>
                                            <li>
                                                ওয়াইফাই সমৃদ্ধ ভবন, কম্পিউটার ল্যাব, অভিভাবকদের বিশেষ রুম ও ছাত্র- ছাত্রীদের নামাজ আদায়ের উত্তম ব্যবস্থা।
                                            </li>
                                        </ul>
                                    </p> 
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                @endif
                
                <div class="dresscode">
                    <div class="row hide">
                        <div class="col-md-12">
                            <h4 class="h" >স্কুলের গৌরবময় সাফল্য</h4>
                            <div class="achievements"  data-aos="flip-up" data-aos-duration="2000">
                                <img src="{{ base_url('uploads/achievements.jpg') }}" alt="">
                            </div>


                        </div>
                    </div>


                </div>
                <div class="dresscode">
                    <div class="row">
                        <div class="col-md-12">
                            <div data-aos="flip-down" data-aos-duration="2000">
                                <h4 class="h" > ভর্তির সময় প্রয়োজনীয় কাগজ পত্রাদি</h4>
                                @if(count($admissionrules))
                                <?php $i = 1; ?>
                                <table class="table table-sm frontend-table">
                                    @foreach($admissionrules as $admissionrules)
                                    <tr class="table-info"><td><?php echo $i; ?></td>
                                        <td>{{ namesorting($admissionrules->rules, 500) }}</td>
                                    </tr>
                                    <?php $i++; ?>
                                    @endforeach
                                </table>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dresscode">
                    <div class="row">
                        <div class="col-md-12">
                            <div data-aos="flip-down" data-aos-duration="2000">
                                <h4 class="h" > ভর্তি ফি ও বেতন</h4>
                                @if(count($feeinformation))
                                <?php $i = 1; ?>
                                <table class="table table-sm frontend-table">
                                    <thead>
                                        <tr>
                                            <td>#</td>
                                            <td>শ্রেণী</td>
                                            <td>ভর্তি ফি</td>
                                            <td>সেশন চার্জ</td>
                                            <td>মাসিক বেতন</td>
                                            <td>আইসিটি চার্জ</td>
                                        </tr>  
                                    </thead>
                                    @foreach($feeinformation as $feeinformation)
                                    <tbody>
                                        <tr class="table-info"><td><?php echo $i; ?></td>
                                            <td>{{ namesorting($feeinformation->classes, 100) }}</td>
                                            <td>{{ namesorting($feeinformation->admissionfee, 500) }}</td>
                                            <td>{{ namesorting($feeinformation->sessionfee, 100) }}</td>
                                            <td>{{ namesorting($feeinformation->tutionfee, 500) }}</td>
                                            <td>{{ namesorting($feeinformation->labfee, 100) }}</td>

                                        </tr>
                                    </tbody>
                                    <?php $i++; ?>
                                    @endforeach
                                </table>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>


                <!--                <div class="calender-section">
                                       <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                    <div class="col-sm-12">
                        <div class="box">
                            <div class="box-body">
                                 THE CALENDAR 
                                <div id="calendar"></div>
                                
                               @foreach ($holidays as $holiday) { ?>
                                                                                                                                                            <li><?php echo $holiday->title; ?></li>
                                @endforeach
                                                   
                
                            </div>
                
                
                        </div>
                
                    </div>
                
                </div>
                                    </div>
                                </div>
                       
                                </div>
                -->
            </div>
            <div class="col-md-3" data-aos="fade-left" data-aos-duration="2000">
                <?php $sidebars = frontendData::get_sidebars(); ?>
                @foreach($sidebars as $sidebar)
                    @if($sidebar->title == 'events' && $sidebar->status == 1)
                        <div class="side-content" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" >
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="h" style="background: #C12B8C;"><i class="fa fa-calendar-times-o"></i> Event</h4>
                                    <ul>      
                                        @if(count($events))
                                        <?php $i = 1; ?>
                                        @foreach($events as $event)
                                        @if($i <= 5)
                                        <li>
                                            <div class="single-event-list">
                                                <div class="event-content">
                                                    <div class="event-meta">
                                                        <div class="event-date first-date">
                                                            {{ date('d', strtotime($event['fdate']))  }}
                                                            <span>{{ date('M', strtotime($event['fdate'])) }}</span>
                                                        </div>
                                                        <div class="event-info">
                                                            <h4><a href="{{ base_url('frontend/event/'.$event['eventID']) }}">{{ $event['title'] }}</a></h4>
                                                            <div class="event-time">
                                                                <span class="event-title">Time: </span>
                                                                <span>{{ date('h:i A', strtotime($event['ftime'])) }} - {{ date('h:i A', strtotime($event['ttime'])) }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--                                        <a id="{{ $event['eventID'] }}" href="#" class="primary-btn style--two going-event">Going now</a>-->
                                                </div>
                                            </div>

                                        </li>
                                        @endif
                                        <?php $i++; ?>
                                        @endforeach
                                        @endif
                                    </ul>
                                </div>
                            </div>
                        </div>
                    @endif
                @endforeach

                <div class="side-content" style="margin-top:20px;" data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="h" style="background: #630E34;"><i class="fa fa-clock-o"></i>   শিক্ষা কার্যক্রম ও সময়সূচী</h4>
                            @if(count($classschedule))
                            <?php $i = 1; ?>
                            <table class="table table-sm frontend-table">
                                @foreach($classschedule as $classschedule)
                                <tr class="table-info"><td><?php echo $i; ?></td>
                                    <td>{{ namesorting($classschedule->title, 100) }}</td>
                                    <td>{{ namesorting($classschedule->description, 500) }}</td></tr>
                                <?php $i++; ?>
                                @endforeach
                            </table>
                            @endif
                        </div>
                    </div>


                </div>
                <div class="side-content" style="margin-top:20px;" data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="h" style="background: #1A73E8;"><i class="fa fa-calendar"></i> স্কুলের নির্ধারিত পোশাক</h4>
                            @if(count($dresses))
                            <?php $i = 1; ?>
                            <table class="table table-sm frontend-table">
                                @foreach($dresses as $dress)
                                <tr class="table-info"><td><?php echo $i; ?></td>
                                    <td>{{ namesorting($dress->title, 100) }}</td>
                                    <td>{{ namesorting($dress->description, 500) }}</td></tr>
                                <?php $i++; ?>
                                @endforeach
                            </table>
                            @endif
                        </div>
                    </div>


                </div>

                <div class="side-content" style="margin-top: 20px;" data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="h fb-page-headline"><i class="fa fa-facebook"></i> Official Facebook Page</h4>

                            <div class="fb-page" data-href="{{ frontendData::get_frontend('facebook') }}" data-tabs="timeline" data-width="307" data-height="100" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/savarlabschool" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/savarlabschool">Central Laboratory School & College</a></blockquote></div>
                        </div>
                    </div>
                </div>

                @if(false)
                <div class="side-content" style="margin-top: 20px;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="h"> <i class="fa fa-area-chart"></i> VISITOR STATISTICS</h4>
                            <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=311a37d4d2e76a23fb3b35b65d028cabb70de114'></script>
                            <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/499852/t/1"></script>       
                        </div>
                    </div>
                </div>
                @endif

                <div class="side-content" style="margin-top: 20px;" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="h" style="background: #D92B47"><i class="fa fa-link"></i> Important Links</h4>
                            <?php  
                                $important_link_content = frontendData::get_frontend('important_link');
                            ?>
                            {{ $important_link_content }}

                            @if(false)
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://eboardresults.com/app/">JSC/SSC/HSC AND EQUIVALENT EXAMINATION</a></li>
                                <li class="list-group-item"><a href="https://dhakaeducationboard.gov.bd">Board of Intermediate and Secondary Education, Dhaka. </a></li>
                                <li class="list-group-item"><a href="https://dhakaeducationboard.gov.bd/">Dhaka Board</a></li>
                                <li class="list-group-item"><a href="moedu.gov.bd">Education Ministry</a></li>
                                <li class="list-group-item"><a href="http://www.bteb.gov.bd/">Technical Education Board</a></li>
                            </ul>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

</section>
@endsection
