// Unfinished-note card shared by project write-ups and the portfolio chat
function WorkInProgress({ title = 'Write-up in progress', detail = 'Project insights and highlights haven’t been documented yet.' }) {
  return (
    <div className="project-wip">
      <div className="project-wip-sketch" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="project-wip-copy">
        <p className="project-wip-title">{title}</p>
        <p className="project-wip-detail">{detail}</p>
      </div>
    </div>
  );
}

export default WorkInProgress;
