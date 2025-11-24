import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white grid grid-cols-[5px_1fr]  items-start">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-28 h-28 object-contain rounded"
          />
        ) : (
          <div className="w-28 h-28" />
        )}

        <div className="space-y-3 leading-relaxed text-base text-gray-800 text-left">
          {subtitle ? (
            <h3 className="text-lg font-semibold">{subtitle}</h3>
          ) : null}
          {Array.isArray(description) && description.length > 0
            ? description.map((item, index) => <p key={index}>{item}</p>)
            : null}
        </div>
      </div>
    </>
  );
};

const TxtFileWindow = WindowWrapper(Text, "txtfile");
export default TxtFileWindow;
