import React, { Component } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Button, Modal } from "@material-ui/core";
import { withTranslation } from "react-i18next";

class SnapShotCam extends Component {
  state = { openCamera: false };

  onTakePhoto(dataUri) {
    this.props.handlePhoto(dataUri);
    this.handleClick();
  }

  render() {
    const { t } = this.props;
    const { openCamera } = this.state;
    return (
      <div syle={{}} className="App">
        {openCamera && (
          <Modal open={true}>
            <Camera
              onTakePhoto={dataUri => {
                this.onTakePhoto(dataUri);
              }}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isMaxResolution={false}
              isImageMirror={false}
              isSilentMode={true}
              isDisplayStartCameraError={true}
              isFullscreen={true}
              sizeFactor={1}
            />
          </Modal>
        )}
        {!openCamera && (
          <Button
            variant="outlined"
            color="inherit"
            data-cy="img-condition-input"
            onClick={() => {
              this.handleClick();
            }}
          >
            {t("take pic")}
          </Button>
        )}
      </div>
    );
  }
  handleClick = () => {
    this.setState({ openCamera: !this.state.openCamera });
  };
}

export default withTranslation()(SnapShotCam);
