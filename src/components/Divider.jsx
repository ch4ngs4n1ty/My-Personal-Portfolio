function Divider({ label }) {
  return (
    <div className="blade-divider">
      {label && <span className="blade-label">{label}</span>}
    </div>
  );
}

export default Divider;
