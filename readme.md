[SampleCarousel](#) it's my first "plugin" (you could call it whatever you want) made in "pure" Javascript.

My motivation was to study some javascript animations, CSS, and the utilization of classes and methods.




## How to use it on my project? ##

It's really simple:

- Download the following files:
*carousel_sample.js* and *carousel_sample.css*
- Import them to your main HTML file;

After you've downloaded the necessary files and imported them to your main html file, you can instantiate a new sampleCarousel by doing the following steps:

    let sample_carousel = new SampleCarousel(
        carousel_texts,
        carousel_container,
        text_height,
        text_max_width,
        transition_speed
    );

Where:
- *carousel_texts* is an array variable which will containts the texts to be displayed in carousel.
- *carousel_container* is an div ID which must exists in your HTML file (this variable indicates where the carousel 'll be injected).
- *text_height* this variable indicates the heigh of the texts inside the carousel.
- *text_max_width* this variable indicates the maximum width of the texts inside the carousel.
- *transition_speed* indicates the transition speed in *milliseconds* between the texts inside the carousel.
- *auto_transition* an object with 'move_delay' and 'direction' properties, it'll indicate how much seconds the carousel will automatically trigger a move, and which direction provided.

## How can i apply my own styles on it?

You can edit the file carousel_sample.css and customize it whatever you want ;)

## Is there a limit of carousels that i want to create? ##
No, you just need to instantiate another instance of sampleCarousel, and that's it!

## How can i contribute? ##
Mail me on lucas-sm2010@hotmail.com or send me a message on this phone: +5561995754313, i'm always open to learnd and accept new sugestions!
