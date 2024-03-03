export declare class BriteAPI {
  constructor(apiKey: string);
  fetch(endpoint: string): Promise<any>;
}

export declare class NextBriteAPI {
  constructor(apiKey: string | undefined);
  fetch(endpoint: string): Promise<any>;
}
