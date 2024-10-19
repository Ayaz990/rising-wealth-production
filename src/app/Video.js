const VideoComponent = () => {
    return (
      <div className="block md:hidden mb-8 mx-4"> {/* Add mx-4 for horizontal margins */}
        <video
          width="100%"
          height="auto"
          controls
          className="rounded-lg"
        >
          {/* Update the source path to include the 'Videos' folder */}
          <source src="/Videos/Rising Wealth 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoComponent;
  