import { Fragment } from "react";
import Icon from "../../components/ui/Icon";
import { ASSURANCES } from "../../data/upload-scan";

export default function AssuranceStrip() {
  return (
    <div className="py-space-sm px-space-md rounded-2xl bg-surface-container-lowest/70 backdrop-blur-md shadow-sm flex flex-wrap items-center justify-around gap-space-md text-center">
      {ASSURANCES.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && (
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-outline-variant" />
          )}
          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <Icon name={item.icon} className={`text-[18px] ${item.iconClass}`} />
            <span className="font-body-sm text-body-sm font-medium">
              {item.label}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}