import profile from './images/logout.png'

export default function dash() {
  return (
    <>
      <nav className="dashboard-nav">
        <div className="dashboard-item">Codelinear</div>
        <img src={profile} alt="" className="profile" />
      </nav>
      <section className="dashboard-left-nav">
        <div className="dashboard-left-item">Home</div>
        <div className="dashboard-left-item">About</div>
        <div className="dashboard-left-item">Services</div>
        <div className="dashboard-left-item">Career</div>
        <div className="dashboard-left-item">Work</div>
        <div className="dashboard-left-item">Contact</div>
        <div className="dashboard-left-item">Blog</div>
      </section>
    </>
  );
}
