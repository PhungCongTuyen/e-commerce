import { AxiosRequestConfig } from 'axios'
import httpClient, { Response } from './httpClient'
import { API_ENDPOINT } from '../utils/constants/apiConstant'
import { useInfiniteQuery, UseInfiniteQueryOptions, useMutation, useQuery, UseQueryOptions } from 'react-query'


export type ApiParramsProps = { [key: string]: string | number | string[] | number[] | undefined | boolean }
interface ApiServiceProps {
  url: string
  params?: ApiParramsProps
  data?: any
  id?: string | number
  config?: AxiosRequestConfig
}

interface ApiQueryServiceProps<TOptions extends unknown> extends ApiServiceProps {
  key?: string
  options?: TOptions
}

interface ApiMethodProps {
  get: <T>(props: ApiServiceProps) => Promise<Response<T>>
  post: <T>(props: ApiServiceProps) => Promise<Response<T>>
  put: <T>(props: ApiServiceProps) => Promise<Response<T>>
  patch: <T>(props: ApiServiceProps) => Promise<Response<T>>
  delete: <T>(props: ApiServiceProps) => Promise<Response<T>>
}

export const GetApiMethodInstance = (): ApiMethodProps => {
  return {
    get: async <T>({ url, params, config }: ApiServiceProps) => {
      return httpClient.get<Response<T>>(
        `${API_ENDPOINT}${url}`,
        {
          ...config,
          params: params,
        },
      )
    },
    post: async <T = unknown>({ url, data, params }: ApiServiceProps) => {
      return httpClient.post<Response<T>>(`${API_ENDPOINT}${url}`, data, {
        params: params,
      })
    },
    put: async ({ url, data, params }: ApiServiceProps) => {
      return httpClient.put(`${API_ENDPOINT}${url}`, data, {
        params: params,
      })
    },
    patch: async ({ url, data, params }: ApiServiceProps) => {
      return httpClient.patch(`${API_ENDPOINT}${url}`, data, {
        params: params,
      })
    },
    delete: async ({ url, id, params }: ApiServiceProps) => {
      return httpClient.delete(`${API_ENDPOINT}${url}/${id}`, {
        params: params,
      })
    },
  }
}

export class ApiService {
  constructor() {
    this.apiMethod = GetApiMethodInstance()
  }

  apiMethod: ApiMethodProps
  useGet = <T>({
    url,
    params,
    options,
    config,
  }: ApiQueryServiceProps<Omit<UseQueryOptions<Response<T>>, 'queryKey' | 'queryFn'>>) => {
    return useQuery([url, params], () => this.apiMethod.get<T>({ url: url, params: params, config }), options)
  }
  useInfinite = <T>({
    url,
    params,
    options,
  }: ApiQueryServiceProps<Omit<UseInfiniteQueryOptions<Response<T>>, 'queryKey' | 'queryFn'>>) => {
    return useInfiniteQuery(
      [url, params],
      (pageParam: any) => this.apiMethod.get<T>({ url: url, params: { ...params, ...pageParam.pageParam } }),
      options,
    )
  }
  usePost = <T = unknown>({ url }: ApiServiceProps) => {
    return useMutation(({ data }: { data: Record<string, any> }) => this.apiMethod.post<T>({ url: url, data: data }))
  }
  usePut = <T = unknown>({ url }: ApiServiceProps) => {
    return useMutation(({ data }: { data: Record<string, any> }) => this.apiMethod.put<T>({ url, data }))
  }
  usePatch = <T = unknown>({ url, params }: ApiServiceProps) => {
    return useMutation(({ data }: { data: Record<string, any> }) =>
      this.apiMethod.patch<T>({ url: url, data: data, params: params }),
    )
  }
  useDelete = ({ url, params }: ApiServiceProps) => {
    return useMutation((id?: string | number) => this.apiMethod.delete({ url: url, id: id, params: params }))
  }
}
