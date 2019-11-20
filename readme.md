# FieldtypeFontIconPicker

> This field-type allow to you easily pick icons from input-field. This module using [jQuery fontIconPicker](https://github.com/fontIconPicker/fontIconPicker) as icon selector. You can see supported icon libraries below. If you need to use custom fonts you can check below example. 

### Supported Icon Libraries
- [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0/icons/)
- [Uikit 3.0.0](https://getuikit.com/docs/icon#library)
- [IonicIcons 2.0.1](http://ionicons.com/)

### [Cahangelog](https://github.com/trk/FieldtypeFontIconPicker/blob/master/CHANGELOG.md)

**NOTE:** Module store data without prefix, you need to add **"prefix"** when you want to show your icon on front-end, because some of front-end frameworks using font-awesome with different **"prefix"**.

**Example :**
```php
if($my-icon-field) echo "<i class='my-prefix-{$my-icon-field}' />";
```

**Hook Before Render Example**
This example using **/site/templates/admin.php** file for hook
```php
wire()->addHook('InputfieldFontIconPicker::beforeRender', function($event) {
    if(!$event->return) return;

    // Get Input Name (For specified input hook, if you want apply all InputfieldFontIconPicker remove inputName check)
    $inputName = "";
    if(isset($event->object->attributes['name'])) $inputName = $event->object->attributes['name'];

    // Get Input Name (For specified input hook, if you want apply all InputfieldFontIconPicker remove inputName check)
    if($inputName == 'icon_picker') {

        /**
        * Load your custom icons function file
        * Your array need to be same format with Icons/FontAwesome.php or Icons/Ionicons.php
        * Also you can pass directly an array
        */
        wireIncludeFile('MyCustomIconFile');

        // Set icons as $icons variable
        $icons = MyCustomIconsArray();

        // Set your options
        $return = array(
            'attributes' => array(
                'category' => '',
                'theme' => 'fip-grey',
                'empty-icon' => 1,
                'empty-icon-value' => '',
                'icons-per-page' => 20,
                'has-search' => 1
            ),
            'icons' => $icons
        );

        // Return the event
        $event->return = $return;
    }

    $event->return;
});
```

### MarkupFontIconPicker Usage
```php
// MarkupFontIconPicker::render(YourIconField=string, Options=array)
echo MarkupFontIconPicker::render($page->YourIconField, [
        'prefix' => 'uk-icon-', // Icon class prefix, if you have different prefix, default is : "fa fa-"
        'tag' => 'span', // Icon tag default is : "i"
        'class' => 'fa-lg', // If you have extra cutom classes, for example : icons sizes, Array or Sting value
        'style' => 'your custom styles if you have' // Array or String Value
    ]);
```

### Screenshots - InputfieldFontIconPicker input settings

> InputfieldFontIconPicker Setting "Icon library select"

![InputfieldFontIconPicker Field Settings Category Select](https://raw.githubusercontent.com/trk/FieldtypeFontIconPicker/master/screenshots/library-select.png)

> InputfieldFontIconPicker Setting "Category Select"

![InputfieldFontIconPicker Field Settings Category Select](https://raw.githubusercontent.com/trk/FieldtypeFontIconPicker/master/screenshots/category-select.png)

> InputfieldFontIconPicker Setting "Theme Select"

![InputfieldFontIconPicker Field Settings Theme Select](https://raw.githubusercontent.com/trk/FieldtypeFontIconPicker/master/screenshots/theme-select.png)

### Screenshots - InputfieldFontIconPicker page edit views

> InputfieldFontIconPicker Search

![InputfieldFontIconPicker](https://raw.githubusercontent.com/trk/FieldtypeFontIconPicker/master/screenshots/search.png)

> InputfieldFontIconPicker Categories

![InputfieldFontIconPicker](https://raw.githubusercontent.com/trk/FieldtypeFontIconPicker/master/screenshots/categories.png)