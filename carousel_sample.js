/**
 * 
 * @param _text_list An array of arrays, containing the text to display in carroussel in the index 0, and the subtext and index 1
 * @param _html_div_id An already ID of an existing div in the current HTML document
 * @param _text_height Height in pixels of the text elements
 * @param _max_text_width Max width in pixels of the text elements
 * @param _speed_animation Speed in miliseconds of the transition between the text elements
 * @param _auto_transition An object with the delay in seconds to auto transition between text elements and the direction of the transition
 */
 class SampleCarousel {

    li_items = []; 
    btn_itens = [];
    text_list = [];
    html_div_id = "";
    generated_html = "";
    error_msg = "";
    speed_animation = 200;
    text_height = 230;
    max_text_width = 500;
    auto_transition = {
        'move_delay': 0,
        'direction' : ''
    };
    curr_visible = 0;

    constructor(
        _text_list, 
        _html_div_id, 
        _text_height, 
        _max_text_width, 
        _speed_animation, 
        _auto_transition
    ){
        this.text_list = _text_list;
        this.html_div_id = _html_div_id;
        this.text_height = _text_height ? _text_height : 100;
        this.max_text_width = _max_text_width ? _max_text_width : 500;
        this.speed_animation = _speed_animation ? _speed_animation : 200;
        this.auto_transition = _auto_transition;

        if (_text_list.length == 0){
            this.error_msg = "Need to provide at least one text to carousel!";
            this.outputError();
            return;
        }

        if (!this.html_div_id){
            this.error_msg = "Need to provide a valid div id";
            this.outputError();
            return;
        }

        this.createSizeClass();
    }

    injectCarouselInsideDiv() {
        let container_to_add_carousel = document.getElementById(this.html_div_id);
        container_to_add_carousel.append(this.generated_html);
  
        if (this.auto_transition){
            this.automaticCarousel();
        }
    }

    automaticCarousel() {
        setInterval(()=>{
            if (!this.auto_transition.direction){
                if (Math.random() > 0.5) {
                    this.moveToRight();
                } else {
                    this.moveToLeft();
                }
            }

            if (this.auto_transition.direction){
                if (this.auto_transition.direction == 'left'){
                    this.moveToLeft();
                } else {
                    this.moveToRight();
                }
            }

        }, this.auto_transition.move_delay * 1000)
    }

    moveToRight() {
        let visible_item_id;
        let visible_item; 
        let first_item = this.li_items.find(item => parseInt(item.dataset.position_id) == 0);

        this.li_items.forEach(item => {
            if (item.dataset.visible == 'true'){
                visible_item = item;
                visible_item_id = item.dataset.position_id;
            }
        });

        let next_item;
        this.li_items.forEach(item => { 
            // If it's last item on the list
            if (item.dataset.visible == 'true' && item.dataset.position_id == parseInt(this.li_items.length) - 1){
                next_item = first_item;
                next_item.dataset.visible = 'true';
            }

            if (item.dataset.position_id == parseInt(visible_item_id) + 1){
                next_item = item;
                next_item.dataset.visible = 'true';
            }           
        });

        visible_item.dataset.visible = false;
        next_item.dataset.visible = true;

        visible_item.animate([
            {transform: 'translateX(0%)'},
            {transform: 'translateX(-100%)'}
        ], {
            duration: this.speed_animation,
            fill: 'forwards'
        })

        setTimeout(()=>{
            visible_item.classList.add('hide-item-list');
        }, this.speed_animation)

        setTimeout(()=>{
            next_item.animate([
                {transform: 'translateX(100%)'},
                {transform: 'translateX(0%)'}
            ], {
                duration: this.speed_animation,
                fill: 'forwards'
            })
            next_item.classList.remove('hide-item-list');
        }, this.speed_animation)

        this.curr_visible = next_item.dataset.position_id;
        this.updateSelectedBtnState();
        console.log("Moving text to right!");
    }

    moveToLeft() {
        let visible_item_id;
        let visible_item; 
        let last_item = this.li_items.find(item => parseInt(item.dataset.position_id) == parseInt(this.li_items.length) - 1);

        // Check visible item
        this.li_items.forEach(item => {
            if (item.dataset.visible == 'true'){
                visible_item = item;
                visible_item_id = item.dataset.position_id;
            }
        });

        let next_item;
        this.li_items.forEach(item => {
            // If it's first item on the list
            if (item.dataset.visible == 'true' && item.dataset.position_id == 0){
                next_item = last_item;
                next_item.dataset.visible = 'true';
            }

            if (item.dataset.position_id == parseInt(visible_item_id) - 1){
                next_item = item;
                next_item.dataset.visible = 'true';
            }           
        });

        visible_item.dataset.visible = false;
        next_item.dataset.visible = true;

        visible_item.animate([
            {transform: 'translateX(0%)'},
            {transform: 'translateX(100%)'}
        ], {
            duration: this.speed_animation,
            fill: 'forwards'
        })
        
        setTimeout(()=>{
            visible_item.classList.add('hide-item-list');
        }, this.speed_animation)

        setTimeout(()=>{
            next_item.animate([
                {transform: 'translateX(-100%)'},
                {transform: 'translateX(0%)'}
            ], {
                duration: this.speed_animation,
                fill: 'forwards'
            })
            next_item.classList.remove('hide-item-list');
        }, this.speed_animation)


        this.curr_visible = next_item.dataset.position_id;
        this.updateSelectedBtnState();
        console.log("Moving text to left!");
    }

    updateSelectedBtnState(){
        this.btn_itens.forEach(btn => {
            if (btn.dataset.position_btn_id == this.curr_visible){
                btn.classList.add('selected_item_carousel');
            } else {
                btn.classList.remove('selected_item_carousel');
            }
        })
    }

    btnMoveText(event) {
        let clicked_id_btn = event.target.dataset.position_btn_id;
        let backp_speed = this.speed_animation;
        this.speed_animation = 50;

        const moveUntilFulfill = () => {
            setTimeout(() => {
                if (this.curr_visible != clicked_id_btn){                    
                    if (clicked_id_btn < this.curr_visible){
                        this.moveToLeft();
                    } else {
                        this.moveToRight();
                    }
                } else {
                    this.speed_animation = backp_speed;
                    return;
                }

                console.log("Is this running?")
                moveUntilFulfill();
            }, 50)
        }

        moveUntilFulfill();
            
    }

    createSizeClass() {
        let classes_array = [];

        let carousel_text_item = document.createElement('style');
        carousel_text_item.id = "carousel-text-item";
        carousel_text_item.innerHTML = `
        .carousel-text-item {
            text-align: center;
            height: ${this.text_height}px;
            max-width: ${this.max_text_width}px;
            display: flex;
            align-items: center;
        }
        `;

        classes_array.push(carousel_text_item);

        let header = document.getElementsByTagName('HEAD')[0];
        classes_array.forEach(_class => {
            header.append(_class);
        })


    }

    generateHtmlCarousel(){     
        let carousel_div = document.createElement('div');
        carousel_div.classList.add('lsm-carousel');
        carousel_div.id = "lsm-carousel";

        let carousel_container = document.createElement('div');
        carousel_container.classList.add('carousel-container');

        let left_arrow = document.createElement('img');
        left_arrow.classList.add('left-arrow');
        left_arrow.classList.add('arrow');
        left_arrow.src = "/public/svg_left_arrow.svg"

        left_arrow.addEventListener('click', event => {
            this.moveToLeft();
        });
        carousel_container.append(left_arrow);

        let carousel_body_wrapper = document.createElement('div');
        carousel_body_wrapper.classList.add('carousel-body-wrapper');

        let carousel_text_container = document.createElement('div');
        carousel_text_container.classList.add('carousel-text-container');

        carousel_container.append(carousel_body_wrapper);

        carousel_body_wrapper.append(carousel_text_container);

        let carousel_buttons = document.createElement('div');
        carousel_buttons.classList.add('carousel-buttons');        

        let carousel_text_list = document.createElement('ul');
        carousel_text_list.classList.add('carousel-text-list');

        carousel_body_wrapper.append(carousel_buttons);

        // Generate a li for each text in array provided
        this.text_list.forEach((text, index) => {
            let carousel_text_item = document.createElement('li');
            carousel_text_item.classList.add('carousel-text-item');
            carousel_text_item.dataset.position_id = index;
            carousel_text_item.innerText = text[0];

            let carousel_text_subtext = document.createElement('span');
            carousel_text_subtext.classList.add('carousel-text-subtext');
            carousel_text_subtext.innerText = text[1];            

            carousel_text_item.append(carousel_text_subtext);
            
            if (index != 0) carousel_text_item.classList.add('hide-item-list');
            if (index == 0) carousel_text_item.dataset.visible = true;
            this.li_items.push(carousel_text_item);
            
            carousel_text_list.append(carousel_text_item);

            let carousel_btn = document.createElement('span');
            carousel_btn.classList.add('grey_circle');
            carousel_btn.dataset.position_btn_id = index;
            carousel_btn.addEventListener('click', event => {
                this.btnMoveText(event);
            });

            carousel_buttons.append(carousel_btn);
            this.btn_itens.push(carousel_btn);
        })

        carousel_text_container.append(carousel_text_list);

        let right_arrow = document.createElement('img');
        right_arrow.classList.add('right-arrow');
        right_arrow.classList.add('arrow');
        right_arrow.src = "/public/svg_right_arrow.svg"

        right_arrow.addEventListener('click', event => {
            this.moveToRight();
        });
        
        carousel_container.append(right_arrow);

        carousel_div.append(carousel_container);

        this.generated_html = carousel_div;
        this.injectCarouselInsideDiv();
        this.updateSelectedBtnState();
    }

    outputError(){
        throw new Error(this.error_msg);
    }

}