export interface Controller {
  execute(body: any): Promise<any>
}