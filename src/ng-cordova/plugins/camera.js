export class Camera {
  static takePicture(options) {
    return new Promise((resolve, reject) => {
      navigator.camera.getPicture(function (imageData) {
        resolve(imageData);
      }, function (err) {
        reject(err);
      }, options);
    });
  }
  cleanup: function () {
    return new Promise((resolve, reject) => {
      navigator.camera.cleanup(function () {
        resolve();
      }, function (err) {
        reject(err);
      });
    });
  }
}