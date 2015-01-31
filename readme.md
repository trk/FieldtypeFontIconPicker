# FieldtypeFontIconPicker

> Module allow you to use Fotn-Awesome icons easily. You can select icons directly from icon select list, also you can set settings for each InputfieldFontIconPicker.

**NOTE:** Module store data without prefix, you need to add **"prefix"** when you want to show your icon on front-end, because some of front-end frameworks using font-awesome with different **"prefix"**.

**Example :**
```
if($my-icon-field) echo "<i class='my-prefix-{$my-icon-field}' />";
```

### MarkupFontIconPicker Usage
```
// MarkupFontIconPicker::render(YourIconField=string, Options=array)
echo MarkupFontIconPicker::render($page->YourIconField, [
        'prefix' => 'uk-icon-', // Icon class prefix, if you have different prefix, default is : "fa fa-"
        'tag' => 'span', // Icon tag default is : "i"
        'class' => 'fa-lg', // If you have extra cutom classes, for example : icons sizes, Array or Sting value
        'style' => 'your custom styles if you have' // Array or String Value
    ]);
```

### Module Using

* [Font-Awesome v4.3](http://fontawesome.io)
* [jQuery fontIconPicker v2.0.0](http://codeb.it/fonticonpicker)

### Screenshots - InputfieldFontIconPicker input settings

> InputfieldFontIconPicker Setting "Category Select"

![InputfieldFontIconPicker Field Settings Category Select](http://i59.tinypic.com/65mw6e.jpg)

> InputfieldFontIconPicker Setting "Theme Select"

![InputfieldFontIconPicker Field Settings Theme Select](http://i60.tinypic.com/2nksx94.jpg)

### Screenshots - InputfieldFontIconPicker page edit views

> InputfieldFontIconPicker Search

![InputfieldFontIconPicker](http://i59.tinypic.com/1zdpsnk.jpg)

> InputfieldFontIconPicker Categories

![InputfieldFontIconPicker](http://i61.tinypic.com/66zuyw.jpg)