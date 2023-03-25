import React, { useState } from "react";

export default function DownloadSpeedCalculator() {
  const [fileSize, setFileSize] = useState<number>(0);
  const [internetSpeed, setInternetSpeed] = useState<number>(0);
  const [downloadTime, setDownloadTime] = useState<string>("");

  const handleFileSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileSize(Number(event.target.value));
  };

  const handleInternetSpeedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInternetSpeed(Number(event.target.value));
  };

  const calculateDownloadTime = () => {
    const downloadSpeedInBytesPerSecond = internetSpeed * 1000000;
    const fileSizeInBytes = fileSize * 1000000000;
    const downloadTimeInSeconds =
      fileSizeInBytes / downloadSpeedInBytesPerSecond;
    const hours = Math.floor(downloadTimeInSeconds / 3600);
    const minutes = Math.floor((downloadTimeInSeconds - hours * 3600) / 60);
    const seconds = Math.floor(
      downloadTimeInSeconds - hours * 3600 - minutes * 60
    );
    setDownloadTime(`${hours}h ${minutes}m ${seconds}s`);
  };

  return (
    <div>
      <h2>Download Speed Calculator</h2>
      <label>
        File Size (in GB):
        <input type="number" value={fileSize} onChange={handleFileSizeChange} />
      </label>
      <br />
      <label>
        Internet Speed (in MB/s):
        <input
          type="number"
          value={internetSpeed}
          onChange={handleInternetSpeedChange}
        />
      </label>
      <br />
      <button onClick={calculateDownloadTime}>Calculate Download Time</button>
      <br />
      {downloadTime && <p>Estimated Download Time: {downloadTime}</p>}
    </div>
  );
};
