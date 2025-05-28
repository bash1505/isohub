
# Deployment Guide for WordPress Integration

## Step 1: Deploy React App

### Option A: Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy!

### Option B: Deploy to Vercel
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Vercel will auto-detect React settings
5. Deploy!

## Step 2: Set Up Subdomain

### DNS Configuration
1. In your domain provider's DNS settings:
   - Add a CNAME record
   - Name: `app` (or whatever you prefer)
   - Value: Your deployed app URL (e.g., `your-app.netlify.app`)

### Example DNS Record:
```
Type: CNAME
Name: app
Value: your-app-name.netlify.app
TTL: Auto/3600
```

## Step 3: WordPress Integration Code

### Navigation Menu Integration
Add this to your WordPress theme's `functions.php`:

```php
// Add custom menu item for React app
function add_react_app_menu_item($items, $args) {
    if ($args->theme_location == 'primary') {
        $items .= '<li class="menu-item"><a href="https://app.yoursite.com">ISO Hub</a></li>';
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'add_react_app_menu_item', 10, 2);
```

### Custom Widget for Promotion
Add this to `functions.php`:

```php
// Register ISO Hub Widget
class ISO_Hub_Widget extends WP_Widget {
    function __construct() {
        parent::__construct(
            'iso_hub_widget',
            'ISO Hub Access',
            array('description' => 'Quick access to ISO Hub features')
        );
    }

    public function widget($args, $instance) {
        echo $args['before_widget'];
        echo '<div class="iso-hub-widget">';
        echo '<h3>ISO Management Hub</h3>';
        echo '<ul>';
        echo '<li><a href="https://app.yoursite.com/store" target="_blank">Document Store</a></li>';
        echo '<li><a href="https://app.yoursite.com/portal" target="_blank">Client Portal</a></li>';
        echo '<li><a href="https://app.yoursite.com/consultation" target="_blank">Book Consultation</a></li>';
        echo '<li><a href="https://app.yoursite.com/knowledge" target="_blank">Knowledge Center</a></li>';
        echo '</ul>';
        echo '</div>';
        echo $args['after_widget'];
    }
}

function register_iso_hub_widget() {
    register_widget('ISO_Hub_Widget');
}
add_action('widgets_init', 'register_iso_hub_widget');
```

### Shortcode for Embedding
Add this to `functions.php`:

```php
// Shortcode for embedding specific sections
function iso_hub_shortcode($atts) {
    $atts = shortcode_atts(array(
        'page' => 'store',
        'height' => '600px'
    ), $atts);
    
    $url = 'https://app.yoursite.com/' . $atts['page'];
    
    return '<iframe src="' . esc_url($url) . '" width="100%" height="' . esc_attr($atts['height']) . '" frameborder="0" style="border: none; border-radius: 8px;"></iframe>';
}
add_shortcode('iso_hub', 'iso_hub_shortcode');
```

### CSS for Seamless Integration
Add this to your theme's CSS:

```css
/* ISO Hub Integration Styles */
.iso-hub-widget ul {
    list-style: none;
    padding: 0;
}

.iso-hub-widget li {
    margin-bottom: 8px;
}

.iso-hub-widget a {
    display: block;
    padding: 8px 12px;
    background: #f0f9ff;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s;
}

.iso-hub-widget a:hover {
    background: #e0f2fe;
}

/* Responsive iframe */
.iso-hub-embed {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 75%; /* Adjust as needed */
}

.iso-hub-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

## Usage Examples:

### In WordPress Posts/Pages:
```
[iso_hub page="store" height="800px"]
[iso_hub page="portal"]
[iso_hub page="consultation"]
```

### Direct Links in Content:
```html
<a href="https://app.yoursite.com/store" target="_blank" class="button">Visit Document Store</a>
```

## Security Considerations:
1. Use HTTPS for both sites
2. Configure CORS if needed
3. Set up proper authentication flow
4. Consider single sign-on (SSO) for seamless experience
