import { exec } from "child_process";
import { CustomError } from "../../error";

interface VideoMetadata {
  duration: number;
  width: number;
  height: number;
}

export function getMetadata(file: string): Promise<VideoMetadata | undefined> {
  return new Promise((resolve, reject) => {
    exec(
      `ffprobe -v error -select_streams v:0 -show_entries format=duration:stream=width,height -of json "${file}"`,
      (err, stdout) => {
        if (err) return reject(undefined);

        const data = JSON.parse(stdout);

        resolve({
          duration: Number(data.format.duration) || 0,
          width: data.streams[0]?.width || 0,
          height: data.streams[0]?.height || 0,
        });
      }
    );
  });
}
