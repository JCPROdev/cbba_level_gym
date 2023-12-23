const UPLOAD_PRESET = "g9mxqlfy";
const CLOUDNAME = "dzacq3hgh";

export const sendCloudinary = async (file) => {
  return new Promise((resolve) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    const req = new XMLHttpRequest();
    req.open("POST", `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`);

    req.addEventListener("load", () => {
      const res = JSON.parse(req.response);
      resolve(res.url);
    });

    req.send(formData);
  });
};
