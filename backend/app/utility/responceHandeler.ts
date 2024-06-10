export class responseHandler {
  constructor(public data: any = null, public error: any = null) {
    this.data = data;
    this.error = error;
  }
}
