if (typeof jQuery == 'undefined') {
    const jquery_cdn_urls = [
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-d/jquery/3.6.0/jquery.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js',
        'https://code.jquery.com/jquery-3.6.0.min.js'
    ];

    function load_jquery() {
        let i = 0;

        function try_load() {
            if (i < jquery_cdn_urls.length) {
                const script = document.createElement('script');
                script.src = jquery_cdn_urls[i];
                script.type = 'text/javascript';
                script.onload = function () {
                    console.log('Loaded ' + jquery_cdn_urls[i]);
                };
                script.onerror = function () {
                    console.log('Failed to load ' + jquery_cdn_urls[i]);
                    i++;
                    try_load();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
                i++;
            } else {
                console.log('All jQuery CDNs failed to load');
            }
        }

        try_load();
    }

    load_jquery();

} else {
    $(document).ready(function () {
        // 在这里添加你的代码
        var adContainer = document.createElement('div');
        adContainer.style.position = 'fixed';
        adContainer.style.bottom = '0';
        adContainer.style.right = '0'
        adContainer.style.width = '20%';
        adContainer.style.backgroundColor = '#f1f1f1';
        adContainer.style.borderTop = '1px solid #ccc';
        document.body.appendChild(adContainer);


        let zsurl = 'https://xx025.github.io/static/wxzs/wxds.png'
        let zspages_url = 'https://xx025.github.io/pages/zs/'
        var adLink = document.createElement('a');
        adLink.href = zspages_url;
        adLink.target = '_blank';
        adContainer.appendChild(adLink);

        var adImage = document.createElement('img');
        adImage.src = zsurl;
        adImage.alt = 'Advertisement';
        adImage.style.width = '100%';
        adLink.appendChild(adImage);

        var collapseButton = document.createElement('button');
        collapseButton.innerText = '-';
        collapseButton.style.position = 'absolute';
        collapseButton.style.top = '0';
        collapseButton.style.left = '0';
        adContainer.appendChild(collapseButton);

        var isCollapsed = false;

        collapseButton.addEventListener('click', function () {
            isCollapsed = !isCollapsed;
            if (isCollapsed) {
                adContainer.style.height = '40px'; // 折叠起来，高度为 40px
                collapseButton.innerText = '+';
            } else {
                adContainer.style.height = 'auto'; // 展开，高度为页面高度的 20%
                collapseButton.innerText = '-';
            }
        });


    });

}



