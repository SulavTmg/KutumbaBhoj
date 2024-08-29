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

export type ImgPreview = {
  name: string;
  url: string;
};

export interface ImgStore {
  imgs: Img[];
}
