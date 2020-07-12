export default interface GeoResponse {
  results: {
    components: {
      city?: string,
      village?: string,
      town?: string,
    },
  }[];
}
