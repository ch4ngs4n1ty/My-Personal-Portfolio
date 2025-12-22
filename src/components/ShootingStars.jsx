// Shooting Stars Background Animation
function ShootingStars() {
  return (
    <div className="shooting-stars">
      {/* Create 10 shooting stars */}
      {[...Array(10)].map((_, index) => (
        <div key={index} className="star"></div>
      ))}
    </div>
  );
}

export default ShootingStars;

