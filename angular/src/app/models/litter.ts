export class Litter {

  litter_id: number;
  litter_created_by: number;
  litter_created_at: number;
  litter_cleaned_by: number;
  litter_cleaned_at: number;
  litter_location_long: number;
  litter_location_lat: number;
  litter_image: string;
  litter_image_url: string;
  litter_prefix = 'data:image/jpg;base64';
  Litter() {
    this.getHTML();
    console.log(this);
  }

  public getHTML() {

    this.litter_image_url = 'data:image/jpg;base64' + this.litter_image_url;
  }
}
