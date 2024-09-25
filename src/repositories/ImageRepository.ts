import { FetchAPI } from "../api/FetchAPI";
import { Img } from "../types/imgUploads";
import { IImageRepository } from "../types/repository";

export class ImageRepository implements IImageRepository {
  private api: FetchAPI;
  private basePath = "/ImgUploads";

  constructor(api: FetchAPI) {
    this.api = api;
  }

  async uploadImage(data: FormData) {
    return await this.api.post<Img>(`${this.basePath}`, data);
  }

  async getImages() {
    return await this.api.get<Img[]>(`${this.basePath}`);
  }
}
