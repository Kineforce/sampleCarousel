window.addEventListener('load', event => {

    let carousel_texts = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper, ligula quis semper sagittis, felis dui laoreet lectus, nec convallis purus eros sodales leo. Quisque et massa a magna efficitur convallis eget sed ante. Nullam ultricies sit amet est eget venenatis. Quisque placerat elementum nisl in finibus. Quisque vitae nisl egestas, facilisis dolor vitae, consectetur lorem. Etiam vitae ligula tincidunt, iaculis est elementum, eleifend ex. Fusce eget est a purus fringilla tempus id iaculis lorem. Nulla eu augue urna. Aenean urna sapien, pellentesque gravida magna ut, pellentesque efficitur urna. In maximus, erat nec mattis tristique, nibh velit ultricies odio, sit amet hendrerit dolor lacus vel tortor. Sed interdum mi sit amet ante porta, eget malesuada orci facilisis. Maecenas sit amet accumsan lorem. Ut gravida, metus sed condimentum tincidunt, est tortor consequat leo, eget ultrices sem massa a urna. Sed urna lacus, ultrices vitae euismod et, rutrum vel odio.',
        'Aliquam sem dolor, viverra vitae rutrum et, faucibus a odio. Curabitur vehicula feugiat ipsum. Sed ullamcorper, ipsum et dignissim pretium, libero ex rutrum dui, ac interdum odio felis sit amet velit. Duis semper feugiat nunc, et venenatis felis rutrum id. Ut sed libero sodales, condimentum est eget, cursus arcu. Praesent eget ante vel ipsum sodales aliquam. Nullam in urna dignissim, bibendum nisi ac, ultricies sapien. Suspendisse hendrerit, tellus eu vulputate egestas, libero nisl ullamcorper nunc, elementum fermentum lorem leo ac ante. Ut congue dapibus dolor, sed dictum ex ullamcorper eget. Fusce a lorem pulvinar, imperdiet elit non, malesuada velit. Vivamus at sem euismod ex luctus elementum eget eu ante. Mauris enim elit, aliquet eget mattis sed, hendrerit id eros. Integer sit amet blandit enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at tortor sit amet quam accumsan dapibus. Etiam mollis ipsum nisi, in lobortis ex dapibus sit amet.',
        'Pellentesque auctor ipsum id efficitur aliquam. Mauris purus mauris, viverra id lobortis in, faucibus et mauris. Nullam tristique ex vitae rutrum mattis. Nullam tempor pulvinar luctus. Mauris mi erat, vulputate non odio a, scelerisque fermentum quam. Nulla imperdiet tempor mi, vitae facilisis nulla rutrum ac. Sed placerat scelerisque viverra. Mauris commodo tristique congue. In sed ligula eros. Proin dui eros, rutrum vel ante at, faucibus venenatis turpis. Quisque placerat leo et mauris pharetra dignissim. Morbi vitae massa luctus, tempus mauris id, laoreet ipsum. Suspendisse congue nisi a suscipit scelerisque. Vestibulum sed commodo augue, id scelerisque diam. Quisque vitae egestas nulla, vel tristique lorem.',
        'Nam nec pellentesque turpis. Nam non venenatis lectus. Mauris pharetra, velit et posuere tristique, libero nunc dapibus magna, et accumsan ante tortor quis mi. Quisque egestas eros elit, vitae auctor leo venenatis eget. Sed pretium ligula vel erat consequat tincidunt. Aenean vehicula turpis felis, aliquam pretium libero tempor eu. Nulla facilisi. Aenean sodales vel nisl id ultrices. Mauris imperdiet odio eu metus dignissim lobortis. Morbi vehicula ut purus sed lacinia. Aliquam tristique, ex tincidunt bibendum pulvinar, urna eros pellentesque felis, id malesuada purus nisl quis lacus. Suspendisse bibendum nibh ut tortor volutpat, non semper purus accumsan. Suspendisse tellus nibh, sodales quis augue nec, lacinia tempus eros.',
        'Proin luctus odio varius ante finibus porttitor. Sed et dolor vel nulla sollicitudin finibus. Maecenas pharetra tempus diam, quis dictum dui lobortis ut. Duis facilisis luctus ligula, et laoreet leo faucibus in. Integer pretium nec lectus at molestie. Nam vel facilisis risus. Sed orci nibh, finibus vitae dictum ac, tristique non felis. Suspendisse ultricies rutrum tincidunt. Etiam eleifend lacus ac volutpat convallis. Nullam lorem est, consequat at mollis sit amet, accumsan quis nunc. In porttitor mollis sapien, sed lacinia ligula varius et. Morbi cursus orci at pharetra elementum. Ut molestie porta ante eget tempus. Aliquam tristique nisl venenatis magna sodales fermentum.'
    ];

    let container_carousel = 'carousel-example-1';
    let text_height = 230;
    let text_max_width = 500;
    let transition_speed = 100;

    let sample_carousel = new SampleCarousel(
        carousel_texts,
        container_carousel,
        text_height,
        text_max_width,
        transition_speed
    );

    sample_carousel.generateHtmlCarousel();

    carousel_texts = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper, ligula quis semper sagittis, felis dui laoreet lectus, nec convallis purus eros sodales leo. Quisque et massa a magna efficitur convallis eget sed ante. Nullam ultricies sit amet est eget venenatis. Quisque placerat elementum nisl in finibus. Quisque vitae nisl egestas, facilisis dolor vitae, consectetur lorem. Etiam vitae ligula tincidunt, iaculis est elementum, eleifend ex. Fusce eget est a purus fringilla tempus id iaculis lorem. Nulla eu augue urna. Aenean urna sapien, pellentesque gravida magna ut, pellentesque efficitur urna. In maximus, erat nec mattis tristique, nibh velit ultricies odio, sit amet hendrerit dolor lacus vel tortor. Sed interdum mi sit amet ante porta, eget malesuada orci facilisis. Maecenas sit amet accumsan lorem. Ut gravida, metus sed condimentum tincidunt, est tortor consequat leo, eget ultrices sem massa a urna. Sed urna lacus, ultrices vitae euismod et, rutrum vel odio.',
        'Aliquam sem dolor, viverra vitae rutrum et, faucibus a odio. Curabitur vehicula feugiat ipsum. Sed ullamcorper, ipsum et dignissim pretium, libero ex rutrum dui, ac interdum odio felis sit amet velit. Duis semper feugiat nunc, et venenatis felis rutrum id. Ut sed libero sodales, condimentum est eget, cursus arcu. Praesent eget ante vel ipsum sodales aliquam. Nullam in urna dignissim, bibendum nisi ac, ultricies sapien. Suspendisse hendrerit, tellus eu vulputate egestas, libero nisl ullamcorper nunc, elementum fermentum lorem leo ac ante. Ut congue dapibus dolor, sed dictum ex ullamcorper eget. Fusce a lorem pulvinar, imperdiet elit non, malesuada velit. Vivamus at sem euismod ex luctus elementum eget eu ante. Mauris enim elit, aliquet eget mattis sed, hendrerit id eros. Integer sit amet blandit enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at tortor sit amet quam accumsan dapibus. Etiam mollis ipsum nisi, in lobortis ex dapibus sit amet.',
        'Pellentesque auctor ipsum id efficitur aliquam. Mauris purus mauris, viverra id lobortis in, faucibus et mauris. Nullam tristique ex vitae rutrum mattis. Nullam tempor pulvinar luctus. Mauris mi erat, vulputate non odio a, scelerisque fermentum quam. Nulla imperdiet tempor mi, vitae facilisis nulla rutrum ac. Sed placerat scelerisque viverra. Mauris commodo tristique congue. In sed ligula eros. Proin dui eros, rutrum vel ante at, faucibus venenatis turpis. Quisque placerat leo et mauris pharetra dignissim. Morbi vitae massa luctus, tempus mauris id, laoreet ipsum. Suspendisse congue nisi a suscipit scelerisque. Vestibulum sed commodo augue, id scelerisque diam. Quisque vitae egestas nulla, vel tristique lorem.',
        'Nam nec pellentesque turpis. Nam non venenatis lectus. Mauris pharetra, velit et posuere tristique, libero nunc dapibus magna, et accumsan ante tortor quis mi. Quisque egestas eros elit, vitae auctor leo venenatis eget. Sed pretium ligula vel erat consequat tincidunt. Aenean vehicula turpis felis, aliquam pretium libero tempor eu. Nulla facilisi. Aenean sodales vel nisl id ultrices. Mauris imperdiet odio eu metus dignissim lobortis. Morbi vehicula ut purus sed lacinia. Aliquam tristique, ex tincidunt bibendum pulvinar, urna eros pellentesque felis, id malesuada purus nisl quis lacus. Suspendisse bibendum nibh ut tortor volutpat, non semper purus accumsan. Suspendisse tellus nibh, sodales quis augue nec, lacinia tempus eros.',
        'Proin luctus odio varius ante finibus porttitor. Sed et dolor vel nulla sollicitudin finibus. Maecenas pharetra tempus diam, quis dictum dui lobortis ut. Duis facilisis luctus ligula, et laoreet leo faucibus in. Integer pretium nec lectus at molestie. Nam vel facilisis risus. Sed orci nibh, finibus vitae dictum ac, tristique non felis. Suspendisse ultricies rutrum tincidunt. Etiam eleifend lacus ac volutpat convallis. Nullam lorem est, consequat at mollis sit amet, accumsan quis nunc. In porttitor mollis sapien, sed lacinia ligula varius et. Morbi cursus orci at pharetra elementum. Ut molestie porta ante eget tempus. Aliquam tristique nisl venenatis magna sodales fermentum.'
    ];

    container_carousel = 'carousel-example-2';
    text_height = 230;
    text_max_width = 500;
    transition_speed = 100;

    sample_carousel = new SampleCarousel(
        carousel_texts,
        container_carousel,
        text_height,
        text_max_width,
        transition_speed
    );

    sample_carousel.generateHtmlCarousel();
})