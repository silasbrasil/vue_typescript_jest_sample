/**
 * @Interfaces
 */
export interface ApiHeaders {
  readonly 'Accept-Language': string;
  readonly 'App-Name': string;
  readonly 'Device-Id': string;
  readonly 'Tz-Offset': string;
  [propName: string]: string;
}

export interface IHttp {
  get(url: string, headers?: ApiHeaders): Promise<any>;
  post(url: string, body?: any, headers?: ApiHeaders): Promise<any>;
  put(url: string, body?: any, headers?: ApiHeaders): Promise<any>;
  patch(url: string, body?: any, headers?: ApiHeaders): Promise<any>;
  delete(url: string, headers?: ApiHeaders): Promise<any>;
}

/**
 * @implements
 */
export class Http implements IHttp {
  public async get(url: string, headers?: ApiHeaders): Promise<any> {
    const resp = await fetch(url, { method: 'get', headers })
    const json = await resp.json()

    return json
  }

  public async post(url: string, body?: any, headers?: ApiHeaders): Promise<any> {
    const resp = await fetch(url, { method: 'post', body, headers })
    const json = await resp.json()

    return json
  }

  public async put(url: string, body?: any, headers?: ApiHeaders): Promise<any> {
    const resp = await fetch(url, { method: 'put', body, headers })
    const json = await resp.json()

    return json
  }

  public async patch(url: string, body?: any, headers?: ApiHeaders): Promise<any> {
    const resp = await fetch(url, { method: 'patch', body, headers })
    const json = await resp.json()

    return json
  }

  public async delete(url: string, headers?: ApiHeaders): Promise<any> {
    const resp = await fetch(url, { method: 'delete', headers })
    const json = await resp.json()

    return json
  }
}

export default new Http()
