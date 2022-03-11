/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { ConfigPagesPlugin } from './pages';


export function createVitePlugins(isBuild: boolean) {
    const vitePlugins: (Plugin | Plugin[])[] = [
        // vue支持
        vue(),
        // JSX支持
        vueJsx(),
        // 自动生成路由
        ConfigPagesPlugin(),
    ];

    return vitePlugins;
}
