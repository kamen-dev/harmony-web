import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
    base: "/harmony-web/",
    plugins: [
        handlebars({
            context: {
                "xs-max": 623,
                "sm-min": 624
            },
            partialDirectory: resolve(__dirname, 'src/partials'),
        }),
        ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 75 },
        webp: { quality: 80 },
        avif: { quality: 70 },
        // svg: {
        //   plugins: [
        //     { name: 'removeViewBox', active: false },
        //     { name: 'sortAttrs' },
        //   ],
        // },
        }),
    ],
};
