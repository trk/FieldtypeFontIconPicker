// Altivebir
var Altivebir = Altivebir || {};

// Altivebir.ScriptLoader
Altivebir.ScriptLoader = Altivebir.ScriptLoader || {};

// Altivebir.ScriptLoader
Altivebir.ScriptLoader = {
    Items: {},
    Add: function (name, value) {
        if (name !== "undefined" && name !== undefined && value !== "undefined" && value !== undefined) {
            this.Items[name] = value;
        }
    },
    Remove: function (name) {
        if (name !== "undefined" && name !== undefined && this.Items[name] !== "undefined" && this.Items[name] !== undefined) {
            delete this.Items[name];
        }
    },
    Render: function () {
        if (this.Items.length) {
            for (var name in this.Items) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.Items[name];
                $("head").append(script);
            }
        }
    }
};

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

    // Altivebir.ScriptLoader
    Altivebir.ScriptLoader.Render();
});