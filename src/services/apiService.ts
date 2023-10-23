import APIService from "./api-client";

export const apiService = (entity: string) => new APIService(entity);
