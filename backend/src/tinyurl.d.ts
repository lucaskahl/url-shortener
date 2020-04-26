declare module 'tinyurl' {
  export function shorten(url: string): Promise<string>;
  export function resolve(url: string): Promise<string>;
}
