import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile.data;
  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name}</p>
      </div>

      <div className="preview overflow-auto">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full max-h-[68vh] object-contain rounded"
          />
        ) : null}
      </div>
    </>
  );
};

const ImgFileWindow = WindowWrapper(Image, "imgfile");
export default ImgFileWindow;
