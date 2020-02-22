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
            var useAttribute = $this.attr('use-attribute'),
                attributeName = $this.attr('attribute-name');

            var options = {
                theme: $this.attr('theme'),
                emptyIcon: $this.attr('empty-icon'),
                emptyIconValue: $this.attr('empty-icon-value'),
                iconsPerPage: $this.attr('icons-per-page'),
                hasSearch: $this.attr('has-search'),
                convertToHex : $this.attr('convert-to-hex'),
                allCategoryText : $this.attr('all-category-text'),
                unCategorizedText : $this.attr('un-categorized-text')
            };

            if(useAttribute && useAttribute !== "false" && attributeName) {
                options.iconGenerator = function( icon ) {
                    return '<span ' + attributeName + '="' + icon + '"></span>';
                };
            }

            $this.fontIconPicker(options);
            
            // Remove position: relative style from icons-selector class
            $this.parent().children(".icons-selector").css("position", "");

            if($this.parents('.InputfieldContent').length) {
                $this.parents('.InputfieldContent').css(
                    'z-index', 2
                );
            }
            $this.addClass(AvbFontIconPickerLoadedClass);
        }
    });
}