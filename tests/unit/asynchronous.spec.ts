import { Card } from '@/core/entities'
import ApiRequest from '@/core/asynchronous'
import mockHttp from '../__mocks__/http.mock'

describe('Asynchronous functions tests', () => {
  let apiRequest: ApiRequest;

  beforeEach(() => {
    apiRequest = new ApiRequest(mockHttp)
  })

  it('Should return a json from asynchronous request', async () => {
    // arranges
    mockHttp.get = jest.fn((): Promise<Array<Card>> =>
      Promise.resolve([
        { number: 1, type: 101 },
        { number: 2, type: 102 },
        { number: 3, type: 103 },
      ]))

    // acts
    const res = await apiRequest.getTodoList()

    // asserts
    expect(mockHttp.get).toHaveBeenCalled()
    expect(mockHttp.get).toHaveBeenCalledTimes(1)
    expect(res).toBeInstanceOf(Array)
    expect(res.length).toBe(3)
  })

  it('Should throw a not found error', async () => {
    // arranges
    mockHttp.get = jest.fn(() =>
      Promise.reject({ status: 404, message: 'Not found' }))

    // acts
    // const caller = async () => await apiRequest.getTodoList()
    try {
      const res = await apiRequest.getTodoList()
    } catch(e) {
      // asserts
      expect(e).toEqual({ status: 404, message: 'Not found' })
    }
    expect(mockHttp.get).toHaveBeenCalled()
    expect(mockHttp.get).toHaveBeenCalledTimes(1)    
  })
})
