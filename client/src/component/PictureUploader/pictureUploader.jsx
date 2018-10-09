import React from 'react';

class PictureUploader extends React.Component {
    state = {
        src: ''
    }

    previewFile = () => {
        let file = document.querySelector("input[type='file'").files[0];
        let reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.addEventListener("load", () => {
            this.setState({ src: reader.result });
        }, false);
    }

    render() {
        return (
            <div>
                <h1>Upload a photo of your trip!</h1>
                <form>
                    <input style={{ display: 'block' }} type='file' accept='image/*' onChange={this.previewFile} />
                    <img src={this.state.src.length <= 0 ? 'https://static.umotive.com/img/product_image_thumbnail_placeholder.png' : this.state.src} alt={this.state.src.length <= 0 ? 'Placeholder' : 'Your image'} />
                </form>
            </div>
        )
    }
}

export default PictureUploader;