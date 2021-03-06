import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    server: {
        proxy: {
            '/admin': {
                target: "http://localhost:8080",
                changeOrigin: true,
            },
            '/oauth': {
                target: "http://localhost:8080",
                changeOrigin: true,
            },
        }
    }
})
