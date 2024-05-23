<?php
/**
 * Plugin Name: Carroussel
 * Author: Lohan Moutquin
 * Description: une premiere extension pour comprendre
 * Version: 1.0.0
 * Plugin URI: https://github.com/LohanMout
 * Author URI: https://reference.ca
 */
function enqueue_style_script(){
    $version_css = filemtime(plugin_dir_path(__FILE__) . "carroussel.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carroussel.js");

    wp_enqueue_style('em_plugin_carroussel_css',
    plugin_dir_url(__FILE__) . 'carroussel.css',
    array(),
    $version_css);

    wp_enqueue_script('em_plugin_carroussel_js',
    plugin_dir_url(__FILE__) . 'js/carroussel.js',
    array(),
    $version_js,
    true);
}

add_action('wp_enqueue_scripts','enqueue_style_script');

function genereHTML(){
?>

<?php

    $html = '
    <button class="btn__ouvrir">Ouvrir Carroussel</button>
    <div class="carroussel">
        <a href="" class="carroussel__x">X</a>
        <figure class="carroussel__figure"></figure>
        <form action="" class="carroussel__form"></form>
    </div>
    ';
    return $html;
}

add_shortcode('carroussel', 'genereHTML');
?>