$(document).ready(function() {
    var PwContentElement = $('#content');

    AvbFontIconPickerInit();

    $(document)
        // .on('openReady', '.InputfieldRepeaterItem', AvbFontIconPickerInit);
        .on('reloaded', '.InputfieldRepeater', AvbFontIconPickerInit)
        .on('opened', '.InputfieldRepeaterItem', AvbFontIconPickerInit);

    if(PwContentElement.length) {
        PwContentElement.css(
            'z-index', 2
        );
    }
});

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