function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "-15px",
        width: "40px",
        height: "80px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "-15px",
        width: "40px",
        height: "80px",
      }}
      onClick={onClick}
    />
  );
}

export { NextArrow, PrevArrow };
