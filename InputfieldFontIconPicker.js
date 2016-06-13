$(document).ready(function() {
    var PwContentElement = $('#content');

    AvbFontIconPickerInit();

    // $(document).on('repeateradd', '.InputfieldRepeaterMatrix .InputfieldRepeaterMatrixAddLink', AvbFontIconPickerInsideRepeaterInit);
    $(document).on('opened', '.InputfieldRepeaterItem', AvbFontIconPickerInsideRepeaterInit);
    // $(document).on('openReady', '.InputfieldRepeaterItem', AvbFontIconPickerInsideRepeaterInit);

    if(PwContentElement.length) {
        PwContentElement.css(
            'z-index', 2
        );
    }
});

function AvbFontIconPickerInsideRepeaterInit() {
    var $item = $(this);
    var $loaded = $item.find(".InputfieldRepeaterLoaded");
    if(parseInt($loaded.val()) > 0) {
        AvbFontIconPickerInit();
    } else {
        setTimeout(function() {
            AvbFontIconPickerInit();
        }, 1000);
    }
}

function AvbFontIconPickerInit() {

    var AvbFontIconPicker = $(".AvbIconPicker"),
        AvbFontIconPickerLoadedClass = 'AvbIconPickerLoaded';

    AvbFontIconPicker.each(function() {
        var $this = $(this);
        if(!$this.hasClass(AvbFontIconPickerLoadedClass)) {
            $this.fontIconPicker({
                theme: $this.attr('theme'),
                emptyIcon: $this.attr('empty-icon'),
                emptyIconValue: $this.attr('empty-icon-value'),
                iconsPerPage: $this.attr('icons-per-page'),
                hasSearch: $this.attr('has-search')
            });
            if($this.parents('.InputfieldContent').length) {
                $this.parents('.InputfieldContent').css(
                    'z-index', 2
                );
            }
            $this.addClass(AvbFontIconPickerLoadedClass);
        }
    });
}