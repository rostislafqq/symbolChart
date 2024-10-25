import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import {
  ConnectionTypesEnum,
  ExchangeNamesEnum,
} from "../../../constants/enums";
import {
  getAxiosExchangeBaseConfig,
  getExchangeBaseUrl,
} from "../../../utils/connections.utils";

export default async function exchangeEndpoints(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, headers } = req;

  const exchange = headers["x-exchange"] as ExchangeNamesEnum;

  const pathParts = query.endpoint as string[];

  const baseUrl = getExchangeBaseUrl(exchange, ConnectionTypesEnum.api);
  const url = pathParts.join("/");

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    ...getAxiosExchangeBaseConfig(),
  });

  try {
    const result = await axiosInstance.request({
      method,
      url,
    });

    const { status, data } = result;

    return res.status(status).send(data);
  } catch (error) {
    const response = (error as AxiosError).response;

    return response
      ? res.status(response.status).send(response.data)
      : res.status(400).end();
  }
}
