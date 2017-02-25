declare module '*.html' {
  const content: string;
  export default content;
}

// Declare 'require' function to fix errors with
// angular2-template-loader + ts-loader
declare function require(path: string): string;
