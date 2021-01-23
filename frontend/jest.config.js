module.exports = {
   roots: ["<rootDir>/src"],
   transform: {
       '^.+\\.tsx?$': 'ts-jest',
   },
   setupFilesAfterEnv: [
       '@testing-library/react/cleanup-after-each',
       '@testing-library/jest-dom/extend-expect',
   ],
   textRegex: '(/__tests__/.*|(\\.|/)(test|spec)_\\.tsx',
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
   snapshotSerializers: ['enzyme-to-json/serializer']
}