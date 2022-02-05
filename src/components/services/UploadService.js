import http from "../../http-common";

class UploadFilesService {
    upload(file, targetStyle) {
        let formData = new FormData();

        formData.append("file", file);
        formData.append("style", targetStyle)
        for (var value of formData.values()) {
            console.log(value);
        }
        return http.post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    }

    getFiles() {
        return http.get("/files");
    }
}

export default new UploadFilesService();