module.exports = {
  preset: 'ts-jest', // Usar ts-jest para suportar TypeScript
  testEnvironment: 'jsdom', // Usado para testes no ambiente do navegador (como no React)
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Referência ao seu tsconfig.json
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transformação de arquivos .ts e .tsx
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Arquivo de setup (se necessário)
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensões de arquivo a serem consideradas
  testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignorar esses diretórios nos testes
};
