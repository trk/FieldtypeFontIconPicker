<?php
function InputfieldFontIconPickerUikit() {
    $icons = array(
        'title' => 'Uikit',
        'version' => '3.0.34',
        'css' => '',
        'categorised' => true,
        'attributes' => array(
            'convert-to-hex' => false,
            'use-attribute' => true,
            'attribute-name' => 'data-uk-icon',
            'prefix' => 'icon: '
        ),
        'icons' => array(
            'app-icons' => array(
                'title' => __("App Icons"),
                'icons' => array(
                    "home",
                    "sign-in",
                    "sign-out",
                    "user",
                    "users",
                    "lock",
                    "unlock",
                    "settings",
                    "cog",
                    "nut",
                    "comment",
                    "commenting",
                    "comments",
                    "hashtag",
                    "tag",
                    "cart",
                    "credit-card",
                    "mail",
                    "receiver",
                    "search",
                    "location",
                    "bookmark",
                    "code",
                    "paint-bucket",
                    "camera",
                    "bell",
                    "bolt",
                    "star",
                    "heart",
                    "happy",
                    "lifesaver",
                    "rss",
                    "social",
                    "git-branch",
                    "git-fork",
                    "world",
                    "calendar",
                    "clock",
                    "history",
                    "future",
                    "pencil",
                    "trash",
                    "move",
                    "link",
                    "question",
                    "info",
                    "warning",
                    "image",
                    "list",
                    "thumbnails",
                    "table",
                    "menu",
                    "grid",
                    "more",
                    "more-vertical",
                    "plus",
                    "plus-circle",
                    "minus",
                    "minus-circle",
                    "close",
                    "check",
                    "ban",
                    "refresh",
                    "play",
                    "play-circle"
                )
            ),
            'device-icons' => array(
                'title' => __("Device Icons"),
                'icons' => array(
                    "tv",
                    "desktop",
                    "laptop",
                    "tablet",
                    "phone",
                    "tablet-landscape",
                    "phone-landscape"
                )
            ),
            'storage-icons' => array(
                'title' => __("Storage Icons"),
                'icons' => array(
                    "file",
                    "copy",
                    "file-edit",
                    "folder",
                    "album",
                    "push",
                    "pull",
                    "server",
                    "database",
                    "cloud-upload",
                    "cloud-download",
                    "download",
                    "upload"
                )
            ),
            'direction-icons' => array(
                'title' => __("Direction Icons"),
                'icons' => array(
                    "reply",
                    "forward",
                    "expand",
                    "shrink",
                    "arrow-up",
                    "arrow-down",
                    "arrow-left",
                    "arrow-right",
                    "chevron-up",
                    "chevron-down",
                    "chevron-left",
                    "chevron-right",
                    "triangle-up",
                    "triangle-down",
                    "triangle-left",
                    "triangle-right"
                )
            ),
            'editor-icons' => array(
                'title' => __("Editor Icons"),
                'icons' => array(
                    "bold",
                    "italic",
                    "strikethrough",
                    "video-camera",
                    "quote-right"
                )
            ),
            'brand-icons' => array(
                'title' => __("Brand Icons"),
                'icons' => array(
                    "500px",
                    "behance",
                    "dribbble",
                    "facebook",
                    "github-alt",
                    "github",
                    "foursquare",
                    "tumblr",
                    "whatsapp",
                    "soundcloud",
                    "flickr",
                    "google-plus",
                    "google",
                    "linkedin",
                    "vimeo",
                    "instagram",
                    "joomla",
                    "pagekit",
                    "pinterest",
                    "tripadvisor",
                    "twitter",
                    "uikit",
                    "wordpress",
                    "xing",
                    "yelp",
                    "youtube"
                )
            )
        )
    );

    return $icons;
}