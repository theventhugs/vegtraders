function ProductGallery({ images = [] }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    // Ensure the first image shows when images load/change
    setIndex(0);
  }, [images]);

  const showPrev = () => {
    if (!images.length) return;
    setIndex(i => (i - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (!images.length) return;
    setIndex(i => (i + 1) % images.length);
  };

  if (!images.length) return null;

  return (
    <div className="product-gallery">
      <button type="button" onClick={showPrev} aria-label="Previous image">‹</button>
      <img src={images[index]} alt={`Product image ${index + 1} of ${images.length}`} />
      <button type="button" onClick={showNext} aria-label="Next image">›</button>
    </div>
  );
}