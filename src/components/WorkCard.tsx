import { caseStudyUrl } from "@/lib/site";
import { ProjectMock } from "./ProjectMocks";
import type { Project } from "./projects";

type WorkCardProps = { project: Project; index: number };

/** One cell of the work grid: a framed mini-mock, the pitch, and a link out
 *  to the full case study on maxallaire.com. */
export function WorkCard({ project, index }: WorkCardProps) {
  return (
    <article className="wcard" id={`case-${project.slug}`}>
      <a
        className="wcard__media"
        href={caseStudyUrl(project.slug)}
        aria-label={`${project.name} case study`}
      >
        <div className="frame frame--card">
          <div className="frame__bar">
            <div className="frame__dots">
              <i />
              <i />
              <i />
            </div>
            <span className="frame__url">{project.frameUrl}</span>
          </div>
          <div className="frame__body">
            <ProjectMock slug={project.slug} />
          </div>
        </div>
      </a>
      <div className="wcard__text">
        <span className="case__index">
          Case {String(index).padStart(2, "0")} — {project.when} · {project.status}
        </span>
        <h3 className="wcard__name">{project.name}</h3>
        <p className="wcard__what">{project.what}</p>
        <p className="wcard__body">{project.built}</p>
        <a className="btn btn--text case__link" href={caseStudyUrl(project.slug)}>
          Read the case study{" "}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
