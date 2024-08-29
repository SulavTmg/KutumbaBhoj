import { FetchAPI } from "../api/FetchAPI";
import { globalStore, imgUploadStore } from "../store";
import { Img } from "../types/imgUploads";

export class ImageRepository implements ImageRepository {
    private api: FetchAPI;
    private basePath = "/ImgUploads";
    private globalState = globalStore.getState();

    constructor(api: FetchAPI){
        this.api = api;
    }

    async uploadImage(data: FormData){
        this.globalState.setError(null);
        this.globalState.setLoading(true);
        const response = await this.api.post<Img>(`${this.basePath}`, data);
        if (response.error) {
          this.globalState.setError(response.error.message);
          this.globalState.setLoading(false);
        }else {
          this.globalState.setLoading(false);
          return response.data;
        }
    }

    async getImages(){
        this.globalState.setError(null);
        this.globalState.setLoading(true);
        const response = await this.api.get<Img[]>(`${this.basePath}`);
        if (response.error) {
          this.globalState.setError(response.error.message);
          this.globalState.setLoading(false);
        } else {
          this.globalState.setLoading(false);
          imgUploadStore.setState({ imgs: response.data });
        }
    }
}