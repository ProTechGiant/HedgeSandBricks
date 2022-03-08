$(function() {
    var LocsA = [
        {
            lat: 40.740178,
            lon: -74.190194,
            title: 'Property 1',
            html: [ '<div class="single-product-wrap style-bottom">',
                        '<div class="thumb">',
                            '<img src="assets/img/project/1.png" alt="img">',
                            '<div class="product-wrap-details">',
                                '<div class="media">',
                                    '<div class="author">',
                                        '<img src="assets/img/author/1.png" alt="img">',          
                                    '</div>',
                                    '<div class="media-body">',
                                        '<h6><a href="#">Owner Name</a></h6>',
                                        '<p><img src="assets/img/icon/location-alt.png" alt="img">New York real estate </p>',
                                    '</div>',
                                    '<a class="fav-btn float-right" href="#"><i class="far fa-heart"></i></a>',
                                '</div>',
                            '</div>', 
                        '</div>', 
                        '<div class="product-details-inner">',
                            '<h4><a href="property-details.html">Daily Apartment</a></h4>',
                            '<p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>',
                        '</div>',
                        '<div class="product-meta-bottom">',
                            '<span class="price">$ 80,650.00</span>',
                            '<span>For sale</span>',
                            '<span>1 year ago</span>',
                        '</div>', 
                    '</div>'
                ].join(''),
            icon: 'assets/img/1.png',
        },
        {
            lat: 40.733617,
            lon: -74.171150,
            title: 'Property 2',
            html: [ '<div class="single-product-wrap style-bottom">',
                        '<div class="thumb">',
                            '<img src="assets/img/project/2.png" alt="img">',
                            '<div class="product-wrap-details">',
                                '<div class="media">',
                                    '<div class="author">',
                                        '<img src="assets/img/author/2.png" alt="img">',          
                                    '</div>',
                                    '<div class="media-body">',
                                        '<h6><a href="#">Owner Name</a></h6>',
                                        '<p><img src="assets/img/icon/location-alt.png" alt="img">New York real estate </p>',
                                    '</div>',
                                    '<a class="fav-btn float-right" href="#"><i class="far fa-heart"></i></a>',
                                '</div>',
                            '</div>', 
                        '</div>', 
                        '<div class="product-details-inner">',
                            '<h4><a href="property-details.html">Gorgeous Villa</a></h4>',
                            '<p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>',
                        '</div>',
                        '<div class="product-meta-bottom">',
                            '<span class="price">$ 80,650.00</span>',
                            '<span>For sale</span>',
                            '<span>1 year ago</span>',
                        '</div>', 
                    '</div>'
                ].join(''),
            icon: 'assets/img/1.png',
        },
        {
            lat: 40.743011,
            lon: -74.247100,
            title: 'Property 3',
            html: [ '<div class="single-product-wrap style-bottom">',
                        '<div class="thumb">',
                            '<img src="assets/img/project/3.png" alt="img">',
                            '<div class="product-wrap-details">',
                                '<div class="media">',
                                    '<div class="author">',
                                        '<img src="assets/img/author/3.png" alt="img">',          
                                    '</div>',
                                    '<div class="media-body">',
                                        '<h6><a href="#">Owner Name</a></h6>',
                                        '<p><img src="assets/img/icon/location-alt.png" alt="img">New York real estate </p>',
                                    '</div>',
                                    '<a class="fav-btn float-right" href="#"><i class="far fa-heart"></i></a>',
                                '</div>',
                            '</div>', 
                        '</div>', 
                        '<div class="product-details-inner">',
                            '<h4><a href="property-details.html">Daily Property</a></h4>',
                            '<p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>',
                        '</div>',
                        '<div class="product-meta-bottom">',
                            '<span class="price">$ 80,650.00</span>',
                            '<span>For sale</span>',
                            '<span>1 year ago</span>',
                        '</div>', 
                    '</div>'
                ].join(''),
            icon: 'assets/img/1.png',
        },
        {
            lat: 40.711150,
            lon: -74.214998,
            title: 'Property 4',
            html: [ '<div class="single-product-wrap style-bottom">',
                        '<div class="thumb">',
                            '<img src="assets/img/project/4.png" alt="img">',
                            '<div class="product-wrap-details">',
                                '<div class="media">',
                                    '<div class="author">',
                                        '<img src="assets/img/author/4.png" alt="img">',          
                                    '</div>',
                                    '<div class="media-body">',
                                        '<h6><a href="#">Owner Name</a></h6>',
                                        '<p><img src="assets/img/icon/location-alt.png" alt="img">New York real estate </p>',
                                    '</div>',
                                    '<a class="fav-btn float-right" href="#"><i class="far fa-heart"></i></a>',
                                '</div>',
                            '</div>', 
                        '</div>', 
                        '<div class="product-details-inner">',
                            '<h4><a href="property-details.html">Farm House</a></h4>',
                            '<p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>',
                        '</div>',
                        '<div class="product-meta-bottom">',
                            '<span class="price">$ 80,650.00</span>',
                            '<span>For sale</span>',
                            '<span>1 year ago</span>',
                        '</div>', 
                    '</div>'
                ].join(''),
            icon: 'assets/img/1.png',
        }               
    ];
    new Maplace({
        locations: LocsA,
        controls_on_map: false,
        map_options: {
            zoom: 12,
            scrollwheel: false,
            stopover: true
        }
    }).Load();

});