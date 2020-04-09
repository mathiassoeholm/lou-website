export type Handler = (event: HandlerEvent, context: object) => Promise<Result>;

export interface HandlerEvent {
  httpMethod: string;
  path: string;
  queryStringParameters?: { [parameter: string]: string };
  headers?: { [header: string]: string };
  body?: string;
  isBase64Encoded: boolean;
}

export interface Result {
  statusCode: number;
  isBase64Encoded?: boolean;
  headers?: { [header: string]: string };
  body?: string;
}
