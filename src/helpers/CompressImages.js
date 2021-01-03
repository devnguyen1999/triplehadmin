import Resizer from "react-image-file-resizer";

const resizeFile = (file, options = {}) =>
  new Promise((resolve) => {
    let { maxWidth, maxHeight, quality } = options;
    if (maxWidth > 1080) maxWidth = 1280;
    if (maxHeight > 1080) maxHeight = 1280;
    if (quality > 75) quality = 75;
    Resizer.imageFileResizer(
      file,
      maxWidth || 1280,
      maxHeight || 1280,
      "JPEG",
      quality || 75,
      0,
      (uri) => {
        resolve(uri);
      },
      "blob"
    );
  });

function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function compressImages(files, options) {
  const newFiles = files.map(async (file) => {
    const newFile = await resizeFile(file, options);
    newFile.name = file.name.split(".")[0] + makeId(10) + ".jpeg"; // Đặt tên file chống trùng khi upload
    return newFile;
  });
  return Promise.all(newFiles).then((arr) => {
    return arr;
  });
}
