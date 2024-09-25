import { useGlobalStore, useImgUploadStore } from "../store";
import { IImageRepository } from "../types/repository";
import { IImageService } from "../types/services";

export class ImgService implements IImageService {
  private setLoading = useGlobalStore.getState().setLoading;
  private setError = useGlobalStore.getState().setError;
  constructor(private imgRepo: IImageRepository) {}

    async uploadImage(formdata: FormData): Promise<unknown> {
        this.setError(null);
        this.setLoading(true);
        const response = await this.imgRepo.uploadImage(formdata);
        if(response.error){
            this.setError(response.error.message);
            this.setLoading(false);
        }
        this.setLoading(false);
        return response.data;
    }

   async getImages(): Promise<void> {
         this.setError(null);
         this.setLoading(true);
         const response = await this.imgRepo.getImages();
         if (response.error) {
           this.setError(response.error.message);
           this.setLoading(false);
         }
         this.setLoading(false);
         useImgUploadStore.setState({imgs: response.data || []});
    }


}