export type Img = {
  id: number;
  name: string | null;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: string | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string | null;
  provider_metadata: string | null;
  Images: string | null;
};

export interface ImgStore {
  imgs: Img[]
  uploadImage: (formdata: FormData) => Promise<unknown>;
  getImages: ()=> Promise<void>;
}
