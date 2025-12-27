import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    return {
      // O SEGREDO DO SUCESSO: Define o caminho base para o seu repositório no GitHub
      base: '/sitepindorama/', 

      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Mantendo suas definições de variáveis para o Gemini
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Garante que o atalho '@' aponte para a raiz corretamente
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
