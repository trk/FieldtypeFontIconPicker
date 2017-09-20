# FieldtypeFontIconPicker

> Module allow you to use Fotn-Awesome (4.7.0) icons easily. You can select icons directly from icon select list, also you can set settings for each InputfieldFontIconPicker.

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

### Module Using

* [Font-Awesome v4.7.0](http://fontawesome.io)
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

### Change Logs

**v.0.1.7**

- Ionicons css file link updated

**v.0.1.6**

- Fix FieldtypeFontIconPicker sanitizeValue()

**v.0.1.5**

- Added uikit icon select support (required AdminThemeUikit), because uikit icons not working standalone. 

**v.0.1.4**

- Fix issue FontIconPicker inside repeater item

**v.0.1.3**

- FontAwesome updated to 4.7.0

**v.0.1.2**

- Little Corrections
- Some works about icon picker inside repeater via ajax load

**v.0.1.1**

- FontAwesome updated to 4.6.3

**v.0.1.0**

- Added custom css url support

**v.0.0.9**

- Added hook method ___beforeRender(), you can check hook example for usage
- Added multiple icons library use option
- Added Ionicons Library
- Now module using cdn for load icon fonts

**v.0.0.8**

- FontAwesome 4.5 update, Improvements and Performance updates
- **Important !** **After update module check your input settings, because i changed input attribute names (This will only effect input options, like theme, category).** Changed loading icon method from input:hidden to select>optgroup>option, added module js file for load and correct icon picker container many changes….

**v.0.0.7**

- FontAwesome updated to 4.4.0

**v.0.0.6**

- Missed... array compatibility for usage, from [$foo, $bar] to array($foo, $bar)

**v.0.0.5**

- Fix for oldest pw versions (Assets file loding scripts moved to inputfieldfonticonpicker module)

**v.0.0.4**

- Array compatibility for usage, from [$foo, $bar] to array($foo, $bar)

**v.0.0.3**

- Small z-index problem solved

**v.0.0.2**

- MarkupFontIconPicker added

**v.0.0.1**

- Start Point
