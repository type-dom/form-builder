export interface IFormData {
  table: Record<string, string>[],
  [propName: string]: string | Record<string, string>[],
}
