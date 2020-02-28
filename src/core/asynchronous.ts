import { IHttp } from './http'

export default class ApiRequest {

  constructor(private requester: IHttp) { }

  public async getTodoList(): Promise<Array<any>> {
    const url = 'https://jsonplaceholder.typicode.com/todos'
  
    return await this.requester.get(url)
  }
  
  public async getCampaignList(company: number, token: string): Promise<Array<any>> {
    const url = `http://10.157.0.20:8001/campaigns?company=${company}`
    const headers = {
      'Accept-Language': 'en',
      'Authorization': token,
      'App-Name': 'app',
      'Device-Id': '17dc7c845d6e6-1a230d2116795-31680a792efa4',
      'Tz-Offset': '180'
    }
  
    return await this.requester.get(url, headers)
  }
  
  public async getCourseList(company: number, token: string): Promise<Array<any>> {
    const url = `http://10.157.0.20:8001/campaigns?company=${company}`
    const headers = {
      'Accept-Language': 'en',
      'Authorization': token,
      'App-Name': 'app',
      'Device-Id': '17dc7c845d6e6-1a230d2116795-31680a792efa4',
      'Tz-Offset': '180'
    }
  
    return await this.requester.get(url, headers)
  }
}
