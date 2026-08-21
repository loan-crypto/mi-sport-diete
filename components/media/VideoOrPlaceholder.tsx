"use client";

/* Portado de videoOrPlaceholder() en legacy-static-site/js/helpers.js. */

import { Icon } from "@/lib/icons";
import { useI18n } from "@/lib/i18n/context";

export default function VideoOrPlaceholder({ videoPath }: { videoPath?: string }) {
  const { t } = useI18n();

  return (
    <>
      <div className="photo-placeholder">
        <Icon name="play" />
        <span>{t("placeholder.addVideo")}</span>
      </div>
      {videoPath ? (
        <video
          src={videoPath}
          controls
          preload="metadata"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}
    </>
  );
}
