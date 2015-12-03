$(document).ready(function() {
    var InputfieldFontIconPicker = $(".AvbIconPicker"),
        ContentElement = $('#content');

    if(InputfieldFontIconPicker.length) {
        InputfieldFontIconPicker.each(function() {
            var $this = $(this);
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
        });
    }
    if(ContentElement.length) {
        ContentElement.css(
            'z-index', 2
        );
    }
});