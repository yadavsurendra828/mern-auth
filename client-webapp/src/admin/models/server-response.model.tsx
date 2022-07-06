/**
 * Responses from the API are expected to be encapsulated in this data model.
 */
 export interface ServerResponse<ResponseData = any> {
    /**
     * Whether the request was successful or not.
     */
    status: boolean;
    /**
     * This property is always provided, but may not always contain a message.
     */
    message: string;
    /**
     * If the request was successful, this property will contain any expected data.
     */
    response?: ResponseData;
    /**
     * If the request was unsuccessful, this property will contain any expected data related to the failure.
     */
    error?: any;
  }
  
  export interface PaginatedData<Data = any> {
    current_page: number;
    data: Data;
    total: number;
  }