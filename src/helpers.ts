export function kebabToTitleCase(str: string) {
// 'my-kebab-case' -> 'My Kebab Case'
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}