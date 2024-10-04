import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		mkcert({
			port: 3000, // Adjust the port as needed
			domains: ['localhost', 'your-app.test'], // Replace 'your-app.test' with your desired domain
		}),
	],
});

